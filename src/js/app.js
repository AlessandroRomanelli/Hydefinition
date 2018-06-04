function toggleLoader() {
  if (sessionStorage.hasVisited) {
    $('.cover').remove();
  } else {
    sessionStorage.hasVisited = true
    $('body').css('overflow', 'hidden')
    $('.background').hover(function () {
      $('#logo img').removeClass('heartbeat');
    }, function () {
      $('#logo img').addClass('heartbeat');
    })
    $('.background').on('click', function() {
      $('.cover').addClass("hidden")
      $('body').css('overflow', 'auto')
    })
    setTimeout(function() {
      $('.cover').addClass("hidden");
      $('body').css('overflow', 'auto')
      setTimeout(function () {
        $('.cover').remove();
      }, 500)
    }, 5000);
  }
}

$(document).ready(function() {
  toggleLoader();
  $(document).scroll(function () {
    if (window.scrollY > 0 && window.scrollY < 550) {
      var deplaceY = ""+(40 + 60*(window.scrollY/550)+"%");
      $('.image.para').css('background-position', "50% "+deplaceY)
    }
    if (window.scrollY > 350 && window.scrollY < 800) {
      console.log(window.scrollY)
      var deplaceY = ""+(100*((window.scrollY-350)/450))+"%"
      $('.image.sherman').css('background-position', '50% '+deplaceY)
    }
  });
})
