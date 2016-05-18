$(document).ready(function(){
    
    if($('.b-popup').length) {
        $('#appslist .app').click(function(e){
                e.preventDefault();
                /* get data */
                imgpath = $(this).find('.appicon img').attr('src');
                appname = $(this).find('.appname').text();
                appcoins = $(this).find('.appbutton').html();
                appsub = $(this).find('.appsubtitle').text();
                appdescription  = $(this).data('description');
                devices = $(this).find('.appdevices').html();
                applink = $(this).data('link');
                appmail = $(this).data('mail');
                appwhatsup = $(this).data('whatsup');
                appsms = $(this).data('sms');
                apptwitter = $(this).data('twitter');
                appfb = $(this).data('facebook');
                appcountries = $(this).data('countries');
               	countries = appcountries.split("---");
               	$(".app-basic .fun-flags").empty();
				countries.forEach(function(elem,index){
					
					elem = elem.substring(0,2).toLowerCase();
					$('.app-basic .fun-flags').append('<img src="http://kazoolink.com/assets/img/flags/'+elem+'.png">');
				})
                /* set data */
                $('.img-app').attr('src', imgpath);
                $('.app-title').html("<span class='title'>"+appname+"</span>");
                $('.app-subtitle').text(appsub);
                $('.app-title, .coins-here').append(appcoins);
                $('.text-description').text(appdescription);
                $('.grey-area .devices').append(devices);
                $('.app-linka').text(applink);
				$('.app-linka').attr('title', applink);
				$('.app-linka').attr('href', applink);
                $('.sharing-fb').attr("href", appfb);
                $('.sharing-twitter').attr("href", apptwitter);
                $('.sharing-whatsup').attr("href", appsms);
                $('.sharing-more').attr("href", appwhatsup);
                $('.sharing-mail').attr("href", "mailto:"+appmail);
              
               
                setTimeout(function(){
                    $('#app-popup').bPopup({
                        positionStyle: 'absolute',
                        position: ['auto', 'auto'],
                        onClose: function() {
                            $('.img-app').attr('src', "");
                            $('.app-title').text("");
                            $('.coins-here .coins-button').remove("");
                            $('.text-description').text("");
                            $('.grey-area .devices > div').remove();
                            $('.app-linka').text("");
                            $('.sharing-fb').attr("href", "");
                            $('.sharing-twitter').attr("href", "");
                            $('.sharing-whatsup').attr("href", "");
                            $('.sharing-mail').attr("href", "");
                            $('.sharing-more').attr('href','');
			    $('.app-link').attr('title', '');
                        }
                    });
                }, 100);
                
               
        });
	
	$('#terms').click(function(e){
	    e.preventDefault();
	    $path = $(this).data('link');
	    	
	    $('#terms-popup').bPopup({
		contentContainer:'.cont',
		loadUrl: $path
	    });
	    return false;
	   
	});		
    }
   
    //$('.classic-accordion').find('.accordion-content').slideUp(100);
    
//    setTimeout(function(){
//	
//	$('.acc-part:first-child').find('.accordion-content').slideDown(200);
//	$('.acc-part:first-child').find('.title-acc').addClass('open');
//    }, 100);
   
    $(document).on('click', '.title-acc', function(){
	if ($(this).parents('.acc-part').find('.accordion-content').is(":visible")) {
	    $(this).removeClass('open');
	    $(this).parents('.acc-part').find('.accordion-content').slideUp();
	
	} else{
	    $('.title-acc').removeClass('open');
	    $('.acc-part').find('.accordion-content').slideUp();
	    
	    $(this).addClass('open');
	    $(this).parents('.acc-part').find('.accordion-content').slideDown(200);
	}
    
    });
    
    if ( $( "#owl" ).length ) {
		var owl = $("#owl");
 
		owl.owlCarousel({
	      	items:1,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true
	  });
    }
    
});
