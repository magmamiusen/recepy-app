"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/indexComponents/banner.js":
/*!**********************************************!*\
  !*** ./components/indexComponents/banner.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Banner = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    background: linear-gradient(to bottom, transparent, rgb(8, 8, 8)), url("/mexicanFoodbanner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./components/indexComponents/card.js":
/*!********************************************!*\
  !*** ./components/indexComponents/card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardLayout */ "./components/indexComponents/cardLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\card.js";




function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_cardLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
    img: props.img,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CardStyled, {
      title: props.title,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: props.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

const CardStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;

    h1 {
        color: rgb(255, 255, 255);
        margin: 0;
    }

    p {
        margin: 0;
        color: rgb(170, 170, 170);
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/indexComponents/cardBanner.js":
/*!**************************************************!*\
  !*** ./components/indexComponents/cardBanner.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\cardBanner.js";



function CardBanner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardStyled, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "R E C E P Y"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        children: "Iniciar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        children: "Ingresar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const CardStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column;
    height: 65vh;
    width: 30vw;
    gap: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;
    justify-content: end;
    background: transparent;
    
    h1 {
        font-size: 50px;
        color: rgb(255, 255, 255);
        margin: 0;
        user-select: none;
        min-width: 70vw;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        button {
            font-size: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(255, 255, 255);
            background-color: transparent;
            height: 50px;
            width: 100%;
            border: solid 4px rgba(255, 255, 255, 0.8);
            border-radius: 5px;
            cursor: pointer;
            transition: 333ms;

            &:hover {
                background-color: rgb(255, 255, 255);
                color: rgba(0, 0, 0, 1);
                transform: scale(1.02);
            }
    }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBanner);

/***/ }),

/***/ "./components/indexComponents/cardLayout.js":
/*!**************************************************!*\
  !*** ./components/indexComponents/cardLayout.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardLayout = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    background: linear-gradient(to bottom, transparent, rgb(5, 5, 5)), url( ${props => props.img} );
    background-size: cover;
    border: solid 4px rgb(19, 19, 19);
    color: rgb(255, 255, 255);
    height: 370px;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);
    transition: 333ms;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: end;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        opacity: 1;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardLayout);

/***/ }),

/***/ "./components/indexComponents/footer.js":
/*!**********************************************!*\
  !*** ./components/indexComponents/footer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\footer.js";



function Footer({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FooterStyled, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const FooterStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    height: 50vh;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/indexComponents/gallery.js":
/*!***********************************************!*\
  !*** ./components/indexComponents/gallery.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\gallery.js";



function Gallery({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GalleryStyled, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const GalleryStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    overflow-x: auto;
    gap: 20px;
    padding: 30px;
    padding-bottom: 100px;

    &::-webkit-scrollbar {
        height: 6px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgb(19, 19 , 19);
    }

    &::-webkit-scrollbar-thumb:active{
        background-color: rgb(30, 30 , 30);
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ "./components/indexComponents/layout.js":
/*!**********************************************!*\
  !*** ./components/indexComponents/layout.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\layout.js";


function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/indexComponents/navPick.js":
/*!***********************************************!*\
  !*** ./components/indexComponents/navPick.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\navPick.js";



function NavPick({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavPickStyled, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const NavPickStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    background-color: transparent;
    width: auto;
    gap: 20px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPick);

/***/ }),

/***/ "./components/indexComponents/pick.js":
/*!********************************************!*\
  !*** ./components/indexComponents/pick.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\pick.js";



function Pick({
  emoji
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PickStyled, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: emoji
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const PickStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 18vh;
    width: 18vw;
    cursor: pointer;
    background: linear-gradient(to bottom, rgb(30, 30, 30), rgb(5, 5, 5));
    border: solid 4px rgb(19, 19, 19);
    border-radius: 10px;
    color: white;
    transition: 333ms;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);

    &:hover {
        transform: scale(1.1);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pick);

/***/ }),

/***/ "./components/indexComponents/search.js":
/*!**********************************************!*\
  !*** ./components/indexComponents/search.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Search = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 20px;

    input {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        background-color: rgb(30, 30, 30);
        width: 67%;
        height: 5vh;
        padding: 10px 30px;
        border: solid 4px rgb(19, 19, 19);
        border-radius: 10px;
        outline: none;
        font-size: 30px;
        color: rgb(255, 255, 255);
        transition: 333ms;

        &:hover {
            border-color: rgba(249, 249, 249, 0.8);
        }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./components/indexComponents/status.js":
/*!**********************************************!*\
  !*** ./components/indexComponents/status.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Status = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Status);

/***/ }),

