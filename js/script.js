// Burger menu
(function (){
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav')
    const social = document.querySelector('.social');
    const bodyScroll = document.querySelector('body');
        burger.addEventListener('click', () => {
            burger.classList.toggle('header__burger--active');
            nav.classList.toggle('nav__active');
            social.classList.toggle('social__active')
            bodyScroll.classList.toggle('body-active')
    });
}());

// Fix menu bar

const header = document.querySelector('.header__menu');
const wrapper = document.querySelector('.header__wrapper');
const headerHeight = header.offsetHeight;
const wrapperHeight = wrapper.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= wrapperHeight + headerHeight) {
        header.classList.add('header--fixed');
        wrapper.style.marginTop = null;
    } else {
        scrollDistance === 0;
        header.classList.remove('header--fixed');
        wrapper.style.marginTop = null;
    }
});




// Google map

function initMap() {
    var opt = {
        center: {lat: 40.76382296649538, lng: -73.94808965937432},
        zoom: 13,
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);
    
}
  
// Wow directory

new WOW().init();
  

