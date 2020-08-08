@@include('dynamic_adaptive.js');

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function() {
    $('.icon-menu').click(function(event) {
        $('.icon-menu').toggleClass('icon-menu_active');
    })
    $('.icon-menu').click(function(event) {
        $('.menu__body').toggleClass('menu__body_active');
    })
})