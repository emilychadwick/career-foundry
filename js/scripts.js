$(document).ready(function () {

  // Smooth scrolling

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().scrollTop
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  //Stellar
  $.stellar();

  //Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Form Submit

  $(".contact-btn").on('click', function () {
    var comment = $('.message-box').val();

    if (comment === "") {
      $(".message-box").css("border", "3px solid red");
    } else {
      $('#visible-comment').html("Thanks for reaching out! I'll be in touch soon.");
      $('.contact-box').hide();
    };

    return false;
  });

  $(".message-box").on("keyup", function () {
    var charCount = $('.message-box').val().length;

    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "white");
    };
    $("#char-count").html("Character count: " + charCount);

  });

  //work section
  for(var i = 0; i < works.length; ++i) {
    $("#work").append("\
      <div class='col-xs-12 col-s-6 col-md-6 col-lg-6'>\
        <div class='portfolio-col-grid'>\
          <a href='" + works[i].url + "' class='work-img'>\
            <img class='img-responsive portfolio-img' src='" + works[i].pic + "'>\
              <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
          </a>\
        </div>\
      </div>\
    ");
  };

  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

});

//map

var map;
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.606, lng: -122.332},
    zoom: 8
  });

}


