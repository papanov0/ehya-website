$(document).ready(function(){
  var mySwiperReviews = new Swiper('.reviews-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  const swiper2 = new Swiper('.reviews-container', {
    
  });

  

  var mySwiper = new Swiper('.history__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.text__slider-button--next',
      prevEl: '.text__slider-button--prev',
    },
  });

  let trendsNew = $('.nav__item--bold');
  let trends = $('.nav__title--trends');
  let trendsBest = $('.nav__item--best');
  let trendsSoon = $('.nav__item--soon');

    trendsNew.on('click', function () {
      $('.card__item--active-1').addClass('card__item--none-1');
    });

    $(".nav__item--bold").click(function(){
      $(".card__item").removeClass("card__item--none-2 card__item--none-3");
    });

    $(".nav__title--trends").click(function(){
      $(".card__item").removeClass("card__item--none-1 card__item--none-2 card__item--none-3");
    });

    trendsBest.on('click', function () {
      $('.card__item--active-2').addClass('card__item--none-2');
    });

    $(".nav__item--best").click(function(){
      $(".card__item").removeClass("card__item--none-1 card__item--none-3");
    });

    trendsSoon.on('click', function () {
      $('.card__item--active-3').addClass('card__item--none-3');
    });

    $(".nav__item--soon").click(function(){
      $(".card__item").removeClass("card__item--none-1 card__item--none-2");
    });

  // Отправка данных на сервер
  function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }

  //обработка форм
  $(".feedback-form").validate({
    errorClass: "invalid",
      messages: {
        email: {
          required: "Введите коректный Email",
          email: "Ваш электронный адрес должен быть в формате name@domain.com"
        }
      },

  });

  let menuOpen = $('.navbar-top__menu-button');
  let menuClose = $('.btn-menu');

  menuOpen.on('click', function () {
    $('.mobile-container').addClass('mobile-container--visible');
  });

  $(".btn-menu").click(function(){
    $(".mobile-container").removeClass("mobile-container--visible");
  });

  });




