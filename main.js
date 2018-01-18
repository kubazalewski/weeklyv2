$(document).ready(function(){

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });

jQuery("document").ready(function($){

	var nav = $('.nav-container');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});