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
    var startY1 = 0
    var endY1 = 550
    if (window.scrollY > startY1 && window.scrollY < endY1) {
      var deplaceY = ""+(40 + 60*(window.scrollY/(endY1-startY1))+"%");
      $('.image.para').css('background-position', "50% "+deplaceY)
    }

    var startY2 = 0;
    var endY2 = 800
    if (window.scrollY > startY2 && window.scrollY < endY2) {
      console.log(window.scrollY)
      var deplaceY = ""+(100*(((window.scrollY-startY2)*(window.innerHeight/1200))/(endY2-startY2)))+"%"
      $('.image.sherman').css('background-position', '50% '+deplaceY)
    }
  });
})
