$(document).ready(function() {
  if (sessionStorage.hasVisited) {
    $('.cover').css('display', 'none')
  } else {
    sessionStorage.hasVisited = true
  }
  $('#logo').on('click', function() {
    $(this).parent().addClass("hidden")
  })
})
