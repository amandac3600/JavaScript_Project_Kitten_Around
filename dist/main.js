/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/border.js":
/*!***********************!*\
  !*** ./src/border.js ***!
  \***********************/
/***/ (function(module) {

eval("function Border(x, y, width, height, type) {\n  this.x = x;\n  this.y = y;\n  this.width = width;\n  this.height = height;\n  this.type = type;\n\n  this.draw = function (ctx) {\n    if (this.type === 1) {\n      ctx.fillStyle = \"lightblue\";\n    } else if (this.type === 2) {\n      ctx.fillStyle = \"tan\";\n    }\n\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n  };\n}\n\nmodule.exports = Border;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvYm9yZGVyLmpzPzUxNjkiXSwibmFtZXMiOlsiQm9yZGVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLEtBQXRCLEVBQTZCQyxNQUE3QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDekMsT0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLE9BQUtDLElBQUwsR0FBWSxVQUFTQyxHQUFULEVBQWM7QUFDeEIsUUFBSSxLQUFLRixJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkJFLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixXQUFoQjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUtILElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUMxQkUsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBQ0RELElBQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQUtSLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUtDLEtBQWxDLEVBQXlDLEtBQUtDLE1BQTlDO0FBQ0QsR0FQRDtBQVFEOztBQUVETSxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQm9yZGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIHR5cGUpIHtcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gMSkge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAyKSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRhblwiO1xyXG4gICAgfVxyXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJvcmRlcjtcclxuIl0sImZpbGUiOiIuL3NyYy9ib3JkZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/border.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\nconst Border = __webpack_require__(/*! ./border.js */ \"./src/border.js\");\n\nwindow.onload = function () {\n  let canvas = document.getElementById(\"canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let img = document.getElementById(\"image\");\n  let player = new Player(100, 100, `./images/resizecat.png`, \"image\");\n  let gameLoop = setInterval(step, 30); //30 fps\n\n  player.setupInputs();\n  let borders = [];\n  borders.push(new Border(0, 620, 600, 100, 1));\n  borders.push(new Border(600, 520, 100, 100, 2));\n\n  function draw() {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height); //clear the canvas before redrawing\n\n    ctx.drawImage(img, 0, 0);\n    player.draw(ctx); //redraw the player at the new pos\n\n    borders.forEach(border => {\n      border.draw(ctx);\n    });\n  }\n\n  function step() {\n    //main step function for things other than the player (like the mice)\n    player.step();\n    draw(); //redraw canvas once everything has been updated\n\n    borders.forEach(border => {\n      let borderRect = {\n        x: border.x,\n        y: border.y,\n        width: border.width,\n        height: border.height\n      };\n      let horizontalRect = {\n        x: player.x + player.xvel,\n        y: player.y,\n        width: player.width,\n        height: player.height\n      }; //vert collision rect\n\n      let verticalRect = {\n        x: player.x,\n        y: player.y + player.yvel,\n        width: player.width,\n        height: player.height\n      };\n\n      if (checkCollision(horizontalRect, borderRect)) {\n        // while(checkCollision(horizontalRect, borderRect)) {\n        //   horizontalRect.x -= Math.sign(player.xvel);\n        // }\n        if (player.x + player.width > borderRect.x) {\n          player.x = borderRect.x - player.width;\n        } // player.x = horizontalRect.x;\n\n\n        player.xvel = 0;\n      }\n\n      if (checkCollision(verticalRect, borderRect)) {\n        // while(checkCollision(verticalRect, borderRect)) {\n        //   verticalRect.y -= Math.sign(player.yvel);\n        // }\n        if (player.y + player.height > borderRect.y) {\n          player.y = borderRect.y - player.height;\n        } // player.y = verticalRect.y;\n\n\n        player.yvel = 0;\n      }\n    });\n  }\n\n  function checkCollision(player, r2) {\n    let crash = true;\n    console.log(player);\n    console.log(r2);\n\n    if (player.x >= r2.x + r2.width) {\n      crash = false;\n    } else if (player.x + player.width <= r2.x) {\n      crash = false;\n    } else if (player.y >= r2.y + r2.height) {\n      crash = false;\n    } else if (player.y + player.height <= r2.y) {\n      crash = false;\n    }\n\n    return crash;\n  } //horizontal collision rect\n  // let horizontalRect = {\n  //   x: player.x + player.xvel,\n  //   y: player.y,\n  //   width: player.width,\n  //   height: player.height\n  // }\n  // //vert collision rect\n  // let verticalRect = {\n  //   x: player.x,\n  //   y: player.y + player.yvel,\n  //   width: player.width,\n  //   height: player.height\n  // }\n  // borders.forEach (border => {\n  //   let borderRect = {\n  //     x: border.x,\n  //     y: border.y,\n  //     width: border.width,\n  //     height: border.height\n  //   }\n  //   console.log(checkCollision(horizontalRect,borderRect));\n  //   console.log(verticalRect)\n  //   if(checkCollision(horizontalRect, borderRect)) {\n  //     // while(checkCollision(horizontalRect, borderRect)) {\n  //     //   horizontalRect.x -= Math.sign(player.xvel);\n  //     // }\n  //     player.x = horizontalRect.x;\n  //     player.xvel = 0;\n  //   }\n  //   console.log(checkCollision(verticalRect,borderRect));\n  //   if(checkCollision(verticalRect,borderRect)) {\n  //     // while(checkCollision(verticalRect, borderRect)) {\n  //     //   verticalRect.y -= Math.sign(player.yvel);\n  //     // }\n  //     player.y = verticalRect.y;\n  //     player.yvel = 0;\n  //   }\n  // })\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9DQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxvQ0FBRCxDQUF0Qjs7QUFHQUUsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDekIsTUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxNQUFJQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFWO0FBRUEsTUFBSUksTUFBTSxHQUFHLElBQUlYLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXNCLHdCQUF0QixFQUErQyxPQUEvQyxDQUFiO0FBRUEsTUFBSVksUUFBUSxHQUFHQyxXQUFXLENBQUNDLElBQUQsRUFBTyxFQUFQLENBQTFCLENBUHlCLENBT2M7O0FBRXZDSCxFQUFBQSxNQUFNLENBQUNJLFdBQVA7QUFFQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBQSxFQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxJQUFJZixNQUFKLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsQ0FBYjtBQUNBYyxFQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxJQUFJZixNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixDQUEvQixDQUFiOztBQUdBLFdBQVNnQixJQUFULEdBQWdCO0FBQ2RWLElBQUFBLEdBQUcsQ0FBQ1csU0FBSixHQUFnQixPQUFoQjtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CZixNQUFNLENBQUNnQixLQUExQixFQUFpQ2hCLE1BQU0sQ0FBQ2lCLE1BQXhDLEVBRmMsQ0FFb0M7O0FBRWxEZCxJQUFBQSxHQUFHLENBQUNlLFNBQUosQ0FBY2IsR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNPLElBQVAsQ0FBWVYsR0FBWixFQUxjLENBS007O0FBRXBCUSxJQUFBQSxPQUFPLENBQUNRLE9BQVIsQ0FBZ0JDLE1BQU0sSUFBSTtBQUN4QkEsTUFBQUEsTUFBTSxDQUFDUCxJQUFQLENBQVlWLEdBQVo7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBU00sSUFBVCxHQUFnQjtBQUFHO0FBQ2pCSCxJQUFBQSxNQUFNLENBQUNHLElBQVA7QUFDQUksSUFBQUEsSUFBSSxHQUZVLENBRUY7O0FBQ1pGLElBQUFBLE9BQU8sQ0FBQ1EsT0FBUixDQUFpQkMsTUFBTSxJQUFJO0FBQ3pCLFVBQUlDLFVBQVUsR0FBRztBQUNmQyxRQUFBQSxDQUFDLEVBQUVGLE1BQU0sQ0FBQ0UsQ0FESztBQUVmQyxRQUFBQSxDQUFDLEVBQUVILE1BQU0sQ0FBQ0csQ0FGSztBQUdmUCxRQUFBQSxLQUFLLEVBQUVJLE1BQU0sQ0FBQ0osS0FIQztBQUlmQyxRQUFBQSxNQUFNLEVBQUVHLE1BQU0sQ0FBQ0g7QUFKQSxPQUFqQjtBQU1BLFVBQUlPLGNBQWMsR0FBRztBQUNuQkYsUUFBQUEsQ0FBQyxFQUFFaEIsTUFBTSxDQUFDZ0IsQ0FBUCxHQUFXaEIsTUFBTSxDQUFDbUIsSUFERjtBQUVuQkYsUUFBQUEsQ0FBQyxFQUFFakIsTUFBTSxDQUFDaUIsQ0FGUztBQUduQlAsUUFBQUEsS0FBSyxFQUFFVixNQUFNLENBQUNVLEtBSEs7QUFJbkJDLFFBQUFBLE1BQU0sRUFBRVgsTUFBTSxDQUFDVztBQUpJLE9BQXJCLENBUHlCLENBYXpCOztBQUNBLFVBQUlTLFlBQVksR0FBRztBQUNqQkosUUFBQUEsQ0FBQyxFQUFFaEIsTUFBTSxDQUFDZ0IsQ0FETztBQUVqQkMsUUFBQUEsQ0FBQyxFQUFFakIsTUFBTSxDQUFDaUIsQ0FBUCxHQUFXakIsTUFBTSxDQUFDcUIsSUFGSjtBQUdqQlgsUUFBQUEsS0FBSyxFQUFFVixNQUFNLENBQUNVLEtBSEc7QUFJakJDLFFBQUFBLE1BQU0sRUFBRVgsTUFBTSxDQUFDVztBQUpFLE9BQW5COztBQU1BLFVBQUdXLGNBQWMsQ0FBQ0osY0FBRCxFQUFpQkgsVUFBakIsQ0FBakIsRUFBK0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsWUFBSWYsTUFBTSxDQUFDZ0IsQ0FBUCxHQUFXaEIsTUFBTSxDQUFDVSxLQUFsQixHQUEwQkssVUFBVSxDQUFDQyxDQUF6QyxFQUE0QztBQUMxQ2hCLFVBQUFBLE1BQU0sQ0FBQ2dCLENBQVAsR0FBV0QsVUFBVSxDQUFDQyxDQUFYLEdBQWVoQixNQUFNLENBQUNVLEtBQWpDO0FBQ0QsU0FONEMsQ0FRN0M7OztBQUNBVixRQUFBQSxNQUFNLENBQUNtQixJQUFQLEdBQWMsQ0FBZDtBQUNEOztBQUNELFVBQUdHLGNBQWMsQ0FBQ0YsWUFBRCxFQUFlTCxVQUFmLENBQWpCLEVBQTZDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFlBQUlmLE1BQU0sQ0FBQ2lCLENBQVAsR0FBV2pCLE1BQU0sQ0FBQ1csTUFBbEIsR0FBMkJJLFVBQVUsQ0FBQ0UsQ0FBMUMsRUFBNkM7QUFDM0NqQixVQUFBQSxNQUFNLENBQUNpQixDQUFQLEdBQVdGLFVBQVUsQ0FBQ0UsQ0FBWCxHQUFlakIsTUFBTSxDQUFDVyxNQUFqQztBQUNELFNBTjBDLENBTzNDOzs7QUFDQVgsUUFBQUEsTUFBTSxDQUFDcUIsSUFBUCxHQUFjLENBQWQ7QUFFRDtBQUNGLEtBMUNEO0FBMkNEOztBQUVELFdBQVNDLGNBQVQsQ0FBd0J0QixNQUF4QixFQUFnQ3VCLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMUIsTUFBWjtBQUNBeUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7O0FBQ0EsUUFBSXZCLE1BQU0sQ0FBQ2dCLENBQVAsSUFBWU8sRUFBRSxDQUFDUCxDQUFILEdBQU9PLEVBQUUsQ0FBQ2IsS0FBMUIsRUFBaUM7QUFDL0JjLE1BQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUl4QixNQUFNLENBQUNnQixDQUFQLEdBQVdoQixNQUFNLENBQUNVLEtBQWxCLElBQTJCYSxFQUFFLENBQUNQLENBQWxDLEVBQXFDO0FBQzFDUSxNQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNELEtBRk0sTUFFQSxJQUFJeEIsTUFBTSxDQUFDaUIsQ0FBUCxJQUFZTSxFQUFFLENBQUNOLENBQUgsR0FBT00sRUFBRSxDQUFDWixNQUExQixFQUFrQztBQUN2Q2EsTUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDRCxLQUZNLE1BRUEsSUFBSXhCLE1BQU0sQ0FBQ2lCLENBQVAsR0FBV2pCLE1BQU0sQ0FBQ1csTUFBbEIsSUFBNEJZLEVBQUUsQ0FBQ04sQ0FBbkMsRUFBc0M7QUFDM0NPLE1BQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0Q7O0FBQ0QsV0FBT0EsS0FBUDtBQUNELEdBMUZ3QixDQTRGekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVELENBcklEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSmF2YVNjcmlwdF9Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyLmpzXCIpO1xyXG5jb25zdCBCb3JkZXIgPSByZXF1aXJlKFwiLi9ib3JkZXIuanNcIik7XHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBsZXQgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcclxuXHJcbiAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoMTAwLCAxMDAsIGAuL2ltYWdlcy9yZXNpemVjYXQucG5nYCwgXCJpbWFnZVwiKTtcclxuICBcclxuICBsZXQgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbChzdGVwLCAzMCk7ICAvLzMwIGZwc1xyXG5cclxuICBwbGF5ZXIuc2V0dXBJbnB1dHMoKTtcclxuXHJcbiAgbGV0IGJvcmRlcnMgPSBbXTtcclxuICBib3JkZXJzLnB1c2gobmV3IEJvcmRlcigwLCA2MjAsIDYwMCwgMTAwLCAxKSk7XHJcbiAgYm9yZGVycy5wdXNoKG5ldyBCb3JkZXIoNjAwLCA1MjAsIDEwMCwgMTAwLCAyKSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAgLy9jbGVhciB0aGUgY2FudmFzIGJlZm9yZSByZWRyYXdpbmdcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMClcclxuICAgIHBsYXllci5kcmF3KGN0eCk7ICAgLy9yZWRyYXcgdGhlIHBsYXllciBhdCB0aGUgbmV3IHBvc1xyXG5cclxuICAgIGJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xyXG4gICAgICBib3JkZXIuZHJhdyhjdHgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7ICAvL21haW4gc3RlcCBmdW5jdGlvbiBmb3IgdGhpbmdzIG90aGVyIHRoYW4gdGhlIHBsYXllciAobGlrZSB0aGUgbWljZSlcclxuICAgIHBsYXllci5zdGVwKCk7XHJcbiAgICBkcmF3KCk7ICAgICAvL3JlZHJhdyBjYW52YXMgb25jZSBldmVyeXRoaW5nIGhhcyBiZWVuIHVwZGF0ZWRcclxuICAgIGJvcmRlcnMuZm9yRWFjaCAoYm9yZGVyID0+IHtcclxuICAgICAgbGV0IGJvcmRlclJlY3QgPSB7XHJcbiAgICAgICAgeDogYm9yZGVyLngsXHJcbiAgICAgICAgeTogYm9yZGVyLnksXHJcbiAgICAgICAgd2lkdGg6IGJvcmRlci53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGJvcmRlci5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgICBsZXQgaG9yaXpvbnRhbFJlY3QgPSB7XHJcbiAgICAgICAgeDogcGxheWVyLnggKyBwbGF5ZXIueHZlbCxcclxuICAgICAgICB5OiBwbGF5ZXIueSxcclxuICAgICAgICB3aWR0aDogcGxheWVyLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogcGxheWVyLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICAgIC8vdmVydCBjb2xsaXNpb24gcmVjdFxyXG4gICAgICBsZXQgdmVydGljYWxSZWN0ID0ge1xyXG4gICAgICAgIHg6IHBsYXllci54LFxyXG4gICAgICAgIHk6IHBsYXllci55ICsgcGxheWVyLnl2ZWwsXHJcbiAgICAgICAgd2lkdGg6IHBsYXllci53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHBsYXllci5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgICBpZihjaGVja0NvbGxpc2lvbihob3Jpem9udGFsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAgICAgICAvLyB3aGlsZShjaGVja0NvbGxpc2lvbihob3Jpem9udGFsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAgICAgICAvLyAgIGhvcml6b250YWxSZWN0LnggLT0gTWF0aC5zaWduKHBsYXllci54dmVsKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHBsYXllci54ICsgcGxheWVyLndpZHRoID4gYm9yZGVyUmVjdC54KSB7XHJcbiAgICAgICAgICBwbGF5ZXIueCA9IGJvcmRlclJlY3QueCAtIHBsYXllci53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxheWVyLnggPSBob3Jpem9udGFsUmVjdC54O1xyXG4gICAgICAgIHBsYXllci54dmVsID0gMDtcclxuICAgICAgfVxyXG4gICAgICBpZihjaGVja0NvbGxpc2lvbih2ZXJ0aWNhbFJlY3QsIGJvcmRlclJlY3QpKSB7XHJcbiAgICAgICAgLy8gd2hpbGUoY2hlY2tDb2xsaXNpb24odmVydGljYWxSZWN0LCBib3JkZXJSZWN0KSkge1xyXG4gICAgICAgIC8vICAgdmVydGljYWxSZWN0LnkgLT0gTWF0aC5zaWduKHBsYXllci55dmVsKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+IGJvcmRlclJlY3QueSkge1xyXG4gICAgICAgICAgcGxheWVyLnkgPSBib3JkZXJSZWN0LnkgLSBwbGF5ZXIuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwbGF5ZXIueSA9IHZlcnRpY2FsUmVjdC55O1xyXG4gICAgICAgIHBsYXllci55dmVsID0gMDtcclxuICAgICAgICBcclxuICAgICAgfSAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgcjIpIHtcclxuICAgIGxldCBjcmFzaCA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xyXG4gICAgY29uc29sZS5sb2cocjIpO1xyXG4gICAgaWYgKHBsYXllci54ID49IHIyLnggKyByMi53aWR0aCkge1xyXG4gICAgICBjcmFzaCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIueCArIHBsYXllci53aWR0aCA8PSByMi54KSB7XHJcbiAgICAgIGNyYXNoID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllci55ID49IHIyLnkgKyByMi5oZWlnaHQpIHtcclxuICAgICAgY3Jhc2ggPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0IDw9IHIyLnkpIHtcclxuICAgICAgY3Jhc2ggPSBmYWxzZTtcclxuICAgIH0gXHJcbiAgICByZXR1cm4gY3Jhc2g7XHJcbiAgfVxyXG5cclxuICAvL2hvcml6b250YWwgY29sbGlzaW9uIHJlY3RcclxuICAvLyBsZXQgaG9yaXpvbnRhbFJlY3QgPSB7XHJcbiAgLy8gICB4OiBwbGF5ZXIueCArIHBsYXllci54dmVsLFxyXG4gIC8vICAgeTogcGxheWVyLnksXHJcbiAgLy8gICB3aWR0aDogcGxheWVyLndpZHRoLFxyXG4gIC8vICAgaGVpZ2h0OiBwbGF5ZXIuaGVpZ2h0XHJcbiAgLy8gfVxyXG4gIC8vIC8vdmVydCBjb2xsaXNpb24gcmVjdFxyXG4gIC8vIGxldCB2ZXJ0aWNhbFJlY3QgPSB7XHJcbiAgLy8gICB4OiBwbGF5ZXIueCxcclxuICAvLyAgIHk6IHBsYXllci55ICsgcGxheWVyLnl2ZWwsXHJcbiAgLy8gICB3aWR0aDogcGxheWVyLndpZHRoLFxyXG4gIC8vICAgaGVpZ2h0OiBwbGF5ZXIuaGVpZ2h0XHJcbiAgLy8gfVxyXG5cclxuICAvLyBib3JkZXJzLmZvckVhY2ggKGJvcmRlciA9PiB7XHJcbiAgLy8gICBsZXQgYm9yZGVyUmVjdCA9IHtcclxuICAvLyAgICAgeDogYm9yZGVyLngsXHJcbiAgLy8gICAgIHk6IGJvcmRlci55LFxyXG4gIC8vICAgICB3aWR0aDogYm9yZGVyLndpZHRoLFxyXG4gIC8vICAgICBoZWlnaHQ6IGJvcmRlci5oZWlnaHRcclxuICAvLyAgIH1cclxuICAvLyAgIGNvbnNvbGUubG9nKGNoZWNrQ29sbGlzaW9uKGhvcml6b250YWxSZWN0LGJvcmRlclJlY3QpKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHZlcnRpY2FsUmVjdClcclxuICAvLyAgIGlmKGNoZWNrQ29sbGlzaW9uKGhvcml6b250YWxSZWN0LCBib3JkZXJSZWN0KSkge1xyXG4gIC8vICAgICAvLyB3aGlsZShjaGVja0NvbGxpc2lvbihob3Jpem9udGFsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAvLyAgICAgLy8gICBob3Jpem9udGFsUmVjdC54IC09IE1hdGguc2lnbihwbGF5ZXIueHZlbCk7XHJcbiAgLy8gICAgIC8vIH1cclxuICAvLyAgICAgcGxheWVyLnggPSBob3Jpem9udGFsUmVjdC54O1xyXG4gIC8vICAgICBwbGF5ZXIueHZlbCA9IDA7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBjb25zb2xlLmxvZyhjaGVja0NvbGxpc2lvbih2ZXJ0aWNhbFJlY3QsYm9yZGVyUmVjdCkpO1xyXG4gIC8vICAgaWYoY2hlY2tDb2xsaXNpb24odmVydGljYWxSZWN0LGJvcmRlclJlY3QpKSB7XHJcbiAgLy8gICAgIC8vIHdoaWxlKGNoZWNrQ29sbGlzaW9uKHZlcnRpY2FsUmVjdCwgYm9yZGVyUmVjdCkpIHtcclxuICAvLyAgICAgLy8gICB2ZXJ0aWNhbFJlY3QueSAtPSBNYXRoLnNpZ24ocGxheWVyLnl2ZWwpO1xyXG4gIC8vICAgICAvLyB9XHJcbiAgLy8gICAgIHBsYXllci55ID0gdmVydGljYWxSZWN0Lnk7XHJcbiAgLy8gICAgIHBsYXllci55dmVsID0gMDtcclxuICAvLyAgIH1cclxuICAvLyB9KVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiUGxheWVyIiwicmVxdWlyZSIsIkJvcmRlciIsIndpbmRvdyIsIm9ubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwicGxheWVyIiwiZ2FtZUxvb3AiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJzZXR1cElucHV0cyIsImJvcmRlcnMiLCJwdXNoIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJmb3JFYWNoIiwiYm9yZGVyIiwiYm9yZGVyUmVjdCIsIngiLCJ5IiwiaG9yaXpvbnRhbFJlY3QiLCJ4dmVsIiwidmVydGljYWxSZWN0IiwieXZlbCIsImNoZWNrQ29sbGlzaW9uIiwicjIiLCJjcmFzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(module) {

eval("let upKey, rightKey, downKey, leftKey;\n\nfunction Player(x, y, color, type) {\n  this.x = x;\n  this.y = y;\n  this.color = color;\n  this.type = type;\n\n  if (type == \"image\") {\n    this.image = new Image();\n    this.image.src = color;\n  }\n\n  this.xvel = 0;\n  this.yvel = 0;\n  this.friction = 0.6;\n  this.maxVel = 5;\n  this.width = 150;\n  this.height = 75;\n  this.active = true;\n\n  this.step = function () {\n    //horiz mvmt\n    if (this.active) {\n      if (!leftKey && !rightKey || leftKey && rightKey) {\n        this.xvel *= this.friction;\n      } else if (rightKey) {\n        this.xvel++;\n      } else if (leftKey) {\n        this.xvel--;\n      }\n\n      this.x += this.xvel;\n      this.y += this.yvel;\n    } //vert mvmt\n\n\n    if (upKey) {\n      //check if on ground\n      this.yvel -= 10;\n    }\n\n    if (downKey) {\n      this.yvel += 10;\n    } // this.yvel += 2; //gravity\n    //adjust vel\n\n\n    if (this.xvel > this.maxVel) {\n      this.xvel = this.maxVel;\n    } else if (this.xvel < -this.maxVel) {\n      this.xvel = -this.maxVel;\n    }\n\n    if (this.yvel > this.maxVel) {\n      this.yvel = this.maxVel;\n    } else if (this.yvel < -this.maxVel) {\n      this.yvel = -this.maxVel;\n    }\n\n    if (this.xvel > 0) {\n      this.xvel = Math.floor(this.xvel);\n    } else {\n      this.xvel = Math.ceil(this.xvel);\n    }\n\n    if (this.yvel > 0) {\n      this.yvel = Math.floor(this.yvel);\n    } else {\n      this.yvel = Math.ceil(this.yvel);\n    }\n\n    this.x += this.xvel;\n    this.y += this.yvel;\n  };\n\n  this.draw = function (ctx) {\n    if (type === \"image\") {\n      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    } else {\n      ctx.fillStyle = `${this.color}`;\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  };\n\n  this.setupInputs = function () {\n    document.addEventListener(\"keydown\", function (event) {\n      if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        upKey = true;\n      } else if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        leftKey = true;\n      } else if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        downKey = true;\n      } else if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        rightKey = true;\n      }\n    });\n    document.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        upKey = false;\n      } else if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        leftKey = false;\n      } else if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        downKey = false;\n      } else if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        rightKey = false;\n      }\n    });\n  };\n}\n\nmodule.exports = Player; // export default Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOlsidXBLZXkiLCJyaWdodEtleSIsImRvd25LZXkiLCJsZWZ0S2V5IiwiUGxheWVyIiwieCIsInkiLCJjb2xvciIsInR5cGUiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwieHZlbCIsInl2ZWwiLCJmcmljdGlvbiIsIm1heFZlbCIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZlIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsImNlaWwiLCJkcmF3IiwiY3R4IiwiZHJhd0ltYWdlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzZXR1cElucHV0cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBSixFQUFXQyxRQUFYLEVBQXFCQyxPQUFyQixFQUE4QkMsT0FBOUI7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxLQUF0QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDakMsT0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUNBLE1BQUlBLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ25CLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJKLEtBQWpCO0FBQ0Q7O0FBQ0QsT0FBS0ssSUFBTCxHQUFZLENBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FB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QUNDLEdBQU4sS0FBYyxHQUFkLElBQXFCRCxLQUFLLENBQUNDLEdBQU4sS0FBYyxZQUF2QyxFQUFxRDtBQUMxRC9CLFFBQUFBLFFBQVEsR0FBRyxLQUFYO0FBQ0Q7QUFDRixLQVZEO0FBV0QsR0F4QkQ7QUF5QkQ7O0FBSURnQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI5QixNQUFqQixDLENBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdXBLZXksIHJpZ2h0S2V5LCBkb3duS2V5LCBsZWZ0S2V5O1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKHgsIHksIGNvbG9yLCB0eXBlKSB7XHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIGlmICh0eXBlID09IFwiaW1hZ2VcIikge1xyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBjb2xvcjtcclxuICB9XHJcbiAgdGhpcy54dmVsID0gMDtcclxuICB0aGlzLnl2ZWwgPSAwO1xyXG4gIHRoaXMuZnJpY3Rpb24gPSAwLjY7XHJcbiAgdGhpcy5tYXhWZWwgPSA1O1xyXG4gIHRoaXMud2lkdGggPSAxNTA7XHJcbiAgdGhpcy5oZWlnaHQgPSA3NTtcclxuICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gIHRoaXMuc3RlcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vaG9yaXogbXZtdFxyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmICghbGVmdEtleSAmJiAhcmlnaHRLZXkgfHwgbGVmdEtleSAmJiByaWdodEtleSkge1xyXG4gICAgICAgIHRoaXMueHZlbCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0S2V5KSB7XHJcbiAgICAgICAgdGhpcy54dmVsICsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGxlZnRLZXkpIHtcclxuICAgICAgICB0aGlzLnh2ZWwgLS07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy54ICs9IHRoaXMueHZlbDtcclxuICAgICAgdGhpcy55ICs9IHRoaXMueXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvL3ZlcnQgbXZtdFxyXG4gICAgaWYgKHVwS2V5KSB7XHJcbiAgICAgIC8vY2hlY2sgaWYgb24gZ3JvdW5kXHJcbiAgICAgIHRoaXMueXZlbCAtPSAxMDtcclxuICAgIH1cclxuICAgIGlmIChkb3duS2V5KSB7XHJcbiAgICAgIHRoaXMueXZlbCArPSAxMDtcclxuICAgIH1cclxuICAgIC8vIHRoaXMueXZlbCArPSAyOyAvL2dyYXZpdHlcclxuXHJcbiAgICAvL2FkanVzdCB2ZWxcclxuICAgIGlmICh0aGlzLnh2ZWwgPiB0aGlzLm1heFZlbCkge1xyXG4gICAgICB0aGlzLnh2ZWwgPSB0aGlzLm1heFZlbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy54dmVsIDwgLXRoaXMubWF4VmVsKSB7XHJcbiAgICAgIHRoaXMueHZlbCA9IC10aGlzLm1heFZlbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnl2ZWwgPiB0aGlzLm1heFZlbCkge1xyXG4gICAgICB0aGlzLnl2ZWwgPSB0aGlzLm1heFZlbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy55dmVsIDwgLXRoaXMubWF4VmVsKSB7XHJcbiAgICAgIHRoaXMueXZlbCA9IC10aGlzLm1heFZlbDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnh2ZWwgPiAwKSB7XHJcbiAgICAgIHRoaXMueHZlbCA9IE1hdGguZmxvb3IodGhpcy54dmVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueHZlbCA9IE1hdGguY2VpbCh0aGlzLnh2ZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueXZlbCA+IDApIHtcclxuICAgICAgdGhpcy55dmVsID0gTWF0aC5mbG9vcih0aGlzLnl2ZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy55dmVsID0gTWF0aC5jZWlsKHRoaXMueXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ICs9IHRoaXMueHZlbDtcclxuICAgIHRoaXMueSArPSB0aGlzLnl2ZWw7XHJcbiAgfVxyXG5cclxuXHJcbiAgdGhpcy5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgJHt0aGlzLmNvbG9yfWA7XHJcbiAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5zZXR1cElucHV0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJ3XCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgIHVwS2V5ID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiYVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgIGxlZnRLZXkgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJzXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgZG93bktleSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcImRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgcmlnaHRLZXkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwid1wiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICB1cEtleSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgbGVmdEtleSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJzXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgZG93bktleSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJkXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgIHJpZ2h0S2V5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcclxuLy8gZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwiZmlsZSI6Ii4vc3JjL3BsYXllci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;