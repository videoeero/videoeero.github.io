$( document ).ready(function() {
  $( '.navigation__list' ).hide();
  $(".navigation__button").click(function () {
    if($('#nav__list:visible').length == 0 && $("#navi-toggle").prop('checked') == false) 
      {
        $(".navigation__list").fadeIn().css("display","flex");
      }
    });


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


var phoneWidth = window.matchMedia( "(max-width: 37.5em)" );
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (phoneWidth.matches) {
      document.getElementById("sos-js").style.top = "3rem";
    }
    else {
      document.getElementById("sos-js").style.top = "4rem";
    }
  } else {
    document.getElementById("sos-js").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

$("#status-green").click(function(){
  $(".sos__green").css("display", "block");
  $(".sos__yellow").css("display", "none");
  $(".sos__red").css("display", "none");
});

$("#status-yellow").click(function(){
  $(".sos__green").css("display", "none");
  $(".sos__yellow").css("display", "block");
  $(".sos__red").css("display", "none");
});

$("#status-red").click(function(){
  $(".sos__green").css("display", "none");
  $(".sos__yellow").css("display", "none");
  $(".sos__red").css("display", "block");
});



});

