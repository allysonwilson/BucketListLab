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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var countriesView = __webpack_require__(1)

var app = function () {
countriesView.start();


}

window.addEventListener('DOMContentLoaded', app )


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var requestHelper = __webpack_require__(2);
var render = __webpack_require__(3);

var viewer = {};

viewer.start = function (){
  requestHelper.getRequest("https://restcountries.eu/rest/v2/all", function(countries){
    render.dropDown(countries);
  });

  requestHelper.getRequest("http://localhost:3000/api/countries", function(data){
    render.list(data);
  })
}




module.exports = viewer;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var requestHelper = {
  getRequest: function (url, fishingLine) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.addEventListener('load', function(){
      var data = JSON.parse(this.responseText);
      fishingLine(data);
    })

    xhr.send();
  },

  post: function ( url, fishingLine, info) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    var stringToSubmit = JSON.stringify(info);

    xhr.addEventListener('load' , function() {
      var data = JSON.parse(this.responseText);
      fishingLine(data);
    })

    xhr.send(stringToSubmit);
  }
}

module.exports = requestHelper;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var render = {}

render.dropDown = function(array) {
  var div = document.getElementById("select");
  var select = document.createElement("select");

  var firstOption = document.createElement("option");
  firstOption.innerText = "Add a country to your Bucket List";
  firstOption.selected = true;
  firstOption.disabled = true;

  select.appendChild(firstOption);

  for (var item of array) {
    var option = document.createElement("option");
    option.innerText = item.name;
    select.appendChild(option);
  }

  div.appendChild(select);
}

render.list = function(array) {
  var div = document.getElementById("saved-data");
  var ol = document.createElement("ol");

  for (var item of array) {
    var listItem = document.createElement("li")
    listItem.innerText = item.name;
    ol.appendChild(listItem);
  }

  div.appendChild(ol);
}



module.exports = render;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map