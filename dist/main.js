/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project-k-setup/./src/sass/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n\r\n\r\nconst headlinesContainer = document.getElementById(\"todays-headlines\");\r\nconst seeAllBtn = document.getElementById(\"see-all\");\r\n\r\nconst API =\r\n  \"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bAyMmUuJ8Aa2hOxXViAcZBdgKjrIenYU\";\r\n\r\nlet results;\r\n\r\nfunction renderHeadlines(results, index) {\r\n  headlinesContainer.innerHTML = \"\";\r\n  for (let i = 0; i <= index; i++) {\r\n    const result = results[i];\r\n    const headlineHtml = `\r\n        <li class=\"w-336  flex  items-center  gap-sm\">\r\n            <figure class=\"w-[102px]  h-[96px]  rounded-sm  overflow-hidden  shrink-0  object-cover\">\r\n                <img class=\"h-full w-full\"\r\n                    src=\"${result.multimedia[1].url}\"\r\n                    alt=\"king pin knocked down\">\r\n            </figure>\r\n            <div class=\"flex  flex-col justify-center  gap-xsm    grow\">\r\n                <h3 class=\"font-bold  text-md\">${result.title}\r\n                </h3>\r\n                <p class=\"truncate-2  max-w-[200px]  text-sm\">${result.abstract}</p>\r\n            </div>\r\n       </li>\r\n        `;\r\n    headlinesContainer.insertAdjacentHTML(\"beforeend\", headlineHtml);\r\n  }\r\n}\r\n\r\nasync function getData() {\r\n  const response = await fetch(API);\r\n  const data = await response.json();\r\n  results = data.results;\r\n  console.log(results);\r\n  renderHeadlines(results, 7);\r\n}\r\ngetData();\r\n\r\nlet all = false;\r\n\r\nseeAllBtn.addEventListener(\"click\", function () {\r\n  if (all) {\r\n    renderHeadlines(results, 7);\r\n    all = false;\r\n  } else if (!all) {\r\n    renderHeadlines(results, results.length - 1);\r\n    all = true;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://project-k-setup/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;