git/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view/osWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/view/drawHelper.js":
/*!********************************!*\
  !*** ./src/view/drawHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @name DrawHelper
 * @type Object
 * @method Draw
 * @method DrawTitle
 * @method DrawLegends
 * @method DrawAxis
 * @method DrawBorder
 * @method DrawGrid
 * @method DrawTics
 * @method DrawLines
 * @method DrawTable
 */
var DrawHelper = {};
/**
 * @name DrawTitle
 * @type function
 * @Description
 * Draw Title,
 * Default fontSize : 20px, textAlign : Center, textBaseline : middle
 */

DrawHelper.DrawTitle = function (ctx, font, title) {
  var text = title.text,
      color = title.color,
      position = title.position;
  ctx.save();
  ctx.font = "20px ".concat(font);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (color) ctx.fillStyle = color;
  ctx.fillText(text, position.x, position.y);
  ctx.restore();
};
/**
 * @name DrawLegends
 * @type function
 * @Description
 * Draw Legends,
 * Default fontSize : 14px, textAlign : Left, textBaseline : top, rectSize : 15px
 */


DrawHelper.DrawLegends = function (ctx, font, legendRect, legendDatas) {
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var rectSize = 15;
  var margin = 5;
  legendDatas.forEach(function (legendData) {
    var color = legendData.color,
        legend = legendData.legend,
        point = legendData.point;
    ctx.save();
    ctx.fillText(legend, legendRect.x + point.x + rectSize + margin, legendRect.y + point.y);
    if (color) ctx.fillStyle = color;
    ctx.fillRect(legendRect.x + point.x, legendRect.y + point.y, rectSize, rectSize);
    ctx.restore();
  });
  ctx.restore();
};
/**
 * @name DrawAxis
 * @type function
 * @Description
 * Draw Axis,
 * Default fontSize : 14px, textAlign : Center, textBaseline : middle
 */


DrawHelper.DrawAxis = function (ctx, font, axis) {
  var xLabel = axis.xLabel,
      yLabel = axis.yLabel;
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (xLabel.visible) {
    if (xLabel.color) ctx.fillStyle = xLabel.color;
    ctx.fillText(xLabel.text, xLabel.position.x, xLabel.position.y);
  }

  if (yLabel.visible) {
    ctx.translate(yLabel.position.x, yLabel.position.y);
    ctx.rotate(-0.5 * Math.PI);
    if (yLabel.color) ctx.fillStyle = yLabel.color;
    ctx.fillText(yLabel.text, 0, 0);
  }

  ctx.restore();
};
/**
 * @name DrawBorder
 * @type function
 */


DrawHelper.DrawBorder = function (ctx, rect, border) {
  var visible = border.visible,
      type = border.type,
      color = border.color,
      width = border.width;
  if (!visible) return;
  ctx.save();
  if (color) ctx.strokeStyle = color;
  if (width) ctx.lineWidth = width;
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  ctx.restore();
};
/**
 * @name DrawGrid
 * @type function
 * @Description
 * Draw Grid,
 * Default lineWidth : 0.3px
 */


DrawHelper.DrawGrid = function (ctx, width, height, grid, tics) {
  var xTics = tics.xTics,
      yTics = tics.yTics;
  var visible = grid.visible,
      type = grid.type,
      color = grid.color;
  if (!visible) return;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.3;
  xTics.forEach(function (tic, index, array) {
    if (index === 0 || index === array.length - 1) return;
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x, tic.y - height);
    ctx.stroke();
  });
  yTics.forEach(function (tic, index, array) {
    if (index === 0 || index === array.length - 1) return;
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x + width, tic.y);
    ctx.stroke();
  });
  ctx.restore();
};
/**
 * @name DrawTics
 * @type function
 * @Description
 * Draw Tics,
 * Default lineWidth : 0.3px, textAlign : center, textBaseline : middle, ticSize : 10px
 */


DrawHelper.DrawTics = function (ctx, width, height, tics) {
  var visible = tics.visible,
      color = tics.color,
      xTics = tics.xTics,
      yTics = tics.yTics;
  if (!visible) return;
  var ticSize = 10;
  var ticValueMargin = 15;
  ctx.save();

  if (color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }

  ctx.lineWidth = 0.3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  xTics.forEach(function (tic, index, array) {
    var yStart = tic.y + ticSize;
    var yEnd;

    if (index === 0) {
      yEnd = tic.y - height;
    } else {
      yEnd = tic.y;
    }

    ctx.beginPath();
    ctx.moveTo(tic.x, yStart);
    ctx.lineTo(tic.x, yEnd);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x, tic.y + ticSize + ticValueMargin);
  });
  yTics.forEach(function (tic, index, array) {
    var xStart = tic.x - ticSize;
    var xEnd;

    if (index === 0) {
      xEnd = tic.x + width;
    } else {
      xEnd = tic.x;
    }

    ctx.beginPath();
    ctx.moveTo(xStart, tic.y);
    ctx.lineTo(xEnd, tic.y);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x - ticSize - ticValueMargin, tic.y);
  });
  ctx.restore();
};
/**
 * @name DrawLines
 * @type function
 * @Description
 * Draw Tics,
 * Default lineWidth : 3px
 * @Todo Add LineStyle
 */


