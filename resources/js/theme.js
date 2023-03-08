/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/theme.scss":
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/theme.scss */ "./src/scss/theme.scss");
// Need to import stylesheet so Webpack processes it

const secondaryHeader = document.getElementById('secondary-header');
const secondaryHeaderHeight = secondaryHeader.offsetHeight;
const primaryHeader = document.getElementById('primary-header');
const primaryHeaderHeight = primaryHeader.offsetHeight;
const siteContent = document.getElementById('content');
function setHeader() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollPosition > secondaryHeaderHeight) {
    primaryHeader.style.position = 'fixed';
    siteContent.style.marginTop = `${primaryHeaderHeight}px`;
  } else {
    primaryHeader.style.position = 'static';
    siteContent.style.marginTop = 0;
  }
}
window.addEventListener('load', setHeader);
window.addEventListener('scroll', setHeader);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNEI7QUFFNUIsTUFBTUEsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNuRSxNQUFNQyxxQkFBcUIsR0FBR0gsZUFBZSxDQUFDSSxZQUFZO0FBRTFELE1BQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFDL0QsTUFBTUksbUJBQW1CLEdBQUdELGFBQWEsQ0FBQ0QsWUFBWTtBQUV0RCxNQUFNRyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUV0RCxTQUFTTSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsTUFBTUMsY0FBYyxHQUFHUixRQUFRLENBQUNTLGVBQWUsQ0FBQ0MsU0FBUyxJQUFJVixRQUFRLENBQUNXLElBQUksQ0FBQ0QsU0FBUztFQUVwRixJQUFJRixjQUFjLEdBQUdOLHFCQUFxQixFQUFFO0lBQzFDRSxhQUFhLENBQUNRLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87SUFDdENQLFdBQVcsQ0FBQ00sS0FBSyxDQUFDRSxTQUFTLEdBQUksR0FBRVQsbUJBQW9CLElBQUc7RUFDMUQsQ0FBQyxNQUFNO0lBQ0xELGFBQWEsQ0FBQ1EsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUTtJQUN2Q1AsV0FBVyxDQUFDTSxLQUFLLENBQUNFLFNBQVMsR0FBRyxDQUFDO0VBQ2pDO0FBQ0Y7QUFFQUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVULFNBQVMsQ0FBQztBQUMxQ1EsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVULFNBQVMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdGhlbWUuc2Nzcz9kOTViIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTmVlZCB0byBpbXBvcnQgc3R5bGVzaGVldCBzbyBXZWJwYWNrIHByb2Nlc3NlcyBpdFxuaW1wb3J0ICcuLi9zY3NzL3RoZW1lLnNjc3MnO1xuXG5jb25zdCBzZWNvbmRhcnlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kYXJ5LWhlYWRlcicpO1xuY29uc3Qgc2Vjb25kYXJ5SGVhZGVySGVpZ2h0ID0gc2Vjb25kYXJ5SGVhZGVyLm9mZnNldEhlaWdodDtcblxuY29uc3QgcHJpbWFyeUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5LWhlYWRlcicpO1xuY29uc3QgcHJpbWFyeUhlYWRlckhlaWdodCA9IHByaW1hcnlIZWFkZXIub2Zmc2V0SGVpZ2h0O1xuXG5jb25zdCBzaXRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIHNldEhlYWRlcigpIHtcbiAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXG4gIGlmIChzY3JvbGxQb3NpdGlvbiA+IHNlY29uZGFyeUhlYWRlckhlaWdodCkge1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHNpdGVDb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IGAke3ByaW1hcnlIZWFkZXJIZWlnaHR9cHhgO1xuICB9IGVsc2Uge1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICBzaXRlQ29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2V0SGVhZGVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWFkZXIpO1xuIl0sIm5hbWVzIjpbInNlY29uZGFyeUhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWNvbmRhcnlIZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwcmltYXJ5SGVhZGVyIiwicHJpbWFyeUhlYWRlckhlaWdodCIsInNpdGVDb250ZW50Iiwic2V0SGVhZGVyIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9