//select header
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectTitle = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');
const body = document.querySelector('body');

selectHeader.addEventListener('click', () => {
    if (selectBody.classList.contains('select__body--active')) {
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';
        selectBody.style.maxHeight = null;
    }else {
        selectImg.style.transform = 'rotate(180deg)';
        selectBody.classList.add('select__body--active');
        selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
    }
});

selectItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        selectTitle.textContent = item.textContent;
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';  
        selectBody.style.maxHeight = null;  
    })
});

//maps
let center = [55.62990860032689,37.47329364035973];
let callCenter = [55.63157101676794,37.39410060789547];
let stock = [55.63544388883618,37.51955638144859];

function init() {
    let map = new ymaps.Map('map-element',{
        center: center,
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: "WebStart",
        balloonContentBody: "Пн: 09:00-18:00<br> Вт: 09:00-18:00<br> Ср: 09:00-18:00<br> Чт: 09:00-18:00<br> Пт: 09:00-18:00<br> Сб: Выходной<br> Вс: Выходной<br>",
        balloonContentFooter: "г. Москва, ул. Академика вараги, дом 8, к1",
        hintContent: ""
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/Vector.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
    });

    let placemark2 = new ymaps.Placemark(stock, {
        balloonContentHeader: "Склад",
        balloonContentBody: "Пн: 07:00-22:00<br> Вт: 07:00-22:00<br> Ср: 07:00-22:00<br> Чт: 07:00-22:00<br> Пт: 07:00-22:00<br> Сб: 12:00-18:00<br> Вс: Выходной<br>",
        balloonContentFooter: "г. Москва, ул. Профсоюзная, дом 7",
        hintContent: ""
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/Vector.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-36, -100]
    });

    let placemark3 = new ymaps.Placemark(callCenter, {
        balloonContentHeader: "Call-center",
        balloonContentBody: "Пн: 08:00-17:00<br> Вт: 08:00-17:00<br> Ср: 08:00-17:00<br> Чт: 08:00-17:00<br> Пт: 08:00-17:00<br> Сб: Выходной<br> Вс: Выходной<br>",
        balloonContentFooter: "г. Москва, ул. Родниковая, дом 7, ст.124",
        hintContent: ""
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/Vector.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}

ymaps.ready(init);


const burger = document.querySelector('.header__burger__mobile');
const menu = document.querySelector('.header__navigation');
const menuLink = document.querySelectorAll('.header__link');
const burgerOpen = document.querySelector('.open__menu');
const burgerCloce = document.querySelector('.cloce__menu');
const logo = document.querySelector('.header-logo') 

burger.addEventListener('click', () => {
    if(menu.classList.contains('header__navigation--active')) {
        for (let i = 0; i < menuLink.length; i ++) {
            menuLink[i].classList.remove('header__link--active');
        }
        menu.classList.remove('header__navigation--active');
        burgerOpen.setAttribute ('src', "img/header/burger_mobile.svg");
        body.style.overflow = 'visible'; 
    } else {
        for (let i = 0; i < menuLink.length; i ++) {
            menuLink[i].classList.add('header__link--active');
        }
        menu.classList.add('header__navigation--active');
        burgerOpen.setAttribute ('src', "img/header/close-menu.svg");
        body.style.overflow = 'hidden';
    } 
})

const buttonModal = document.querySelectorAll(".button__modal");
const tesrdriveButton = document.querySelector(".test-drive__button");
const modal = document.querySelector('.modal');


buttonModal.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.add('modal__active');
    });
});

modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__wrap');

    if (!isModal) {
        modal.classList.remove('modal__active')
    }
})


