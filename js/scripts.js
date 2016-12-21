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
});
