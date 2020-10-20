# What is this?

This is a repo containing the code to reproduce an issue in webpack 5 federation. It is based on the [basic-remote-host](https://github.com/module-federation/module-federation-examples/blob/master/basic-host-remote/README.md) example.

# How to reproduce the error

1. Clone this repo
2. Switch to the `issue-1` branch
3. Run `yarn` in the root to install dependencies
4. Run in parallel:
   1. `cd app1 && yarn start`
   2. `cd app2 && yarn start`
5. Open [http://localhost:3002/](http://localhost:3002/): this is `app2` alone and it should work flawlessly
6. Open [http://localhost:3001/](http://localhost:3001/): this is `app1` consuming the button from `app2` and it should work flawlessly
7. Open [http://localhost:3001/?p=1](http://localhost:3001/?p=1): this is `app1` consuming the button from `app2`, but this time we write a `<div>` with `id="app2"` to the HTML, which masks the `app2` variable from the generated `app2/remoteEntry.js` file:

# For reference

The generated `app2/remoteEntry.js` file starts with the following code:

```javascript
var app2;app2 =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "webpack/container/entry/app2":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.d, __webpack_require__.o, __webpack_exports__, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

   ...
```
