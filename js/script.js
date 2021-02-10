 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n});\nvar persons = document.querySelectorAll('.team__element');\nvar personsInfo = document.querySelectorAll('.team__inf');\npersons.forEach(function (i) {\n  i.addEventListener('mouseover', function (e) {\n    setTimeout(function () {\n      personsInfo.forEach(function (i) {\n        i.style.display = 'flex';\n      });\n    });\n  }, 200);\n}); // Project\n\nvar projectItem = document.querySelectorAll('.project__item'),\n    projectModal = document.querySelector('.project__modal-item'),\n    projectCloseModal = document.querySelector('.project__close-modal'),\n    projectDetails = document.querySelector('.project__options>h4'),\n    projectDot = document.querySelectorAll('.project__dot'),\n    projectSlider = document.querySelector('.project__status'),\n    projectNext = document.querySelector('.project__slider.next'),\n    projectPrev = document.querySelector('.project__slider.prev'),\n    projectIndex = 0;\n\nfunction showSlide(value) {\n  projectItem[value].classList.add('active');\n  projectDot[value].classList.add('active');\n}\n\nfunction hideSlides() {\n  projectItem.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  projectDot.forEach(function (i) {\n    i.classList.remove('active');\n  });\n}\n\nfunction slideChanger(value) {\n  if (value == projectItem.length) {\n    value = 0;\n    projectIndex = 0;\n  }\n\n  if (value < 0) {\n    value = projectItem.length - 1;\n    projectIndex = projectItem.length - 1;\n  }\n\n  hideSlides();\n  showSlide(value);\n}\n\nprojectNext.addEventListener('click', function (e) {\n  projectIndex++;\n  slideChanger(projectIndex);\n});\nprojectPrev.addEventListener('click', function (e) {\n  projectIndex--;\n  slideChanger(projectIndex);\n});\nprojectSlider.addEventListener('click', function (e) {\n  for (var i = 0; i < projectDot.length; i++) {\n    if (e.target.classList.contains('project__dot') && e.target == projectDot[i]) {\n      projectIndex = i;\n      slideChanger(projectIndex);\n    }\n  }\n});\nprojectDetails.addEventListener('click', function (e) {\n  document.body.style.overflow = 'hidden';\n  projectModal.classList.add('active');\n});\nprojectCloseModal.addEventListener('click', function (e) {\n  document.body.style.overflow = 'visible';\n  projectModal.classList.remove('active');\n}); // Testimotionals\n\nvar testimonialsItem = document.querySelectorAll('.testimonials__item'),\n    testimonialsDot = document.querySelectorAll('.testimonials__dot'),\n    testimonialsSlider = document.querySelector('.testimonials__status'),\n    testimonialsPrev = document.querySelector('.testimonials__slider.prev'),\n    testimonialsNext = document.querySelector('.testimonials__slider.next'),\n    testimonialsIndex = 0;\n\nfunction showReview(value) {\n  testimonialsItem[value].classList.add('active');\n  testimonialsDot[value].classList.add('active');\n}\n\nfunction hideReviews() {\n  testimonialsItem.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  testimonialsDot.forEach(function (i) {\n    i.classList.remove('active');\n  });\n}\n\nfunction reviewChanger(value) {\n  if (value == testimonialsItem.length) {\n    value = 0;\n    testimonialsIndex = 0;\n  }\n\n  if (value < 0) {\n    value = testimonialsItem.length - 1;\n    testimonialsIndex = testimonialsItem.length - 1;\n  }\n\n  hideReviews();\n  showReview(value);\n}\n\ntestimonialsNext.addEventListener('click', function (e) {\n  testimonialsIndex++;\n  reviewChanger(testimonialsIndex);\n});\ntestimonialsPrev.addEventListener('click', function (e) {\n  testimonialsIndex--;\n  reviewChanger(testimonialsIndex);\n});\ntestimonialsSlider.addEventListener('click', function (e) {\n  for (var i = 0; i < testimonialsDot.length; i++) {\n    if (e.target.classList.contains('testimonials__dot') && e.target == testimonialsDot[i]) {\n      testimonialsIndex = i;\n      reviewChanger(testimonialsIndex);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });