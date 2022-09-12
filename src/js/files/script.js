// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";

window.addEventListener("load", function (event) {
  let carBack = document.querySelector('#carBack');
  if (carBack) {
    setTimeout(() => {
      carBack.classList.add("_active")
    }, 400)
  }
});