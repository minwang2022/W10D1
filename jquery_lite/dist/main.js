/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("\nclass DOMNodeCollection {\n    constructor(nodes) {\n        this.nodes = nodes;\n    }\n\n    html(str) {\n        if (!str) {\n            return this.nodes[0].innerHTML;      \n        } else {\n            this.nodes.forEach((node) => {\n                node.innerHTML = str;\n            })\n        }     \n    }\n\n    empty() {\n        this.nodes.forEach(node => {\n            node.innerHTML = \"\";\n        })\n    }\n\n    append(arg) {   \n        // debugger    \n        if (typeof arg === \"string\") {\n            this.nodes.forEach((ele) => {\n                ele.innerHTML += arg;\n            })\n        } else if (arg instanceof HTMLElement) {\n            this.nodes.forEach((ele) => {\n                ele.appendChild(arg.cloneNode(true));\n            })\n        } else if (arg instanceof DOMNodeCollection){\n            // debugger\n            this.nodes.forEach((parentNode) => {\n                arg.nodes.forEach(childNode => {\n                    parentNode.appendChild(childNode.cloneNode(true));\n                })\n            })\n        }\n    }\n\n  \n\n}\n\nwindow.DOMNodeCollection = DOMNodeCollection;\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n  // debugger\n  if (typeof arg === 'string') {\n    let nodeList = document.querySelectorAll(arg);\n    // debugger\n    return new DOMNodeCollection(Array.from(nodeList));\n  } else if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  }\n}\n\n// console.log($l);\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;