DrawHelper.DrawLines = function (ctx, graphRect, lineDatas) {
  ctx.save();
  ctx.lineWidth = 3;
  var region = new Path2D();
  region.rect(graphRect.x, graphRect.y, graphRect.w, graphRect.h);
  ctx.clip(region, 'evenodd');
  lineDatas.forEach(function (lineData) {
    var points = lineData.points,
        color = lineData.color;
    ctx.strokeStyle = color;
    var isStart = true;
    var yCriticalPoint = points[0].y;
    points.forEach(function (point, index) {
      if (point.y < graphRect.y) {
        yCriticalPoint = graphRect.y - 5;
      } else if (point.y > graphRect.y + graphRect.h) {
        yCriticalPoint = graphRect.y + graphRect.h + 5;
      }

      if (isStart === true) {
        ctx.beginPath();
        ctx.moveTo(point.x, yCriticalPoint || point.y);
        isStart = false;
      } else {
        ctx.lineTo(point.x, yCriticalPoint || point.y);
      }

      yCriticalPoint = NaN;
    });
    ctx.stroke();
  });
  ctx.restore();
};
/**
 * @name DrawTable
 * @type function
 * @Description
 * Draw Tics,
 * Default fontSize : 14px, textAlign : left, textBaseline : top,
 * Default fillAlpha : 0.5, fillColor : white, LineColor : #999999
 */


