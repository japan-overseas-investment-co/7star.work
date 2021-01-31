$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function changeLanguage() {
  return "{{ site.lang = "cn" }}";
}