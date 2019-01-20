/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./../dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view/osWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/draw/drawHelper.js":
/*!********************************!*\
  !*** ./src/draw/drawHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DrawHelper = {};

DrawHelper.Draw = function (ctx, width, height, viewModel) {
  var maxCircle = 60;
  var radius = 230;
  var size = 7;
  ctx.translate(width / 2, height / 2);

  var _loop = function _loop(i) {
    setTimeout(function () {
      if (i % maxCircle === 0) {
        // console.log(new Date().getSeconds());
        ctx.resetTransform();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
      }

      ctx.beginPath();
      ctx.arc(0, radius, size, 0, 2 * Math.PI, false);
      ctx.rotate(2 * Math.PI / maxCircle);
      ctx.fill();
    }, 1000 / maxCircle * i);
  };

  for (var i = 0; i < maxCircle * 100; i++) {
    _loop(i);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DrawHelper);

/***/ }),

/***/ "./src/view/osWorker.js":
/*!******************************!*\
  !*** ./src/view/osWorker.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw_drawHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw/drawHelper */ "./src/draw/drawHelper.js");


self.onmessage = (event) => {
  const {
    canvas, width, height, drawData
  } = event.data;
  const ctx = canvas.getContext('2d');
  _draw_drawHelper__WEBPACK_IMPORTED_MODULE_0__["default"].Draw(ctx, width, height, drawData);
};


/***/ })

/******/ });
//# sourceMappingURL=worker.bundle.js.map