DrawHelper.DrawTable = function (ctx, font, graphRect, tableData) {
  var visible = tableData.visible,
      selectedTic = tableData.selectedTic,
      colors = tableData.colors,
      legends = tableData.legends,
      legendWidth = tableData.legendWidth,
      datas = tableData.datas;
  if (!visible || isNaN(selectedTic) || !colors || !legends || !legendWidth || !datas) return;
  var rectSize = 15;
  var margin = 4;
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var selectedTicData = datas[selectedTic];
  if (!selectedTicData || !selectedTicData.canvasPos) return;
  var tableRowPos = [];
  tableRowPos[0] = selectedTicData.canvasPos.y - (rectSize + margin * 2);

  for (var i = 1; i <= selectedTicData.length + 1; i++) {
    tableRowPos[i] = tableRowPos[i - 1] + (rectSize + margin * 2);
  }

  var tableColumnPos = [];
  tableColumnPos[0] = selectedTicData.canvasPos.x + 20;
  tableColumnPos[1] = tableColumnPos[0] + margin * 4 + rectSize + legendWidth;
  tableColumnPos[2] = tableColumnPos[1] + margin * 2 + selectedTicData.width;
  var centerPosX = (graphRect.x + graphRect.w) / 2;
  var tableWidth = tableColumnPos[2] - tableColumnPos[0];
  var tablePoint = null;

  if (selectedTicData.canvasPos.x > centerPosX) {
    tableColumnPos = tableColumnPos.map(function (pos) {
      return pos - tableWidth - 40;
    });
    tablePoint = {
      x: tableColumnPos[2],
      y: tableRowPos[0]
    };
  } else {
    tablePoint = {
      x: tableColumnPos[0],
      y: tableRowPos[0]
    };
  }

  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = 'white';
  ctx.fillRect(tableColumnPos[0], tableRowPos[0], tableColumnPos[2] - tableColumnPos[0], tableRowPos[selectedTicData.length + 1] - tableRowPos[0]);
  ctx.strokeStyle = '#999999';
  ctx.strokeRect(tableColumnPos[0], tableRowPos[0], tableColumnPos[2] - tableColumnPos[0], tableRowPos[selectedTicData.length + 1] - tableRowPos[0]);

  for (var _i = 1; _i <= selectedTicData.length; _i++) {
    ctx.beginPath();
    ctx.moveTo(tableColumnPos[0], tableRowPos[_i]);
    ctx.lineTo(tableColumnPos[2], tableRowPos[_i]);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(tableColumnPos[1], tableRowPos[1]);
  ctx.lineTo(tableColumnPos[1], tableRowPos[selectedTicData.length + 1]);
  ctx.stroke();
  ctx.restore();
  ctx.fillText("".concat(selectedTic), tableColumnPos[0] + margin, tableRowPos[0] + margin);

  for (var _i2 = 0; _i2 < selectedTicData.length; _i2++) {
    ctx.save();
    ctx.fillText("".concat(legends[_i2]), tableColumnPos[0] + rectSize + margin * 3, tableRowPos[_i2 + 1] + margin);
    ctx.fillText("".concat(selectedTicData[_i2].dataPos.toFixed(3)), tableColumnPos[1] + margin, tableRowPos[_i2 + 1] + margin);
    ctx.fillStyle = colors[_i2];
    ctx.fillRect(tableColumnPos[0] + margin, tableRowPos[_i2 + 1] + margin, rectSize, rectSize);

    if (selectedTicData[_i2].canvasPos >= graphRect.y && selectedTicData[_i2].canvasPos <= graphRect.y + graphRect.h) {
      ctx.beginPath();
      ctx.arc(selectedTicData.canvasPos.x, selectedTicData[_i2].canvasPos, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.restore();
};
/**
 * @name Draw
 * @type function
 * @Description
 * Default fontSize : 12px
 */


DrawHelper.Draw = function (ctx, drawData) {
  var font = drawData.font,
      title = drawData.title,
      legend = drawData.legend,
      border = drawData.border,
      axis = drawData.axis,
      grid = drawData.grid,
      tics = drawData.tics,
      lineDatas = drawData.lineDatas,
      legendDatas = drawData.legendDatas,
      tableData = drawData.tableData,
      canvasWidth = drawData.canvasWidth,
      canvasHeight = drawData.canvasHeight,
      graphRect = drawData.graphRect,
      legendRect = drawData.legendRect;
  ctx.font = "12px ".concat(font);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  DrawHelper.DrawTitle(ctx, font, title);
  DrawHelper.DrawBorder(ctx, graphRect, border);
  DrawHelper.DrawTics(ctx, graphRect.w, graphRect.h, tics);
  DrawHelper.DrawGrid(ctx, graphRect.w, graphRect.h, grid, tics);
  DrawHelper.DrawAxis(ctx, font, axis);
  DrawHelper.DrawLines(ctx, graphRect, lineDatas);
  DrawHelper.DrawLegends(ctx, font, legendRect, legendDatas);
  DrawHelper.DrawTable(ctx, font, graphRect, tableData);
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
/* harmony import */ var _drawHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawHelper */ "./src/view/drawHelper.js");


self.onmessage = (event) => {
  const { canvas, dpr, drawData } = event.data;
  if (canvas) {
    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');
  }

  if (dpr) {
    self.ctx.scale(dpr, dpr);
  }

  if (drawData) {
    _drawHelper__WEBPACK_IMPORTED_MODULE_0__["default"].Draw(self.ctx, drawData);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZHJhd0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9vc1dvcmtlci5qcyJdLCJuYW1lcyI6WyJEcmF3SGVscGVyIiwiRHJhd1RpdGxlIiwiY3R4IiwiZm9udCIsInRpdGxlIiwidGV4dCIsImNvbG9yIiwicG9zaXRpb24iLCJzYXZlIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ4IiwieSIsInJlc3RvcmUiLCJEcmF3TGVnZW5kcyIsImxlZ2VuZFJlY3QiLCJsZWdlbmREYXRhcyIsInJlY3RTaXplIiwibWFyZ2luIiwiZm9yRWFjaCIsImxlZ2VuZERhdGEiLCJsZWdlbmQiLCJwb2ludCIsImZpbGxSZWN0IiwiRHJhd0F4aXMiLCJheGlzIiwieExhYmVsIiwieUxhYmVsIiwidmlzaWJsZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsIkRyYXdCb3JkZXIiLCJyZWN0IiwiYm9yZGVyIiwidHlwZSIsIndpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwidyIsImgiLCJEcmF3R3JpZCIsImhlaWdodCIsImdyaWQiLCJ0aWNzIiwieFRpY3MiLCJ5VGljcyIsInRpYyIsImluZGV4IiwiYXJyYXkiLCJsZW5ndGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJEcmF3VGljcyIsInRpY1NpemUiLCJ0aWNWYWx1ZU1hcmdpbiIsInlTdGFydCIsInlFbmQiLCJ2YWx1ZSIsInhTdGFydCIsInhFbmQiLCJEcmF3TGluZXMiLCJncmFwaFJlY3QiLCJsaW5lRGF0YXMiLCJyZWdpb24iLCJQYXRoMkQiLCJjbGlwIiwibGluZURhdGEiLCJwb2ludHMiLCJpc1N0YXJ0IiwieUNyaXRpY2FsUG9pbnQiLCJOYU4iLCJEcmF3VGFibGUiLCJ0YWJsZURhdGEiLCJzZWxlY3RlZFRpYyIsImNvbG9ycyIsImxlZ2VuZHMiLCJsZWdlbmRXaWR0aCIsImRhdGFzIiwiaXNOYU4iLCJzZWxlY3RlZFRpY0RhdGEiLCJjYW52YXNQb3MiLCJ0YWJsZVJvd1BvcyIsImkiLCJ0YWJsZUNvbHVtblBvcyIsImNlbnRlclBvc1giLCJ0YWJsZVdpZHRoIiwidGFibGVQb2ludCIsIm1hcCIsInBvcyIsImdsb2JhbEFscGhhIiwiZGF0YVBvcyIsInRvRml4ZWQiLCJhcmMiLCJmaWxsIiwiRHJhdyIsImRyYXdEYXRhIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjtBQUVBOzs7Ozs7OztBQU9BQSxVQUFVLENBQUNDLFNBQVgsR0FBdUIsVUFBVUMsR0FBVixFQUFlQyxJ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QUM2QyxRQUFYLENBQW9CM0MsR0FBcEIsRUFBeUJrRSxTQUFTLENBQUN6QixDQUFuQyxFQUFzQ3lCLFNBQVMsQ0FBQ3hCLENBQWhELEVBQW1ERyxJQUFuRCxFQUF5REMsSUFBekQ7QUFDQWhELFlBQVUsQ0FBQzBCLFFBQVgsQ0FBb0J4QixHQUFwQixFQUF5QkMsSUFBekIsRUFBK0J3QixJQUEvQjtBQUNBM0IsWUFBVSxDQUFDbUUsU0FBWCxDQUFxQmpFLEdBQXJCLEVBQTBCa0UsU0FBMUIsRUFBcUNDLFNBQXJDO0FBQ0FyRSxZQUFVLENBQUNnQixXQUFYLENBQXVCZCxHQUF2QixFQUE0QkMsSUFBNUIsRUFBa0NjLFVBQWxDLEVBQThDQyxXQUE5QztBQUNBbEIsWUFBVSxDQUFDOEUsU0FBWCxDQUFxQjVFLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ2lFLFNBQWhDLEVBQTJDVyxTQUEzQztBQUNELENBM0JEOztBQTZCZS9FLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUFBO0FBQXNDOztBQUV0QztBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBIiwiZmlsZSI6InBsb3R0YWRyYXcud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3ZpZXcvb3NXb3JrZXIuanNcIik7XG4iLCIvKipcbiAqIEBuYW1lIERyYXdIZWxwZXJcbiAqIEB0eXBlIE9iamVjdFxuICogQG1ldGhvZCBEcmF3XG4gKiBAbWV0aG9kIERyYXdUaXRsZVxuICogQG1ldGhvZCBEcmF3TGVnZW5kc1xuICogQG1ldGhvZCBEcmF3QXhpc1xuICogQG1ldGhvZCBEcmF3Qm9yZGVyXG4gKiBAbWV0aG9kIERyYXdHcmlkXG4gKiBAbWV0aG9kIERyYXdUaWNzXG4gKiBAbWV0aG9kIERyYXdMaW5lc1xuICogQG1ldGhvZCBEcmF3VGFibGVcbiAqL1xuXG5jb25zdCBEcmF3SGVscGVyID0ge307XG5cbi8qKlxuICogQG5hbWUgRHJhd1RpdGxlXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpdGxlLFxuICogRGVmYXVsdCBmb250U2l6ZSA6IDIwcHgsIHRleHRBbGlnbiA6IENlbnRlciwgdGV4dEJhc2VsaW5lIDogbWlkZGxlXG4gKi9cbkRyYXdIZWxwZXIuRHJhd1RpdGxlID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgdGl0bGUpIHtcbiAgY29uc3QgeyB0ZXh0LCBjb2xvciwgcG9zaXRpb24gfSA9IHRpdGxlO1xuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAyMHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgaWYgKGNvbG9yKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0xlZ2VuZHNcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgTGVnZW5kcyxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAxNHB4LCB0ZXh0QWxpZ24gOiBMZWZ0LCB0ZXh0QmFzZWxpbmUgOiB0b3AsIHJlY3RTaXplIDogMTVweFxuICovXG5EcmF3SGVscGVyLkRyYXdMZWdlbmRzID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgbGVnZW5kUmVjdCwgbGVnZW5kRGF0YXMpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZvbnQgPSBgMTRweCAke2ZvbnR9YDtcbiAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICBjb25zdCByZWN0U2l6ZSA9IDE1O1xuICBjb25zdCBtYXJnaW4gPSA1O1xuICBsZWdlbmREYXRhcy5mb3JFYWNoKChsZWdlbmREYXRhKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgbGVnZW5kLCBwb2ludCB9ID0gbGVnZW5kRGF0YTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWxsVGV4dChsZWdlbmQsIGxlZ2VuZFJlY3QueCArIHBvaW50LnggKyByZWN0U2l6ZSArIG1hcmdpbiwgbGVnZW5kUmVjdC55ICsgcG9pbnQueSk7XG4gICAgaWYgKGNvbG9yKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KGxlZ2VuZFJlY3QueCArIHBvaW50LngsIGxlZ2VuZFJlY3QueSArIHBvaW50LnksIHJlY3RTaXplLCByZWN0U2l6ZSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdBeGlzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IEF4aXMsXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMTRweCwgdGV4dEFsaWduIDogQ2VudGVyLCB0ZXh0QmFzZWxpbmUgOiBtaWRkbGVcbiAqL1xuRHJhd0hlbHBlci5EcmF3QXhpcyA9IGZ1bmN0aW9uIChjdHgsIGZvbnQsIGF4aXMpIHtcbiAgY29uc3QgeyB4TGFiZWwsIHlMYWJlbCB9ID0gYXhpcztcblxuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAxNHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgaWYgKHhMYWJlbC52aXNpYmxlKSB7XG4gICAgaWYgKHhMYWJlbC5jb2xvcikgY3R4LmZpbGxTdHlsZSA9IHhMYWJlbC5jb2xvcjtcbiAgICBjdHguZmlsbFRleHQoeExhYmVsLnRleHQsIHhMYWJlbC5wb3NpdGlvbi54LCB4TGFiZWwucG9zaXRpb24ueSk7XG4gIH1cblxuICBpZiAoeUxhYmVsLnZpc2libGUpIHtcbiAgICBjdHgudHJhbnNsYXRlKHlMYWJlbC5wb3NpdGlvbi54LCB5TGFiZWwucG9zaXRpb24ueSk7XG4gICAgY3R4LnJvdGF0ZSgtMC41ICogTWF0aC5QSSk7XG4gICAgaWYgKHlMYWJlbC5jb2xvcikgY3R4LmZpbGxTdHlsZSA9IHlMYWJlbC5jb2xvcjtcbiAgICBjdHguZmlsbFRleHQoeUxhYmVsLnRleHQsIDAsIDApO1xuICB9XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdCb3JkZXJcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKi9cbkRyYXdIZWxwZXIuRHJhd0JvcmRlciA9IGZ1bmN0aW9uIChjdHgsIHJlY3QsIGJvcmRlcikge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSwgdHlwZSwgY29sb3IsIHdpZHRoXG4gIH0gPSBib3JkZXI7XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm47XG5cbiAgY3R4LnNhdmUoKTtcbiAgaWYgKGNvbG9yKSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgaWYgKHdpZHRoKSBjdHgubGluZVdpZHRoID0gd2lkdGg7XG4gIGN0eC5zdHJva2VSZWN0KHJlY3QueCwgcmVjdC55LCByZWN0LncsIHJlY3QuaCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdHcmlkXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IEdyaWQsXG4gKiBEZWZhdWx0IGxpbmVXaWR0aCA6IDAuM3B4XG4gKi9cbkRyYXdIZWxwZXIuRHJhd0dyaWQgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0LCBncmlkLCB0aWNzKSB7XG4gIGNvbnN0IHsgeFRpY3MsIHlUaWNzIH0gPSB0aWNzO1xuICBjb25zdCB7IHZpc2libGUsIHR5cGUsIGNvbG9yIH0gPSBncmlkO1xuICBpZiAoIXZpc2libGUpIHJldHVybjtcblxuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IDAuMztcblxuICB4VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRpYy54LCB0aWMueSk7XG4gICAgY3R4LmxpbmVUbyh0aWMueCwgdGljLnkgLSBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSk7XG4gIHlUaWNzLmZvckVhY2goKHRpYywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGljLngsIHRpYy55KTtcbiAgICBjdHgubGluZVRvKHRpYy54ICsgd2lkdGgsIHRpYy55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3VGljc1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBUaWNzLFxuICogRGVmYXVsdCBsaW5lV2lkdGggOiAwLjNweCwgdGV4dEFsaWduIDogY2VudGVyLCB0ZXh0QmFzZWxpbmUgOiBtaWRkbGUsIHRpY1NpemUgOiAxMHB4XG4gKi9cbkRyYXdIZWxwZXIuRHJhd1RpY3MgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0LCB0aWNzKSB7XG4gIGNvbnN0IHtcbiAgICB2aXNpYmxlLCBjb2xvciwgeFRpY3MsIHlUaWNzXG4gIH0gPSB0aWNzO1xuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHRpY1NpemUgPSAxMDtcbiAgY29uc3QgdGljVmFsdWVNYXJnaW4gPSAxNTtcblxuICBjdHguc2F2ZSgpO1xuICBpZiAoY29sb3IpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmxpbmVXaWR0aCA9IDAuMztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG5cbiAgeFRpY3MuZm9yRWFjaCgodGljLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBjb25zdCB5U3RhcnQgPSB0aWMueSArIHRpY1NpemU7XG4gICAgbGV0IHlFbmQ7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB5RW5kID0gdGljLnkgLSBoZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlFbmQgPSB0aWMueTtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGljLngsIHlTdGFydCk7XG4gICAgY3R4LmxpbmVUbyh0aWMueCwgeUVuZCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsVGV4dCh0aWMudmFsdWUsIHRpYy54LCB0aWMueSArIHRpY1NpemUgKyB0aWNWYWx1ZU1hcmdpbik7XG4gIH0pO1xuICB5VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IHhTdGFydCA9IHRpYy54IC0gdGljU2l6ZTtcbiAgICBsZXQgeEVuZDtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHhFbmQgPSB0aWMueCArIHdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB4RW5kID0gdGljLng7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHhTdGFydCwgdGljLnkpO1xuICAgIGN0eC5saW5lVG8oeEVuZCwgdGljLnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbFRleHQodGljLnZhbHVlLCB0aWMueCAtIHRpY1NpemUgLSB0aWNWYWx1ZU1hcmdpbiwgdGljLnkpO1xuICB9KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0xpbmVzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpY3MsXG4gKiBEZWZhdWx0IGxpbmVXaWR0aCA6IDNweFxuICogQFRvZG8gQWRkIExpbmVTdHlsZVxuICovXG5EcmF3SGVscGVyLkRyYXdMaW5lcyA9IGZ1bmN0aW9uIChjdHgsIGdyYXBoUmVjdCwgbGluZURhdGFzKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5saW5lV2lkdGggPSAzO1xuICBjb25zdCByZWdpb24gPSBuZXcgUGF0aDJEKCk7XG4gIHJlZ2lvbi5yZWN0KGdyYXBoUmVjdC54LCBncmFwaFJlY3QueSwgZ3JhcGhSZWN0LncsIGdyYXBoUmVjdC5oKTtcbiAgY3R4LmNsaXAocmVnaW9uLCAnZXZlbm9kZCcpO1xuICBsaW5lRGF0YXMuZm9yRWFjaCgobGluZURhdGEpID0+IHtcbiAgICBjb25zdCB7IHBvaW50cywgY29sb3IgfSA9IGxpbmVEYXRhO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGxldCBpc1N0YXJ0ID0gdHJ1ZTtcbiAgICBsZXQgeUNyaXRpY2FsUG9pbnQgPSBwb2ludHNbMF0ueTtcbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocG9pbnQueSA8IGdyYXBoUmVjdC55KSB7XG4gICAgICAgIHlDcml0aWNhbFBvaW50ID0gZ3JhcGhSZWN0LnkgLSA1O1xuICAgICAgfSBlbHNlIGlmIChwb2ludC55ID4gZ3JhcGhSZWN0LnkgKyBncmFwaFJlY3QuaCkge1xuICAgICAgICB5Q3JpdGljYWxQb2ludCA9IGdyYXBoUmVjdC55ICsgZ3JhcGhSZWN0LmggKyA1O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnQueCwgeUNyaXRpY2FsUG9pbnQgfHwgcG9pbnQueSk7XG4gICAgICAgIGlzU3RhcnQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnQueCwgeUNyaXRpY2FsUG9pbnQgfHwgcG9pbnQueSk7XG4gICAgICB9XG4gICAgICB5Q3JpdGljYWxQb2ludCA9IE5hTjtcbiAgICB9KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3VGFibGVcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgVGljcyxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAxNHB4LCB0ZXh0QWxpZ24gOiBsZWZ0LCB0ZXh0QmFzZWxpbmUgOiB0b3AsXG4gKiBEZWZhdWx0IGZpbGxBbHBoYSA6IDAuNSwgZmlsbENvbG9yIDogd2hpdGUsIExpbmVDb2xvciA6ICM5OTk5OTlcbiAqL1xuRHJhd0hlbHBlci5EcmF3VGFibGUgPSBmdW5jdGlvbiAoY3R4LCBmb250LCBncmFwaFJlY3QsIHRhYmxlRGF0YSkge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSwgc2VsZWN0ZWRUaWMsIGNvbG9ycywgbGVnZW5kcywgbGVnZW5kV2lkdGgsIGRhdGFzXG4gIH0gPSB0YWJsZURhdGE7XG5cbiAgaWYgKCF2aXNpYmxlIHx8IGlzTmFOKHNlbGVjdGVkVGljKSB8fCAhY29sb3JzIHx8ICFsZWdlbmRzIHx8ICFsZWdlbmRXaWR0aCB8fCAhZGF0YXMpIHJldHVybjtcblxuICBjb25zdCByZWN0U2l6ZSA9IDE1O1xuICBjb25zdCBtYXJnaW4gPSA0O1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5mb250ID0gYDE0cHggJHtmb250fWA7XG4gIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuICBjb25zdCBzZWxlY3RlZFRpY0RhdGEgPSBkYXRhc1tzZWxlY3RlZFRpY107XG4gIGlmICghc2VsZWN0ZWRUaWNEYXRhIHx8ICFzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zKSByZXR1cm47XG5cbiAgY29uc3QgdGFibGVSb3dQb3MgPSBbXTtcbiAgdGFibGVSb3dQb3NbMF0gPSBzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLnkgLSAocmVjdFNpemUgKyBtYXJnaW4gKiAyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDE7IGkrKykge1xuICAgIHRhYmxlUm93UG9zW2ldID0gdGFibGVSb3dQb3NbaSAtIDFdICsgKHJlY3RTaXplICsgbWFyZ2luICogMik7XG4gIH1cbiAgbGV0IHRhYmxlQ29sdW1uUG9zID0gW107XG4gIHRhYmxlQ29sdW1uUG9zWzBdID0gc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy54ICsgMjA7XG4gIHRhYmxlQ29sdW1uUG9zWzFdID0gdGFibGVDb2x1bW5Qb3NbMF0gKyBtYXJnaW4gKiA0ICsgcmVjdFNpemUgKyBsZWdlbmRXaWR0aDtcbiAgdGFibGVDb2x1bW5Qb3NbMl0gPSB0YWJsZUNvbHVtblBvc1sxXSArIG1hcmdpbiAqIDIgKyBzZWxlY3RlZFRpY0RhdGEud2lkdGg7XG5cbiAgY29uc3QgY2VudGVyUG9zWCA9IChncmFwaFJlY3QueCArIGdyYXBoUmVjdC53KSAvIDI7XG4gIGNvbnN0IHRhYmxlV2lkdGggPSB0YWJsZUNvbHVtblBvc1syXSAtIHRhYmxlQ29sdW1uUG9zWzBdO1xuICBsZXQgdGFibGVQb2ludCA9IG51bGw7XG4gIGlmIChzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLnggPiBjZW50ZXJQb3NYKSB7XG4gICAgdGFibGVDb2x1bW5Qb3MgPSB0YWJsZUNvbHVtblBvcy5tYXAocG9zID0+IHBvcyAtIHRhYmxlV2lkdGggLSA0MCk7XG4gICAgdGFibGVQb2ludCA9IHsgeDogdGFibGVDb2x1bW5Qb3NbMl0sIHk6IHRhYmxlUm93UG9zWzBdIH07XG4gIH0gZWxzZSB7XG4gICAgdGFibGVQb2ludCA9IHsgeDogdGFibGVDb2x1bW5Qb3NbMF0sIHk6IHRhYmxlUm93UG9zWzBdIH07XG4gIH1cblxuICBjdHguc2F2ZSgpO1xuICBjdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICBjdHguZmlsbFJlY3QoXG4gICAgdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3NbMF0sXG4gICAgdGFibGVDb2x1bW5Qb3NbMl0gLSB0YWJsZUNvbHVtblBvc1swXSxcbiAgICB0YWJsZVJvd1Bvc1tzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMV0gLSB0YWJsZVJvd1Bvc1swXVxuICApO1xuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzk5OTk5OSc7XG4gIGN0eC5zdHJva2VSZWN0KFxuICAgIHRhYmxlQ29sdW1uUG9zWzBdLFxuICAgIHRhYmxlUm93UG9zWzBdLFxuICAgIHRhYmxlQ29sdW1uUG9zWzJdIC0gdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3Nbc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDFdIC0gdGFibGVSb3dQb3NbMF1cbiAgKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGFibGVDb2x1bW5Qb3NbMF0sIHRhYmxlUm93UG9zW2ldKTtcbiAgICBjdHgubGluZVRvKHRhYmxlQ29sdW1uUG9zWzJdLCB0YWJsZVJvd1Bvc1tpXSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh0YWJsZUNvbHVtblBvc1sxXSwgdGFibGVSb3dQb3NbMV0pO1xuICBjdHgubGluZVRvKHRhYmxlQ29sdW1uUG9zWzFdLCB0YWJsZVJvd1Bvc1tzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMV0pO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG5cbiAgY3R4LmZpbGxUZXh0KGAke3NlbGVjdGVkVGljfWAsIHRhYmxlQ29sdW1uUG9zWzBdICsgbWFyZ2luLCB0YWJsZVJvd1Bvc1swXSArIG1hcmdpbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgJHtsZWdlbmRzW2ldfWAsXG4gICAgICB0YWJsZUNvbHVtblBvc1swXSArIHJlY3RTaXplICsgbWFyZ2luICogMyxcbiAgICAgIHRhYmxlUm93UG9zW2kgKyAxXSArIG1hcmdpblxuICAgICk7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYCR7c2VsZWN0ZWRUaWNEYXRhW2ldLmRhdGFQb3MudG9GaXhlZCgzKX1gLFxuICAgICAgdGFibGVDb2x1bW5Qb3NbMV0gKyBtYXJnaW4sXG4gICAgICB0YWJsZVJvd1Bvc1tpICsgMV0gKyBtYXJnaW5cbiAgICApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XG4gICAgY3R4LmZpbGxSZWN0KHRhYmxlQ29sdW1uUG9zWzBdICsgbWFyZ2luLCB0YWJsZVJvd1Bvc1tpICsgMV0gKyBtYXJnaW4sIHJlY3RTaXplLCByZWN0U2l6ZSk7XG5cbiAgICBpZiAoXG4gICAgICBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zID49IGdyYXBoUmVjdC55XG4gICAgICAmJiBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zIDw9IGdyYXBoUmVjdC55ICsgZ3JhcGhSZWN0LmhcbiAgICApIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy54LCBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zLCA0LCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERlZmF1bHQgZm9udFNpemUgOiAxMnB4XG4gKi9cbkRyYXdIZWxwZXIuRHJhdyA9IGZ1bmN0aW9uIChjdHgsIGRyYXdEYXRhKSB7XG4gIGNvbnN0IHtcbiAgICBmb250LFxuICAgIHRpdGxlLFxuICAgIGxlZ2VuZCxcbiAgICBib3JkZXIsXG4gICAgYXhpcyxcbiAgICBncmlkLFxuICAgIHRpY3MsXG4gICAgbGluZURhdGFzLFxuICAgIGxlZ2VuZERhdGFzLFxuICAgIHRhYmxlRGF0YSxcbiAgICBjYW52YXNXaWR0aCxcbiAgICBjYW52YXNIZWlnaHQsXG4gICAgZ3JhcGhSZWN0LFxuICAgIGxlZ2VuZFJlY3RcbiAgfSA9IGRyYXdEYXRhO1xuICBjdHguZm9udCA9IGAxMnB4ICR7Zm9udH1gO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICBEcmF3SGVscGVyLkRyYXdUaXRsZShjdHgsIGZvbnQsIHRpdGxlKTtcbiAgRHJhd0hlbHBlci5EcmF3Qm9yZGVyKGN0eCwgZ3JhcGhSZWN0LCBib3JkZXIpO1xuICBEcmF3SGVscGVyLkRyYXdUaWNzKGN0eCwgZ3JhcGhSZWN0LncsIGdyYXBoUmVjdC5oLCB0aWNzKTtcbiAgRHJhd0hlbHBlci5EcmF3R3JpZChjdHgsIGdyYXBoUmVjdC53LCBncmFwaFJlY3QuaCwgZ3JpZCwgdGljcyk7XG4gIERyYXdIZWxwZXIuRHJhd0F4aXMoY3R4LCBmb250LCBheGlzKTtcbiAgRHJhd0hlbHBlci5EcmF3TGluZXMoY3R4LCBncmFwaFJlY3QsIGxpbmVEYXRhcyk7XG4gIERyYXdIZWxwZXIuRHJhd0xlZ2VuZHMoY3R4LCBmb250LCBsZWdlbmRSZWN0LCBsZWdlbmREYXRhcyk7XG4gIERyYXdIZWxwZXIuRHJhd1RhYmxlKGN0eCwgZm9udCwgZ3JhcGhSZWN0LCB0YWJsZURhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhd0hlbHBlcjtcbiIsImltcG9ydCBEcmF3SGVscGVyIGZyb20gJy4vZHJhd0hlbHBlcic7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgY2FudmFzLCBkcHIsIGRyYXdEYXRhIH0gPSBldmVudC5kYXRhO1xuICBpZiAoY2FudmFzKSB7XG4gICAgc2VsZi5jYW52YXMgPSBjYW52YXM7XG4gICAgc2VsZi5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGlmIChkcHIpIHtcbiAgICBzZWxmLmN0eC5zY2FsZShkcHIsIGRwcik7XG4gIH1cblxuICBpZiAoZHJhd0RhdGEpIHtcbiAgICBEcmF3SGVscGVyLkRyYXcoc2VsZi5jdHgsIGRyYXdEYXRhKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=