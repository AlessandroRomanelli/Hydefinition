function toggleLoader() {
  if (sessionStorage.hasVisited) {
    $('.cover').css('display', 'none')
  } else {
    sessionStorage.hasVisited = true
    $('body').css('overflow', 'hidden')
  }
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

$(document).ready(function() {
  toggleLoader();
})
