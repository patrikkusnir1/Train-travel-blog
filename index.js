// window.onload = function () {
//     document.getElementById("fademe").style.opacity = 1;
// }

let gallery = $(".gallery")
gallery.find("a").on("click", function () {
    $('<div id="overlay"></div>').appendTo('body');
    event.preventDefault();
})