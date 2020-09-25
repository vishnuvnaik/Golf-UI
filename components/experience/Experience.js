$(document).ready(function () {
  $("#flip").click(function () {
    $(".outerBody").hide();
    $("#panel").slideDown("slow");
  });
});

$("#crossBtn").on("click", function () {
  $("#panel").slideUp("slow");
  $(".outerBody").show();
});
