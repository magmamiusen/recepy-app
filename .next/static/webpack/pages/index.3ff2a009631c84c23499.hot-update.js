"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./firebase/storage.js":
/*!*****************************!*\
  !*** ./firebase/storage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebaseConfig */ "./firebase/firebaseConfig.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function storageFb() {
  var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)();
  (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(storage, 'images/fanatic.jpg')).then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = function (event) {
      var blob = xhr.response;
    };

    xhr.open('GET', url);
    xhr.send(); // Or inserted into an <img> element

    var img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })["catch"](function (error) {// Handle any errors
  });
  return url;
}

/* harmony default export */ __webpack_exports__["default"] = (storageFb);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ZmMmEwMDk2MzFjODRjMjM0OTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTSSxTQUFULEdBQXNCO0FBQ2xCLE1BQU1DLE9BQU8sR0FBR0wsNERBQVUsRUFBMUI7QUFDQUUsRUFBQUEsZ0VBQWMsQ0FBQ0QscURBQUcsQ0FBQ0ksT0FBRCxFQUFVLG9CQUFWLENBQUosQ0FBZCxDQUNDQyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2Y7QUFFQTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxZQUFKLEdBQW1CLE1BQW5COztBQUNBRixJQUFBQSxHQUFHLENBQUNHLE1BQUosR0FBYSxVQUFDQyxLQUFELEVBQVc7QUFDdEIsVUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNNLFFBQWpCO0FBQ0QsS0FGRDs7QUFHQU4sSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsS0FBVCxFQUFnQlIsR0FBaEI7QUFDQUMsSUFBQUEsR0FBRyxDQUFDUSxJQUFKLEdBVmUsQ0FZZjs7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csWUFBSixDQUFpQixLQUFqQixFQUF3QmIsR0FBeEI7QUFDRCxHQWhCQyxXQWlCSyxVQUFDYyxLQUFELEVBQVcsQ0FDaEI7QUFDSCxHQW5CRztBQXFCSixTQUFPZCxHQUFQO0FBQ0M7O0FBRUQsK0RBQWVILFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2Uvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vZmlyZWJhc2VDb25maWdcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc3RvcmFnZUZiICgpIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XHJcbiAgICBnZXREb3dubG9hZFVSTChyZWYoc3RvcmFnZSwgJ2ltYWdlcy9mYW5hdGljLmpwZycpKVxyXG4gICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgLy8gYHVybGAgaXMgdGhlIGRvd25sb2FkIFVSTCBmb3IgJ2ltYWdlcy9zdGFycy5qcGcnXHJcblxyXG4gICAgLy8gVGhpcyBjYW4gYmUgZG93bmxvYWRlZCBkaXJlY3RseTpcclxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgIHhoci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgYmxvYiA9IHhoci5yZXNwb25zZTtcclxuICAgIH07XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5zZW5kKCk7XHJcblxyXG4gICAgLy8gT3IgaW5zZXJ0ZWQgaW50byBhbiA8aW1nPiBlbGVtZW50XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlpbWcnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyBIYW5kbGUgYW55IGVycm9yc1xyXG59KTtcclxuXHJcbnJldHVybiB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VGYjsiXSwibmFtZXMiOlsiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiYXBwIiwic3RvcmFnZUZiIiwic3RvcmFnZSIsInRoZW4iLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInJlc3BvbnNlVHlwZSIsIm9ubG9hZCIsImV2ZW50IiwiYmxvYiIsInJlc3BvbnNlIiwib3BlbiIsInNlbmQiLCJpbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9