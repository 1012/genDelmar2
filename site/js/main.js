function scrollHelp(target){
	$('html, body').animate({
    	scrollTop: $(target).offset().top
	}, 1000);
	return false;
}
