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

// HEADER ==========================================================================================
// Реализация меню бургера через jQuery через класс _active =====================================
$(document).ready(function() {
    $('.icon-menu').click(function(event) {
        $('.icon-menu').toggleClass('icon-menu_active');
    })
    $('.icon-menu').click(function(event) {
        $('.menu__body').toggleClass('menu__body_active');
    })
})
// HEADER // ==========================================================================================

// ASIDE ==========================================================================================
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


// Реализация всплывающей карточки товара в каталоге (нативный JS) через класс _active
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
// ASIDE // ==========================================================================================

// SEARCH ==========================================================================================
$(document).ready(function() {
    $('.search-page__title').click(function(event) {
        $('.search-page__title').toggleClass('_active');
        $('.categories-search').slideToggle(500);
    })
})

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
let searchSelect = document.querySelector('.search-page__title');

for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function(e) {
        checkboxCategory.classList.toggle('_active');

        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

        if (checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('_categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        }else{
            searchSelect.classList.remove('_categories');
        }
    });
}
// SEARCH // ==========================================================================================
