"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/result",{

/***/ "./src/pages/result.js":
/*!*****************************!*\
  !*** ./src/pages/result.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ContractContext */ \"./src/context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst VoteTable = ()=>{\n    _s();\n    const { votes , fetchVotes , error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.ContractContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchVotes();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Vote name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Candidates\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Nigeria Election\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Vote In your President\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Peter Obi: 1200\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 38\n                                            }, undefined),\n                                            \"Bola Tinubu: 1280\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            \"Atiku Abubakar: 978\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoteTable, \"WIsZoMN+fmDQ3m/Hjuak2Nl7UiA=\");\n_c = VoteTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoteTable);\nvar _c;\n$RefreshReg$(_c, \"VoteTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdWx0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBQ1E7QUFFN0QsTUFBTUksWUFBWSxJQUFNOztJQUN0QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFQyxNQUFLLEVBQUUsR0FBR04saURBQVVBLENBQUNFLHFFQUFlQTtJQUUvREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSTtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlDLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBRUQscUJBTUUsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNmLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDZiw0RUFBQ0c7OzBDQUNDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUwsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0k7Z0NBQUdDLE9BQU07Z0NBQU1MLFdBQVU7MENBQVk7Ozs7OzswQ0FNdEMsOERBQUNJO2dDQUFHQyxPQUFNO2dDQUFNTCxXQUFVOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXMUMsOERBQUNNOzhCQUVHLDRFQUFDSDs7MENBR0MsOERBQUNJOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBRUosOERBQUNBOzBDQUNDLDRFQUFDQzs4Q0FDQyw0RUFBQ0M7OzRDQUc4QzswREFDNUIsOERBQUNDOzs7Ozs0Q0FBSTswREFDSCw4REFBQ0E7Ozs7OzRDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUM7R0F0RU1mO0tBQUFBO0FBd0VOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN1bHQuanM/NGNiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udHJhY3RDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Db250cmFjdENvbnRleHQnO1xuXG5jb25zdCBWb3RlVGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdm90ZXMsIGZldGNoVm90ZXMsIGVycm9yIH0gPSB1c2VDb250ZXh0KENvbnRyYWN0Q29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFZvdGVzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgXG5cblxuXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBWb3RlIG5hbWVcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICB7LyogPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgIEltYWdlXG4gICAgICAgICAgICA8L3RoPiAqL31cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBDYW5kaWRhdGVzXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgey8qIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBTdGFydCBUaW1lXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgIEVuZCBUaW1lXG4gICAgICAgICAgICA8L3RoPiAqL31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgey8qIHt2b3Rlcy5tYXAoKHZvdGUsIGluZGV4KSA9PiAoICovfVxuICAgICAgICAgICAgPHRyIFxuICAgICAgICAgICAgLy8ga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRkPk5pZ2VyaWEgRWxlY3Rpb248L3RkPlxuICAgICAgICAgICAgICA8dGQ+Vm90ZSBJbiB5b3VyIFByZXNpZGVudDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiA8dGQ+e3ZvdGUuaW1hZ2V9PC90ZD4gKi99XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGkgPlxuICAgICAgICAgICAgICAgICAgey8qIHt2b3RlLmNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX06IHtjYW5kaWRhdGUudm90ZUNvdW50fSAqL31cbiAgICAgICAgICAgICAgICAgICAgICBQZXRlciBPYmk6IDEyMDA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgIEJvbGEgVGludWJ1OiAxMjgwPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICBBdGlrdSBBYnViYWthcjogOTc4XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICB7LyogKSl9ICovfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiA8dGQ+e25ldyBEYXRlKHZvdGUuc3RhcnRUaW1lICogMTAwMCkudG9Mb2NhbGVTdHJpbmcoKX08L3RkPiAqL31cbiAgICAgICAgICAgICAgey8qIDx0ZD57bmV3IERhdGUodm90ZS5lbmRUaW1lICogMTAwMCkudG9Mb2NhbGVTdHJpbmcoKX08L3RkPiAqL31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb3RlVGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ29udHJhY3RDb250ZXh0IiwiVm90ZVRhYmxlIiwidm90ZXMiLCJmZXRjaFZvdGVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJ0ZCIsInVsIiwibGkiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/result.js\n"));

/***/ })

});