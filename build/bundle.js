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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Starting Page;
{
    var UserName = function UserName(nickUser) {
        var nickname = document.querySelector('#nick').value;
        if (typeof Storage !== "undefined") {
            localStorage.setItem('nick', nickname);
        } else {
            alert('Please open in Chrome!');
        }
        var catchUserDiv = document.querySelector('#user');
        catchUserDiv.innerHTML = localStorage.getItem('nick');
        hideStartingView();
        showSecondView();
    };

    var hideStartingView = function hideStartingView() {
        var catchWelcomeScreen = document.querySelector('.welcomeScreen');
        catchWelcomeScreen.style.display = 'none';
    };

    var showSecondView = function showSecondView() {
        var catchSecondView = document.querySelector('.mainContentWrapper');
        catchSecondView.style.display = 'flex';
    };

    var buttonStart = document.querySelector('#start');
    buttonStart.addEventListener('click', UserName, false);
}
//Main Page
var oneCardVissible = false;
var points = 0;
var counter = 0;
var firstCardColor = void 0,
    secondCardColor = void 0,
    firstCardId = void 0,
    secondCardId = void 0;
var cards = document.querySelectorAll('.card');
(function shuffleCards() {
    for (var i = cards.length - 1; i >= 0; i--) {
        var j = Math.floor(1 + Math.random() * (i + 1));
        cards[i].style.order = j;
    }
})();

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function listeners() {
        pickCard(this.getAttribute('id'));
    }, false);
}
function pickCard(nr) {
    var changeBackground = document.querySelector('.card' + nr);
    if (nr == 1 || nr == 2) {
        changeBackground.style.backgroundColor = 'red';
    } else if (nr == 3 || nr == 4) {
        changeBackground.style.backgroundColor = 'pink';
    } else if (nr == 5 || nr == 6) {
        changeBackground.style.backgroundColor = 'blue';
    } else if (nr == 7 || nr == 8) {
        changeBackground.style.backgroundColor = 'orange';
    } else if (nr == 9 || nr == 10) {
        changeBackground.style.backgroundColor = 'yellow';
    } else {
        changeBackground.style.backgroundColor = 'purple';
    }

    if (oneCardVissible == false) {
        //firstcard
        oneCardVissible = true;
        firstCardId = nr;
        firstCardColor = changeBackground.style.backgroundColor;
    } else {
        var defaultColor = function defaultColor(firstCardId, secondCardId) {
            var first = document.getElementById('' + firstCardId);
            var second = document.getElementById('' + secondCardId);
            first.style.backgroundColor = '#b4b4b4';
            second.style.backgroundColor = '#b4b4b4';
        };

        var disablePair = function disablePair(firstCardId, secondCardId) {
            var first = document.getElementById('' + firstCardId);
            var second = document.getElementById('' + secondCardId);
            first.style.display = 'none';
            second.style.display = 'none';
        };

        secondCardId = nr;
        secondCardColor = changeBackground.style.backgroundColor;
        //secondcard
        if (firstCardColor == secondCardColor) {
            //have pair
            points += 100;
            updateScores(points);
            setTimeout(disablePair, 500, firstCardId, secondCardId);
        } else {
            //dont have pair
            points -= 50;
            updateScores(points);
            setTimeout(defaultColor, 500, firstCardId, secondCardId);
        }
        oneCardVissible = false;
    }
    function updateScores(points) {
        var scores = document.querySelector('#scores');
        scores.innerHTML = points;
    }
}

/***/ })
/******/ ]);