"use strict";

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId])
      /******/
      return installedModules[moduleId].exports;
    /******/
    // Create a new module (and put it into the cache)

    /******/

    var module = installedModules[moduleId] = {
      /******/
      exports: {},

      /******/
      id: moduleId,

      /******/
      loaded: false
      /******/

    };
    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    // Flag the module as loaded

    /******/

    module.loaded = true;
    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/
  // __webpack_public_path__

  /******/

  __webpack_require__.p = "";
  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports, __webpack_require__) {
  var loaderInit = __webpack_require__(1);

  var scrollInit = __webpack_require__(2);

  loaderInit();
  scrollInit();
  /***/
},
/* 1 */

/***/
function (module, exports) {
  var loaderFuncs = {};
  var body = document.querySelector('body');

  loaderFuncs.loader1 = function () {
    var loader1 = document.getElementById('js-loader1');
    var loader1Logo = document.getElementById('js-loader1Logo');
    var loader1Btn = document.getElementById('js-loader1Btn');
    loader1Btn.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.add('is-fixed');
      loader1.classList.add('is-show');
      setTimeout(function () {
        loader1Logo.classList.add('is-fadeout');
      }, 4000);
      setTimeout(function () {
        loader1.classList.add('is-fadeout');
        body.classList.remove('is-fixed');
        setTimeout(function () {
          loader1.classList.remove('is-show');
          loader1.classList.remove('is-fadeout');
          loader1Logo.classList.remove('is-fadeout');
        }, 500);
      }, 4700);
    });
  };

  loaderFuncs.loader2 = function () {
    var loader2 = document.getElementById('js-loader2');
    var loader2Logo = document.getElementById('js-loader2Logo');
    var loader2Btn = document.getElementById('js-loader2Btn');
    var loader2LogoHtml = '';
    var loader2LogoChar = loader2Logo.innerText.split('');
    loader2Btn.addEventListener('click', function (e) {
      e.preventDefault();

      for (var i = 0; i < loader2LogoChar.length; i++) {
        var delayNum = [i] * 0.15 + 0.5;
        var addStyle = 'style = "animation: loader-theme ' + delayNum + 's ease forwards;"';
        loader2LogoHtml += '<span ' + addStyle + '>' + loader2LogoChar[i] + '</span>';
      }

      loader2Logo.innerHTML = loader2LogoHtml;
      body.classList.add('is-fixed');
      loader2.classList.add('is-show');
      setTimeout(function () {
        loader2Logo.classList.add('is-fadeout');
      }, 4000);
      setTimeout(function () {
        loader2.classList.add('is-fadeout');
        body.classList.remove('is-fixed');
        setTimeout(function () {
          loader2.classList.remove('is-show');
          loader2.classList.remove('is-fadeout');
          loader2Logo.classList.remove('is-fadeout');
          loader2Logo.innerHTML = '';
          loader2LogoHtml = '';
        }, 500);
      }, 4700);
    });
  };

  var loaderInit = function loaderInit() {
    var loaderPage = document.getElementById('loader');

    if (loaderPage) {
      loaderFuncs.loader1();
      loaderFuncs.loader2();
    }
  };

  module.exports = loaderInit;
  /***/
},
/* 2 */

/***/
function (module, exports) {
  var scrollFuncs = {};
  var windowHeight = window.innerHeight;

  scrollFuncs.scroll1_1 = function () {
    var fadePics = document.querySelectorAll('.js-fadePic1');
    window.addEventListener('scroll', function () {
      for (var i = 0; i < fadePics.length; i++) {
        var fadePicY = fadePics[i].getBoundingClientRect().top;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var offset = fadePicY + scrollY;

        if (scrollY > offset - windowHeight * 0.9) {
          fadePics[i].classList.add('is-fade');
        }
      }
    });
  };

  scrollFuncs.scroll1_2 = function () {
    var fadePics = document.querySelectorAll('.js-fadePic2');
    window.addEventListener('scroll', function () {
      for (var i = 0; i < fadePics.length; i++) {
        var fadePicY = fadePics[i].getBoundingClientRect().top;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var offset = fadePicY + scrollY;

        if (scrollY > offset - windowHeight * 0.7) {
          fadePics[i].classList.add('is-show');
        }
      }
    });
  };

  scrollFuncs.scroll1_3 = function () {
    var fadePics = document.querySelectorAll('.js-fadePic3');
    window.addEventListener('scroll', function () {
      for (var i = 0; i < fadePics.length; i++) {
        var fadePicY = fadePics[i].getBoundingClientRect().top;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var offset = fadePicY + scrollY;

        if (scrollY > offset - windowHeight * 0.9) {
          fadePics[i].classList.add('is-fade');
        }
      }
    });
  };

  scrollFuncs.scroll2_1 = function () {
    var fadeTxt = document.querySelectorAll('.js-fadeTxt1');
    window.addEventListener('scroll', function () {
      for (var i = 0; i < fadeTxt.length; i++) {
        var fadeTxtY = fadeTxt[i].getBoundingClientRect().top;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var offset = fadeTxtY + scrollY;

        if (scrollY > offset - windowHeight * 0.9) {
          fadeTxt[i].classList.add('is-fade');
        }
      }
    });
  };

  var scrollInit = function scrollInit() {
    var scrollPage = document.getElementById('scroll');

    if (scrollPage) {
      scrollFuncs.scroll1_1();
      scrollFuncs.scroll1_2();
      scrollFuncs.scroll1_3();
      scrollFuncs.scroll2_1();
    }
  };

  module.exports = scrollInit;
  /***/
}
/******/
]);