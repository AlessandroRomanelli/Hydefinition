$(document).ready(function() {
  if (sessionStorage.hasVisited) {
    $('.cover').css('display', 'none')
  } else {
    sessionStorage.hasVisited = true
    $('body').css('overflow', 'hidden')
  }
  $('.background').on('click', function() {
    $(this).parent().addClass("hidden")
    $('body').css('overflow', 'auto')
  })
})
