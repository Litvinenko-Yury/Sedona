"use strict";
var mainNavToggle = document.querySelector(".main-nav__toggle");
var mainNavToggleNoJS = document.querySelector(".main-nav__toggle--no-js");
var navList = document.querySelector(".nav-list");

/*если JS есть, показать кнопки "откр/закр" меню-моб*/
mainNavToggle.classList.remove("main-nav__toggle--no-js");

/*события по кнопке "закрыть меню"*/
mainNavToggle.addEventListener("click", function (event) {
  event.preventDefault();

  /*закрыть-открыть меню*/
  navList.classList.toggle("nav-list--closed");

  /*изменить кнопку*/
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
});
