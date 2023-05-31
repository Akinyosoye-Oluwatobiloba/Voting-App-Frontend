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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ContractContext */ \"./src/context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst VoteTable = ()=>{\n    _s();\n    const { votes , fetchVotes , error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.ContractContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchVotes();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search-dropdown\",\n                className: \"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white\",\n                children: \"Your Email\"\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"dropdown-button\",\n                \"data-dropdown-toggle\": \"dropdown\",\n                className: \"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600\",\n                type: \"button\",\n                children: [\n                    \"All categories\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"w-4 h-4 ml-1\",\n                        fill: \"currentColor\",\n                        viewBox: \"0 0 20 20\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"dropdown\",\n                className: \"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"py-2 text-sm text-gray-700 dark:text-gray-200\",\n                    \"aria-labelledby\": \"dropdown-button\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Mockups\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Templates\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Design\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\",\n                                children: \"Logos\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\",\n                        id: \"search-dropdown\",\n                        className: \"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500\",\n                        placeholder: \"Search Mockups, Logos, Design Templates...\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                className: \"w-5 h-5\",\n                                fill: \"none\",\n                                stroke: \"currentColor\",\n                                viewBox: \"0 0 24 24\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: 2,\n                                    d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Vote name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Nigeria Election\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"Vote for your President\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                lineNumber: 94,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoteTable, \"WIsZoMN+fmDQ3m/Hjuak2Nl7UiA=\");\n_c = VoteTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoteTable);\nvar _c;\n$RefreshReg$(_c, \"VoteTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdWx0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBQ1E7QUFFN0QsTUFBTUksWUFBWSxJQUFNOztJQUN0QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFQyxNQUFLLEVBQUUsR0FBR04saURBQVVBLENBQUNFLHFFQUFlQTtJQUUvREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSTtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlDLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBa0JGLFdBQVU7MEJBQWlFOzs7Ozs7MEJBRzVHLDhEQUFDRztnQkFDQ0MsSUFBRztnQkFDSEMsd0JBQXFCO2dCQUNyQkwsV0FBVTtnQkFDVk0sTUFBSzs7b0JBRU47b0JBQ2dCO2tDQUNmLDhEQUFDQzt3QkFDQ0MsZUFBWTt3QkFDWlIsV0FBVTt3QkFDVlMsTUFBSzt3QkFDTEMsU0FBUTt3QkFDUkMsT0FBTTtrQ0FFTiw0RUFBQ0M7NEJBQ0NDLFVBQVM7NEJBQ1RDLEdBQUU7NEJBQ0ZDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDaEI7Z0JBQUlLLElBQUc7Z0JBQVdKLFdBQVU7MEJBQzNCLDRFQUFDZ0I7b0JBQUdoQixXQUFVO29CQUFnRGlCLG1CQUFnQjs7c0NBQzVFLDhEQUFDQztzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7OztzQ0FJaEksOERBQUNrQjtzQ0FDQyw0RUFBQ2Y7Z0NBQU9HLE1BQUs7Z0NBQVNOLFdBQVU7MENBQThGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wSSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbUI7d0JBQ0NiLE1BQUs7d0JBQ0xGLElBQUc7d0JBQ0hKLFdBQVU7d0JBQ1ZvQixhQUFZO3dCQUNaQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNsQjt3QkFDQ0csTUFBSzt3QkFDTE4sV0FBVTs7MENBR1YsOERBQUNPO2dDQUNDQyxlQUFZO2dDQUNaUixXQUFVO2dDQUNWUyxNQUFLO2dDQUNMYSxRQUFPO2dDQUNQWixTQUFRO2dDQUNSQyxPQUFNOzBDQUVOLDRFQUFDQztvQ0FBS1csZUFBYztvQ0FBUUMsZ0JBQWU7b0NBQVFDLGFBQWE7b0NBQUdYLEdBQUU7Ozs7Ozs7Ozs7OzBDQUV2RSw4REFBQ1k7Z0NBQUsxQixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzJCO29CQUFNM0IsV0FBVTs7c0NBQ2YsOERBQUM0Qjs0QkFBTTVCLFdBQVU7c0NBQ2YsNEVBQUM2Qjs7a0RBQ0MsOERBQUNDO3dDQUFHQyxPQUFNO3dDQUFNL0IsV0FBVTtrREFBWTs7Ozs7O2tEQUd0Qyw4REFBQzhCO3dDQUFHQyxPQUFNO3dDQUFNL0IsV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzFDLDhEQUFDZ0M7c0NBQ0MsNEVBQUNIOztrREFDQyw4REFBQ0k7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEI7R0FoSE10QztLQUFBQTtBQWtITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVzdWx0LmpzPzRjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRyYWN0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ29udHJhY3RDb250ZXh0JztcblxuY29uc3QgVm90ZVRhYmxlID0gKCkgPT4ge1xuICBjb25zdCB7IHZvdGVzLCBmZXRjaFZvdGVzLCBlcnJvciB9ID0gdXNlQ29udGV4dChDb250cmFjdENvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hWb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2gtZHJvcGRvd25cIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBzci1vbmx5IGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICBZb3VyIEVtYWlsXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cImRyb3Bkb3duLWJ1dHRvblwiXG4gICAgICAgIGRhdGEtZHJvcGRvd24tdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHotMTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB5LTIuNSBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbC1sZyBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgLy8gb25DbGljaz17aGFuZGxlRHJvcGRvd25Ub2dnbGV9XG4gICAgICA+XG4gICAgICAgIEFsbCBjYXRlZ29yaWVze1wiIFwifVxuICAgICAgICA8c3ZnXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTFcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cInotMTAgaGlkZGVuIGJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTEwMCByb3VuZGVkLWxnIHNoYWRvdyB3LTQ0IGRhcms6YmctZ3JheS03MDBcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMFwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duLWJ1dHRvblwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHctZnVsbCBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgTW9ja3Vwc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIFRlbXBsYXRlc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIExvZ29zXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBpZD1cInNlYXJjaC1kcm9wZG93blwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcC0yLjUgdy1mdWxsIHotMjAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1yLWxnIGJvcmRlci1sLWdyYXktNTAgYm9yZGVyLWwtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItbC1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggTW9ja3VwcywgTG9nb3MsIERlc2lnbiBUZW1wbGF0ZXMuLi5cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHAtMi41IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLXItbGcgYm9yZGVyIGJvcmRlci1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiXG4gICAgICAgICAgLy8gb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+U2VhcmNoPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICBcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgVm90ZSBuYW1lXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+TmlnZXJpYSBFbGVjdGlvbjwvdGQ+XG4gICAgICAgICAgICA8dGQ+Vm90ZSBmb3IgeW91ciBQcmVzaWRlbnQ8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVm90ZVRhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNvbnRyYWN0Q29udGV4dCIsIlZvdGVUYWJsZSIsInZvdGVzIiwiZmV0Y2hWb3RlcyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwiaWQiLCJkYXRhLWRyb3Bkb3duLXRvZ2dsZSIsInR5cGUiLCJzdmciLCJhcmlhLWhpZGRlbiIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJ1bCIsImFyaWEtbGFiZWxsZWRieSIsImxpIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJzcGFuIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/result.js\n"));

/***/ })

});