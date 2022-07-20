window.addEventListener('DOMContentLoaded', () => {
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
let positin = [55.64272596679536,37.47518191550619]

function init() {
    let map = new ymaps.Map('map-element',{
        center: positin,
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
        iconImageHref: 'img/map/Vector.svg',
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
        iconImageHref: 'img/map/Vector.svg',
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
        iconImageHref: 'img/map/Vector.svg',
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

const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slider__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
  });



  //Form

  const form = document.querySelector('.form__elements');

  const sendForm = (data) => {
      return fetch('mail.php', {
          method: 'POST',
          body: JSON.stringify(data),
          header: {
              'Content-type': 'application/json; charset=UTF-8'
          }
      }).then(res => res.json())
  };

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const dataForm = new FormData(form);
      const user = {};


      dataForm.forEach((val, key) => {
          user[key] = val;
      });

      sendForm(user).then(data => {
          console.log("Письмо было отправленно!")
      });
      form.reset();
  })
})

//JQuery 
const accardion = document.querySelector('.facts__items');
const tab = document.querySelectorAll('.facts__item');
const factsOffer = document.querySelectorAll('.facts__offer');
const plusBtn = document.querySelectorAll('.facts__info-btn-img')

accardion.addEventListener('click', (e) => {
    const target = e.target.closest('.facts__item');
    if (target) {
        tab.forEach((item, i) => {
            if (item === target) {
                tab[i].classList.add('facts__item-active');
                factsOffer[i].style.display = 'block';
                plusBtn[i].setAttribute('src', 'img/facts/minus.svg');

            } else {
                tab[i].classList.remove('facts__item-active');
                factsOffer[i].style.display = 'none';
                plusBtn[i].setAttribute('src', 'img/facts/plus.svg');
            }
        })
    }
})

  const pecItem = document.querySelectorAll('.peculiarities__content-item');
  const pecAcord = document.querySelector('.peculiarities__content');


  pecAcord.addEventListener('click', (e) => {
    const target = e.target.closest('.peculiarities__content-item');
    if (target) {
        pecItem.forEach((item, i) => {
            if (item === target) {
                pecItem[i].classList.add('peculiarities__content-item-active');
            } else {
                pecItem[i].classList.remove('peculiarities__content-item-active');
            }
        })
    }
})

const sliderMobileItems = document.querySelectorAll('.peculiarities__content-item');
const sliderLine = document.querySelector('.slider__line');

let count = 0;
let width;

function init() {
    if (window.innerWidth <= 780) {
    width = document.querySelector('.slider__mobile').offsetWidth;
    sliderLine.style.width = width*sliderMobileItems.length + 'px';
    sliderMobileItems.forEach((item, i) => {
        item.style.width = width + 'px';
    })
    } else {
        sliderLine.style.width = "100%";
        sliderMobileItems.forEach((item, i) => {
            item.style.width = '38.8rem';
            sliderLine.style.transform = 'translate(0px)'
        })
    }
}

init();

window.onresize = init;

function rollSlider () {
    if(window.innerWidth < 780) {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    
}


sliderMobileItems.forEach((item, i) => {
    item.addEventListener('click', () => {
    count++;
    if (count >= sliderMobileItems.length && (window.innerWidth < 780)) {
        count = 0;
        rollSlider();
    } else
    rollSlider();
    })
})    


    

    



    




 







