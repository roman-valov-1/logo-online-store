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


// Реализация меню бургера через jQuery =====================================
$(document).ready(function() {
    $('.icon-menu').click(function(event) {
        $('.icon-menu').toggleClass('icon-menu_active');
    })
    $('.icon-menu').click(function(event) {
        $('.menu__body').toggleClass('menu__body_active');
    })
})

$(document).ready(function() {
    $('.menu-page__burger').click(function(event) {
        $('.menu-page__burger').toggleClass('menu-page__burger_active');
        $('.menu-page__body').slideToggle(500); //выдвигающийся блок 
    })
})

// Реализация на нативном JS =======================================
// let menuBurger = document.querySelector('.menu-page__burger');

// menuBurger.addEventListener("click", function(e) {
//     menuBurger.classList.toggle('_active');
// });


// Реализация всплывающей карточки товара в каталоге (нативный JS)
let menuParents = document.querySelectorAll('.menu-page__parent');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function(e) {
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener("mouseleave", function(e) {
        menuParent.classList.remove('_active');
    });
}

