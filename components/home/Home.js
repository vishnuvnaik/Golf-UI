$(document).ready(function () {
  $("#flip").click(function () {
    $(".heading").hide();
    $("#panel").slideDown("slow");
  });
});

$("#crossBtn").click(function () {
  $("#panel").slideUp("slow");
  $(".heading").show();
});
