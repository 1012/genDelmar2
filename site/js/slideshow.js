function delmar_slideshow(elem){
      console.log("start");
      var tabLength = $(elem).find(".d_inner > .item").length;
      var slides = $(elem).find(".d_inner > .item") ;
      this.$items = $(elem).find(".d_inner > .item") ;
      this.$active = null ;

      /* wire up roll over */
      $(elem).find(".d_inner").on({
          mouseenter: function() {
            $(elem).find(".d_inner").addClass("paused");
          },
          mouseleave: function(){
             $(elem).find(".d_inner").removeClass("paused");
          }
      });

      /* wire up tabs hover */
      $(elem).find(".d_tabs > .item").on({
           mouseenter: function() {
            $(elem).find(".d_inner").addClass("paused");
            $(elem).find(".d_tabs > .item.active").removeClass("active");
            $(elem).find(".d_inner > .item.active").removeClass("active");
            $(this).addClass("active");
            var tabs = $(this).parent().children(".item");
            var currenttab = tabs.index($(this));
            slides.eq(currenttab).addClass("active");
          },
          mouseleave: function(){
             $(elem).find(".d_inner").removeClass("paused");
          }

      });




      var interval = setInterval(function(){
          if(!$(elem).find(".d_inner").hasClass("paused")) {

            this.$active = $(elem).find(".d_inner > .item.active");
            this.$items = this.$active.parent().children('.item');
            var next = this.$items.index(this.$active)+1;
            if (next ==   this.$items.length) {
                next = 0 ; 
            }
            this.$items.eq(next).addClass("active");
            this.$active.removeClass("active");
            $(elem).find(".d_tabs > .item.active").removeClass("active");
            $(elem).find(".d_tabs > .item").eq(next).addClass("active");
          }
    


      	
      },2000);
}

function delmar_slideshowActive(elem){
	console.log("in interval");
	var tabs = $(elem).find(".d_inner > div").length;

      console.log(tabs);

}