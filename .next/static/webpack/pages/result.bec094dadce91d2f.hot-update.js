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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ContractContext */ \"./src/context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst VoteTable = ()=>{\n    _s();\n    const { votes , fetchVotes , error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.ContractContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchVotes();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search-dropdown\",\n                className: \"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white\",\n                children: \"Your Email\"\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"dropdown-button\",\n                \"data-dropdown-toggle\": \"dropdown\",\n                className: \"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600\",\n                type: \"button\",\n                children: [\n                    \"All categories\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"w-4 h-4 ml-1\",\n                        fill: \"currentColor\",\n                        viewBox: \"0 0 20 20\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"dropdown\",\n                className: \"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"py-2 text-sm text-gray-700 dark:text-gray-200\",\n                    \"aria-labelledby\": \"dropdown-button\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Mockups\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Templates\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Design\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Logos\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\",\n                        id: \"search-dropdown\",\n                        className: \"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500\",\n                        placeholder: \"Search Mockups, Logos, Design Templates...\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                className: \"w-5 h-5\",\n                                fill: \"none\",\n                                stroke: \"currentColor\",\n                                viewBox: \"0 0 24 24\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: 2,\n                                    d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Vote name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Nigeria Election\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Vote for your President\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 107,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 96,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoteTable, \"WIsZoMN+fmDQ3m/Hjuak2Nl7UiA=\");\n_c = VoteTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoteTable);\nvar _c;\n$RefreshReg$(_c, \"VoteTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdWx0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBQ1E7QUFFN0QsTUFBTUksWUFBWSxJQUFNOztJQUN0QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFQyxNQUFLLEVBQUUsR0FBR04saURBQVVBLENBQUNFLHFFQUFlQTtJQUUvREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSTtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlDLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBa0JGLFdBQVU7MEJBQWlFOzs7Ozs7MEJBRzVHLDhEQUFDRztnQkFDQ0MsSUFBRztnQkFDSEMsd0JBQXFCO2dCQUNyQkwsV0FBVTtnQkFDVk0sTUFBSzs7b0JBRU47b0JBQ2dCO2tDQUNmLDhEQUFDQzt3QkFDQ0MsZUFBWTt3QkFDWlIsV0FBVTt3QkFDVlMsTUFBSzt3QkFDTEMsU0FBUTt3QkFDUkMsT0FBTTtrQ0FFTiw0RUFBQ0M7NEJBQ0NDLFVBQVM7NEJBQ1RDLEdBQUU7NEJBQ0ZDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDaEI7Z0JBQUlLLElBQUc7Z0JBQVdKLFdBQVU7MEJBQzNCLDRFQUFDZ0I7b0JBQUdoQixXQUFVO29CQUFnRGlCLG1CQUFnQjs7c0NBQzVFLDhEQUFDQztzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wSSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbUI7d0JBQ0NiLE1BQUs7d0JBQ0xGLElBQUc7d0JBQ0hKLFdBQVU7d0JBQ1ZvQixhQUFZO3dCQUNaQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNsQjt3QkFDQ0csTUFBSzt3QkFDTE4sV0FBVTs7MENBR1YsOERBQUNPO2dDQUNDQyxlQUFZO2dDQUNaUixXQUFVO2dDQUNWUyxNQUFLO2dDQUNMYSxRQUFPO2dDQUNQWixTQUFRO2dDQUNSQyxPQUFNOzBDQUVOLDRFQUFDQztvQ0FBS1csZUFBYztvQ0FBUUMsZ0JBQWU7b0NBQVFDLGFBQWE7b0NBQUdYLEdBQUU7Ozs7Ozs7Ozs7OzBDQUV2RSw4REFBQ1k7Z0NBQUsxQixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDMkI7Ozs7OzBCQUdILDhEQUFDNUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM0QjtvQkFBTTVCLFdBQVU7O3NDQUNmLDhEQUFDNkI7NEJBQU03QixXQUFVO3NDQUNmLDRFQUFDOEI7O2tEQUNDLDhEQUFDQzt3Q0FBR0MsT0FBTTt3Q0FBTWhDLFdBQVU7a0RBQVk7Ozs7OztrREFHdEMsOERBQUMrQjt3Q0FBR0MsT0FBTTt3Q0FBTWhDLFdBQVU7a0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUsxQyw4REFBQ2lDO3NDQUNDLDRFQUFDSDs7a0RBQ0MsOERBQUNJO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hCO0dBakhNdkM7S0FBQUE7QUFtSE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jlc3VsdC5qcz80Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250cmFjdENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dCc7XG5cbmNvbnN0IFZvdGVUYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgeyB2b3RlcywgZmV0Y2hWb3RlcywgZXJyb3IgfSA9IHVzZUNvbnRleHQoQ29udHJhY3RDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVm90ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWRyb3Bkb3duXCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc3Itb25seSBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgWW91ciBFbWFpbFxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJkcm9wZG93bi1idXR0b25cIlxuICAgICAgICBkYXRhLWRyb3Bkb3duLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB6LTEwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweS0yLjUgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwtbGcgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZURyb3Bkb3duVG9nZ2xlfVxuICAgICAgPlxuICAgICAgICBBbGwgY2F0ZWdvcmllc3tcIiBcIn1cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0xXCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGlkPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJ6LTEwIGhpZGRlbiBiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0xMDAgcm91bmRlZC1sZyBzaGFkb3cgdy00NCBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0yMDBcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bi1idXR0b25cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIE1vY2t1cHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBUZW1wbGF0ZXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBMb2dvc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgaWQ9XCJzZWFyY2gtZHJvcGRvd25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHAtMi41IHctZnVsbCB6LTIwIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtci1sZyBib3JkZXItbC1ncmF5LTUwIGJvcmRlci1sLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWwtZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE1vY2t1cHMsIExvZ29zLCBEZXNpZ24gVGVtcGxhdGVzLi4uXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBwLTIuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZC1yLWxnIGJvcmRlciBib3JkZXItYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIlxuICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlNlYXJjaDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxici8+XG4gIFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBWb3RlIG5hbWVcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5OaWdlcmlhIEVsZWN0aW9uPC90ZD5cbiAgICAgICAgICAgIDx0ZD5Wb3RlIGZvciB5b3VyIFByZXNpZGVudDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb3RlVGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ29udHJhY3RDb250ZXh0IiwiVm90ZVRhYmxlIiwidm90ZXMiLCJmZXRjaFZvdGVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJpZCIsImRhdGEtZHJvcGRvd24tdG9nZ2xlIiwidHlwZSIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsInVsIiwiYXJpYS1sYWJlbGxlZGJ5IiwibGkiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsInNwYW4iLCJiciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/result.js\n"));

/***/ })

});