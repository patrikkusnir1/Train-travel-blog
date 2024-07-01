// Initialize flickity for carousel elements
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
});

var elem = document.querySelector(".slider");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
  prevNextButtons: false,
});

// Burger menu functionality
const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo a");
const menu = document.querySelector("nav");
const pageLeft = document.querySelector("page-left");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  logo.classList.toggle("active");
  menu.classList.toggle("active");
});

// Sticky menu on the scroll

$(window).on("scroll", function () {
  let sticky = $(".page-left"),
    scroll = $(window).scrollTop();
  if (scroll >= 625) sticky.addClass("hide");
  else {
    sticky.removeClass("hide");
  }
});

// show full article and handle scrolling
document.addEventListener("DOMContentLoaded", function () {
  let readMoreLink = document.getElementById("read-more");
  let fullArticle = document.getElementById("full-article");
  let showLessLink = document.getElementById("show-less");
  let introText = document.getElementById("intro-text");
  let postFooter = document.querySelector(".post-footer");
  let preFooter = document.querySelector(".pre-footer");
  let footer = document.querySelector("footer");

  let previousScrollPosition = 0;

  if (readMoreLink && fullArticle && showLessLink && introText) {
    readMoreLink.addEventListener("click", function (e) {
      e.preventDefault();
      previousScrollPosition = window.scrollY;

      fullArticle.style.display = "block";
      postFooter.style.display = "block";
      preFooter.style.display = "block";
      footer.style.display = "block";

      introText.style.display = "none";
      window.scrollTo({
        top: fullArticle.offsetTop,
        behavior: "smooth",
      });
    });

    showLessLink.addEventListener("click", function (e) {
      e.preventDefault();
      fullArticle.style.display = "none";
      postFooter.style.display = "none";
      preFooter.style.display = "none";
      footer.style.display = "none";
      introText.style.display = "block";
      window.scrollTo({
        top: previousScrollPosition,
        behavior: "smooth",
      });
    });
  } else {
    console.log(
      "One or more elements (readMoreLink, fullArticle, showLessLink, introText) were not found."
    );
  }
});
