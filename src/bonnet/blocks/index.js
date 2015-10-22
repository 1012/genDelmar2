  <script type="text/javascript">
            $(function(){
                delmar_slideshow($("#slideshow_index"));
                delmar_slideshow($("#slideshow_clients"));

                jQuery('#links_parallax').parallax();




                $(window).scroll(function(){
                    var topOfWindow = $(window).scrollTop();
                    if ($(".d_newssection").offset().top < topOfWindow+300){
                        $(".d_newsright").removeClass("slideRight").addClass("slideRight");
                        $(".d_newsleft").removeClass("slideLeft").addClass("slideLeft");
                    }
                     if ($(".d_corpsection").offset().top < topOfWindow+300){
                        $(".d_corpright").removeClass("slideRight").addClass("slideRight");
                        $(".d_corpleft").removeClass("slideLeft").addClass("slideLeft");
                        $(".d_corpcenter").removeClass("slideUp").addClass("slideUp");
                    }    

                    

                });



            // contact form
            $("#submit_button").click(function(){
                // validation
               
                var validationPass = true;
                 $("#contactform input[required=true], #contactform textarea[required=true]").each(function(){
                   
                    $(this).css('border-color',''); 
                    if(!$.trim($(this).val())){ //if this field is empty 
                        $(this).css('border-color','red'); //change border color to red   
                        validationPass = false; //set do not proceed flag
                    }
                      //check invalid email
                    var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
                    if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                        $(this).css('border-color','red'); //change border color to red   
                        validationPass = false; //set do not proceed flag              
                    }   


                    


                });

                 if(validationPass) //everything looks good! proceed...
                        {
                        //get input field values data to be sent to server
                        post_data = {
                            'contact_name'     : $('input[name="contact_name"]').val(), 
                            'contact_email'    : $('input[name="contact_email"]').val(), 
                            'contact_message'  : $('textarea[name="contact_message"]').val()
                            };
                        console.log("sending");
                        //Ajax post data to server
                        $.post('mailer.php', post_data, function(response){  
                              console.log("sent");
                            if(response.status == 'ok'){ //load json data from server and output message 
                              $("#serverSent").show("slow"); 
                              $("#contactform  input[required=true], #contactform textarea[required=true]").val('');    
                                 // uncomment to debug
                                 console.log("info:" +response.info);
                            }else{
                                $("#serverErrors").show("slow");
                                $.each(response.errors, function(k,err){
                                    switch(err.type){
                                        case "field":
                                            $("#" + err.name ).css('border-color','red'); 
                                           
                                            break;
                                        case "server":
                                            $("<p>" + err.text + "</p>").insertAfter("#serverErrors p");
                                            
                                            break;
                                    }

                                   
                                });
                                $("#serverErrors").show("slow");


                               
                            }}, 'json').fail(function(xhr,textstatus,errorThrown){
                                     console.log("responseText:"+xhr.responseText);
                                     console.log("textstatus:"+textstatus);
                                     console.log("errorThrown:"+errorThrown);
                                     

                            });
                    }





                return false;
            });
            // end of contact form

           //reset previously set border colors and hide all message on .keyup()
            $("#contactform  input[required=true], #contactform textarea[required=true]").keyup(function() { 
                $(this).css('border-color',''); 
                
            });



            });


            // javascript animations
            function animateNews(){
                $(".d_newsright").removeClass("slideRight").addClass("slideRight");
                $(".d_newsleft").removeClass("slideLeft").addClass("slideLeft");
                $(".d_corpright").removeClass("slideRight").addClass("slideRight");
                $(".d_corpleft").removeClass("slideLeft").addClass("slideLeft");
                $(".d_corpcenter").removeClass("slideUp").addClass("slideUp");
                
            }

        </script>