$( document ).ready(function() {
 
  $( '.navigation__list' ).hide();
  $(".navigation__button").click(function () {

    if($('#nav__list:visible').length == 0 && $("#navi-toggle").prop('checked') == false) 
      {
        $(".navigation__list").fadeIn().css("display","flex");
      }
    });


    //$( '.navigation__list' ).fadeToggle( "fast", "linear" );
    
//});

// From great Udemy course by Jonas Schmedtmann: http://codingheroes.io/

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]').click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  }
  $( "#navi-toggle" ).prop( "checked", false );
  
});

});