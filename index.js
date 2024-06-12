var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true
});

var elem = document.querySelector('.slider');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true,
    prevNextButtons: false
});

// const save = document.querySelector(".save");
const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo a");
const menu = document.querySelector(".menu")
const pageLeft = document.querySelector("page-left")

// save.addEventListener("click", function () {
//     this.classList.toggle("active")
// })

burger.addEventListener("click", function () {
    this.classList.toggle("active")
    logo.classList.toggle("active")
    menu.classList.toggle("active")
})

$(window).on("scroll", function () {
    let sticky = $(".page-left"),
        scroll = $(window).scrollTop();
    if (scroll >= 400) sticky.addClass("hide")
    else sticky.removeClass("hide")
})