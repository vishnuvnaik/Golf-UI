$(document).ready(function () {
  $("#flip").click(function () {
    $(".heading").hide();
    $(".container").hide();
    $(".centerStyle").hide();
    $("#panel").slideDown("slow");
  });
  $("#crossBtn").click(function () {
    $("#panel").slideUp("slow");
    $(".container").show();
    $(".heading").show();
    $(".centerStyle").show();
  });
});

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var element = $(".animateThis");
    $(".animateThis").each(function () {
      if (height > $(this).offset().top) {
        $(this).addClass("animate");
        // $(window).off("scroll");
      } else {
        $(this).removeClass("animate");
      }
    });
  });
});