/***/ "./components/indexComponents/user.js":
/*!********************************************!*\
  !*** ./components/indexComponents/user.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\components\\indexComponents\\user.js";



function User({
  img
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserStyled, {
    img: img
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

const UserStyled = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    background-image: url( ${props => props.img} );
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-size: cover;
    transition: 333ms;
    border: solid 4px rgb(249, 249, 249, 0.8);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);

    &:hover{
        transform: scale(1.1);
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_indexComponents_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/indexComponents/banner */ "./components/indexComponents/banner.js");
/* harmony import */ var _components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/indexComponents/card */ "./components/indexComponents/card.js");
/* harmony import */ var _components_indexComponents_cardBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/indexComponents/cardBanner */ "./components/indexComponents/cardBanner.js");
/* harmony import */ var _components_indexComponents_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/indexComponents/footer */ "./components/indexComponents/footer.js");
/* harmony import */ var _components_indexComponents_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/indexComponents/gallery */ "./components/indexComponents/gallery.js");
/* harmony import */ var _components_indexComponents_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/indexComponents/layout */ "./components/indexComponents/layout.js");
/* harmony import */ var _components_indexComponents_navPick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/indexComponents/navPick */ "./components/indexComponents/navPick.js");
/* harmony import */ var _components_indexComponents_pick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/indexComponents/pick */ "./components/indexComponents/pick.js");
/* harmony import */ var _components_indexComponents_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/indexComponents/search */ "./components/indexComponents/search.js");
/* harmony import */ var _components_indexComponents_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/indexComponents/status */ "./components/indexComponents/status.js");
/* harmony import */ var _components_indexComponents_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/indexComponents/user */ "./components/indexComponents/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\pablo\\Documents\\recepy-app\\pages\\index.js";














const bannerlayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_banner__WEBPACK_IMPORTED_MODULE_1__.default, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_status__WEBPACK_IMPORTED_MODULE_10__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_cardBanner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_user__WEBPACK_IMPORTED_MODULE_11__.default, {
      img: "unnamed.webp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 1
}, undefined);

