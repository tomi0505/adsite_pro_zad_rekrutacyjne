/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var mobileMenu = document.querySelector('#mobile-menu');\n  var hamburger = document.querySelector('#hamburger');\n  var $excerptBtn = $(\".excerpt-btn\");\n  hamburger.addEventListener('click', function () {\n    mobileMenu.classList.toggle('hidden');\n  });\n  $(function () {\n    $(\"#tabs\").tabs();\n  });\n  $excerptBtn.click(function (e) {\n    e.preventDefault();\n    $(this).prev().toggle();\n    $(this).toggleClass('excerpt-btn--open');\n    $(this).text('Rozwiń');\n    $('.excerpt-btn--open').text('Zwiń');\n  });\n  $('.slider-1').slick({\n    dots: true,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    mobileFirst: true,\n    autoplay: true,\n    pauseOnHover: true,\n    responsive: [{\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 2\n      }\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQTJCO0FBRTNCQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBTUUsV0FBVyxHQUFHQyxDQUFDLENBQUUsY0FBZSxDQUFDO0VBRXZDRixTQUFTLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hDQyxVQUFVLENBQUNLLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUN2QyxDQUFDLENBQUM7RUFFRkYsQ0FBQyxDQUFDLFlBQVk7SUFDWkEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNuQixDQUFDLENBQUM7RUFFRkosV0FBVyxDQUFDSyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFFO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCTixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNPLElBQUksQ0FBQyxDQUFDLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztJQUN4Q1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCVCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUV0QyxDQUFDLENBQUM7RUFFRlQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDVSxLQUFLLENBQUM7SUFDbkJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsWUFBWSxFQUFFLElBQUk7SUFDbEJDLFVBQVUsRUFBRSxDQUNWO01BQ0VDLFVBQVUsRUFBRSxHQUFHO01BQ2ZDLFFBQVEsRUFBRTtRQUNSUCxZQUFZLEVBQUU7TUFDaEI7SUFDRixDQUFDO0VBRUwsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLW1lbnUnKTtcclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyk7XHJcbiAgY29uc3QgJGV4Y2VycHRCdG4gPSAkKCBcIi5leGNlcnB0LWJ0blwiICk7XHJcblxyXG4gIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiN0YWJzXCIpLnRhYnMoKTtcclxuICB9KTtcclxuXHJcbiAgJGV4Y2VycHRCdG4uY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS5wcmV2KCkudG9nZ2xlKCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdleGNlcnB0LWJ0bi0tb3BlbicpO1xyXG4gICAgJCh0aGlzKS50ZXh0KCdSb3p3acWEJyk7XHJcbiAgICAkKCcuZXhjZXJwdC1idG4tLW9wZW4nKS50ZXh0KCdad2nFhCcpO1xyXG4gICAgXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zbGlkZXItMScpLnNsaWNrKHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG59KTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9iaWxlTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1idXJnZXIiLCIkZXhjZXJwdEJ0biIsIiQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0YWJzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwidG9nZ2xlQ2xhc3MiLCJ0ZXh0Iiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiYXV0b3BsYXkiLCJwYXVzZU9uSG92ZXIiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3MvaW5kZXguc2Nzcz9lMGI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;