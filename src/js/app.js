$(document).ready(function() {
  if (sessionStorage.hasVisited) {
    $('.cover').css('display', 'none')
  } else {
    sessionStorage.hasVisited = true
  }
  $('.background').on('click', function() {
    $(this).parent().addClass("hidden")
  })
})