const titleGallery = "Dstacado";
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_layout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("title", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_search__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("input", {
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_navPick__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_pick__WEBPACK_IMPORTED_MODULE_8__.default, {
          emoji: "\uD83C\uDF82"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_pick__WEBPACK_IMPORTED_MODULE_8__.default, {
          emoji: "\uD83E\uDD69"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_pick__WEBPACK_IMPORTED_MODULE_8__.default, {
          emoji: "\uD83C\uDF45"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_pick__WEBPACK_IMPORTED_MODULE_8__.default, {
          emoji: "\uD83C\uDF7D\uFE0F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_gallery__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/fanatic.jpg",
          title: "The Fanatic",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/mi.jpg",
          title: "Mision Imposible",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/youngDylan.jpg",
          title: "Young Dylan",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/yourHonor.jpg",
          title: "Your Honor",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/card.png",
          title: "Burger King",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/fanatic.jpg",
          title: "The Fanatic",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/mi.jpg",
          title: "Mision Imposible",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/youngDylan.jpg",
          title: "Young Dylan",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/yourHonor.jpg",
          title: "Your Honor",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_card__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/card.png",
          title: "Burger King",
          user: "Default user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_indexComponents_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxVQURGO0FBMEZEOzs7Ozs7Ozs7O0FDbEhEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VweS1hcHAvLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC8uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC8uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL2NhcmRCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC8uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL2NhcmRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC8uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZWNlcHktYXBwLy4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZWNlcHktYXBwLy4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL3JlY2VweS1hcHAvLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9uYXZQaWNrLmpzIiwid2VicGFjazovL3JlY2VweS1hcHAvLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9waWNrLmpzIiwid2VicGFjazovL3JlY2VweS1hcHAvLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC8uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly9yZWNlcHktYXBwLy4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvdXNlci5qcyIsIndlYnBhY2s6Ly9yZWNlcHktYXBwLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjZXB5LWFwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3JlY2VweS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9yZWNlcHktYXBwL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQmFubmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCByZ2IoOCwgOCwgOCkpLCB1cmwoXCIvbWV4aWNhbkZvb2RiYW5uZXIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBDYXJkTGF5b3V0IGZyb20gXCIuL2NhcmRMYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQgKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPENhcmRMYXlvdXQgaW1nPXtwcm9wcy5pbWd9PlxyXG4gICAgICAgIDxDYXJkU3R5bGVkIHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnVzZXJ9PC9wPlxyXG4gICAgICAgIDwvQ2FyZFN0eWxlZD5cclxuICAgIDwvQ2FyZExheW91dD5cclxufVxyXG5cclxuY29uc3QgQ2FyZFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZnVuY3Rpb24gQ2FyZEJhbm5lciAoKSB7XHJcbiAgICByZXR1cm4gPENhcmRTdHlsZWQ+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBSIEUgQyBFIFAgWVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5JbmljaWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+SW5ncmVzYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZFN0eWxlZD5cclxufVxyXG5cclxuY29uc3QgQ2FyZFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogNjV2aDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIG1pbi13aWR0aDogNzB2dztcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMzNtcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRCYW5uZXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmRMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHJnYig1LCA1LCA1KSksIHVybCggJHsocHJvcHMpID0+IHByb3BzLmltZ30gKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDRweCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDUwcHggNDBweCByZ2IoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAzMzNtcztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC44KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGF5b3V0OyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIgKHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiA8Rm9vdGVyU3R5bGVkPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRm9vdGVyU3R5bGVkPlxyXG59XHJcblxyXG5jb25zdCBGb290ZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBHYWxsZXJ5ICh7Y2hpbGRyZW59KSB7XHJcbiAgICByZXR1cm4gPEdhbGxlcnlTdHlsZWQ+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9HYWxsZXJ5U3R5bGVkPlxyXG59XHJcblxyXG5jb25zdCBHYWxsZXJ5U3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTkgLCAxOSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAgLCAzMCk7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7ICIsImZ1bmN0aW9uIExheW91dCAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2UGljayAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIDxOYXZQaWNrU3R5bGVkPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTmF2UGlja1N0eWxlZD5cclxufVxyXG5cclxuY29uc3QgTmF2UGlja1N0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZQaWNrOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBQaWNrICh7ZW1vaml9KSB7XHJcbiAgICByZXR1cm4gPFBpY2tTdHlsZWQ+XHJcbiAgICAgICAgPGgxPntlbW9qaX08L2gxPlxyXG4gICAgPC9QaWNrU3R5bGVkPlxyXG59XHJcblxyXG5jb25zdCBQaWNrU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTh2aDtcclxuICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDMwLCAzMCwgMzApLCByZ2IoNSwgNSwgNSkpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDMzM21zO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDUwcHggNDBweCByZ2IoMCwgMCwgMCk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWNrOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XHJcbiAgICAgICAgd2lkdGg6IDY3JTtcclxuICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMzNtcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdGF0dXMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZnVuY3Rpb24gVXNlciAoe2ltZ30pIHtcclxuICAgIHJldHVybiA8VXNlclN0eWxlZCBpbWc9e2ltZ30+XHJcbiAgICA8L1VzZXJTdHlsZWQ+XHJcbn1cclxuXHJcbmNvbnN0IFVzZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCAkeyhwcm9wcykgPT4gcHJvcHMuaW1nfSApO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMzMzbXM7XHJcbiAgICBib3JkZXI6IHNvbGlkIDRweCByZ2IoMjQ5LCAyNDksIDI0OSwgMC44KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNTBweCA0MHB4IHJnYigwLCAwLCAwKTtcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9iYW5uZXJcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4Q29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgQ2FyZEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvY2FyZEJhbm5lclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvZ2FsbGVyeVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgTmF2UGljayBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvbmF2UGlja1wiO1xuaW1wb3J0IFBpY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL3BpY2tcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhDb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvc3RhdHVzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleENvbXBvbmVudHMvdXNlclwiO1xuXG5jb25zdCBiYW5uZXJsYXlvdXQgPSBcbjxCYW5uZXI+XG4gIDxTdGF0dXM+ICAgICAgICAgIFxuICAgIDxDYXJkQmFubmVyLz5cbiAgICA8VXNlciBpbWc9XCJ1bm5hbWVkLndlYnBcIj48L1VzZXI+XG4gIDwvU3RhdHVzPlxuPC9CYW5uZXI+XG5cbmNvbnN0IHRpdGxlR2FsbGVyeSA9IFwiRHN0YWNhZG9cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuXG4gICAgICAgIDxTZWFyY2g+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPC9TZWFyY2g+XG5cbiAgICAgICAgPE5hdlBpY2s+XG4gICAgICAgICAgPFBpY2sgXG4gICAgICAgICAgICBlbW9qaT1cIvCfjoJcIiBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQaWNrIFxuICAgICAgICAgICAgZW1vamk9XCLwn6WpXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGlja1xuICAgICAgICAgICAgZW1vamk9XCLwn42FXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGljayBcbiAgICAgICAgICAgIGVtb2ppPVwi8J+Nve+4j1wiIFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2UGljaz5cblxuICAgICAgICA8R2FsbGVyeT5cblxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgaW1nPVwiL2ZhbmF0aWMuanBnXCIgXG4gICAgICAgICAgICB0aXRsZT1cIlRoZSBGYW5hdGljXCIgXG4gICAgICAgICAgICB1c2VyPVwiRGVmYXVsdCB1c2VyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgaW1nPVwiL21pLmpwZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJNaXNpb24gSW1wb3NpYmxlXCIgXG4gICAgICAgICAgICB1c2VyPVwiRGVmYXVsdCB1c2VyXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGltZz1cIi95b3VuZ0R5bGFuLmpwZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJZb3VuZyBEeWxhblwiIFxuICAgICAgICAgICAgdXNlcj1cIkRlZmF1bHQgdXNlclwiIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICBpbWc9XCIveW91ckhvbm9yLmpwZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJZb3VyIEhvbm9yXCIgXG4gICAgICAgICAgICB1c2VyPVwiRGVmYXVsdCB1c2VyXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGltZz1cIi9jYXJkLnBuZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJCdXJnZXIgS2luZ1wiIFxuICAgICAgICAgICAgdXNlcj1cIkRlZmF1bHQgdXNlclwiIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICBpbWc9XCIvZmFuYXRpYy5qcGdcIiBcbiAgICAgICAgICAgIHRpdGxlPVwiVGhlIEZhbmF0aWNcIiBcbiAgICAgICAgICAgIHVzZXI9XCJEZWZhdWx0IHVzZXJcIiBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgaW1nPVwiL21pLmpwZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJNaXNpb24gSW1wb3NpYmxlXCIgXG4gICAgICAgICAgICB1c2VyPVwiRGVmYXVsdCB1c2VyXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGltZz1cIi95b3VuZ0R5bGFuLmpwZ1wiIFxuICAgICAgICAgICAgdGl0bGU9XCJZb3VuZyBEeWxhblwiIFxuICAgICAgICAgICAgdXNlcj1cIkRlZmF1bHQgdXNlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGltZz1cIi95b3VySG9ub3IuanBnXCIgXG4gICAgICAgICAgICB0aXRsZT1cIllvdXIgSG9ub3JcIiBcbiAgICAgICAgICAgIHVzZXI9XCJEZWZhdWx0IHVzZXJcIiBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgaW1nPVwiL2NhcmQucG5nXCIgXG4gICAgICAgICAgICB0aXRsZT1cIkJ1cmdlciBLaW5nXCIgXG4gICAgICAgICAgICB1c2VyPVwiRGVmYXVsdCB1c2VyXCIgXG4gICAgICAgICAgLz5cblxuICAgICAgICA8L0dhbGxlcnk+IFxuXG4gICAgICAgIDxGb290ZXI+XG4gICAgICAgIDwvRm9vdGVyPlxuXG4gICAgICA8L21haW4+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkJhbm5lciIsImRpdiIsIkNhcmRMYXlvdXQiLCJDYXJkIiwicHJvcHMiLCJpbWciLCJ0aXRsZSIsInVzZXIiLCJDYXJkU3R5bGVkIiwiQ2FyZEJhbm5lciIsIkZvb3RlciIsImNoaWxkcmVuIiwiRm9vdGVyU3R5bGVkIiwiR2FsbGVyeSIsIkdhbGxlcnlTdHlsZWQiLCJMYXlvdXQiLCJOYXZQaWNrIiwiTmF2UGlja1N0eWxlZCIsIlBpY2siLCJlbW9qaSIsIlBpY2tTdHlsZWQiLCJTZWFyY2giLCJTdGF0dXMiLCJVc2VyIiwiVXNlclN0eWxlZCIsIkhlYWQiLCJiYW5uZXJsYXlvdXQiLCJ0aXRsZUdhbGxlcnkiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==