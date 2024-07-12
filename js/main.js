// Dropdown menu---------------------------------------------------------------
// let intervalId;


// document.querySelectorAll('.dropdown-toggle').forEach(e => {
//     e.addEventListener('click', e => {
//         const menu = e.currentTarget.dataset.path;
//         document.querySelectorAll('.dropdown-menu').forEach(e => {
//             if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
//                 e.classList.remove('menu-active');
//                 e.classList.remove('open');
//                 document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
//                 intervalId = setTimeout(() => {
//                     document.querySelector(`[data-target=${menu}]`).classList.add('open');
//                 })
//             }

//             if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
//                 clearTimeout(intervalId);
//                 document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
//                 intervalId = setTimeout(() => {
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('open');
//                 }, 0);
//             }

//             window.onclick = e => {
//                 if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
//                     return;
//                 } else {
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('open');
//                 }
//             }

//         });
//     });
// });

// Scroll header---------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let heroHeight = hero.offsetHeight / 1000;


        if (scrollTop >= heroHeight) {
            header.classList.add('header-scroll')
            hero.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('header-scroll')
            hero.style.marginTop = `10px`;
        }
    });
})

// AOS --------------------------------------------------------------------------

AOS.init({
    once: true
});


// swiper--------------------------------------------------------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 3000
    }
});

// burger menu---------------------------------------------------------------------------

document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.icon-menu')
    const burgerNavLink = e.target.closest('.menu__link')

    if (!burgerIcon && !burgerNavLink) return

    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('menu-open')) {
        document.body.classList.add('menu-open')
    } else {
        document.body.classList.remove('menu-open')
    }
}