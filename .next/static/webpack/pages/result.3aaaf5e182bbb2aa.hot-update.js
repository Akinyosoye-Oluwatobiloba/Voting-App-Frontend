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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ContractContext */ \"./src/context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst VoteTable = ()=>{\n    _s();\n    const { votes , fetchVotes , error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.ContractContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchVotes();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, undefined);\n    }\n    return(//  <div className=\"flex\">\n    //         <label htmlFor=\"search-dropdown\" className=\"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white\">\n    //           Your Email\n    //         </label>\n    //         <button\n    //           id=\"dropdown-button\"\n    //           data-dropdown-toggle=\"dropdown\"\n    //           className=\"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600\"\n    //           type=\"button\"\n    //           // onClick={handleDropdownToggle}\n    //         >\n    //           All categories{\" \"}\n    //           <svg\n    //             aria-hidden=\"true\"\n    //             className=\"w-4 h-4 ml-1\"\n    //             fill=\"currentColor\"\n    //             viewBox=\"0 0 20 20\"\n    //             xmlns=\"http://www.w3.org/2000/svg\"\n    //           >\n    //             <path\n    //               fillRule=\"evenodd\"\n    //               d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\"\n    //               clipRule=\"evenodd\"\n    //             ></path>\n    //           </svg>\n    //         </button>\n    //         <div id=\"dropdown\" className=\"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700\">\n    //           <ul className=\"py-2 text-sm text-gray-700 dark:text-gray-200\" aria-labelledby=\"dropdown-button\">\n    //             <li>\n    //               <button type=\"button\" className=\"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">\n    //                 Mockups\n    //               </button>\n    //             </li>\n    //             <li>\n    //               <button type=\"button\" className=\"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">\n    //                 Templates\n    //               </button>\n    //             </li>\n    //             <li>\n    //               <button type=\"button\" className=\"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">\n    //                 Design\n    //               </button>\n    //             </li>\n    //             <li>\n    //               <button type=\"button\" className=\"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">\n    //                 Logos\n    //               </button>\n    //             </li>\n    //           </ul>\n    //         </div>\n    //         <div className=\"relative w-full\">\n    //           <input\n    //             type=\"search\"\n    //             id=\"search-dropdown\"\n    //             className=\"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500\"\n    //             placeholder=\"Search Mockups, Logos, Design Templates...\"\n    //             required\n    //           />\n    //           <button\n    //             type=\"submit\"\n    //             className=\"absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\"\n    //             // onClick={handleSubmit}\n    //           >\n    //             <svg\n    //               aria-hidden=\"true\"\n    //               className=\"w-5 h-5\"\n    //               fill=\"none\"\n    //               stroke=\"currentColor\"\n    //               viewBox=\"0 0 24 24\"\n    //               xmlns=\"http://www.w3.org/2000/svg\"\n    //             >\n    //               <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"></path>\n    //             </svg>\n    //             <span className=\"sr-only\">Search</span>\n    //           </button>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Vote name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Candidates and Vote Counts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Nigeria Election\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Vote In your President\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 127,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Peter Obi: 1200\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 38\n                                            }, undefined),\n                                            \"Bola Tinubu: 1280\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                                lineNumber: 136,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            \"Atiku Abubakar: 978\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abc/Documents/votingApp/client/src/pages/result.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined));\n};\n_s(VoteTable, \"WIsZoMN+fmDQ3m/Hjuak2Nl7UiA=\");\n_c = VoteTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoteTable);\nvar _c;\n$RefreshReg$(_c, \"VoteTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3Jlc3VsdC5qcz80Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250cmFjdENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dCc7XG5cbmNvbnN0IFZvdGVUYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgeyB2b3RlcywgZmV0Y2hWb3RlcywgZXJyb3IgfSA9IHVzZUNvbnRleHQoQ29udHJhY3RDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVm90ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgXG4vLyAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4vLyAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWRyb3Bkb3duXCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc3Itb25seSBkYXJrOnRleHQtd2hpdGVcIj5cbi8vICAgICAgICAgICBZb3VyIEVtYWlsXG4vLyAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBpZD1cImRyb3Bkb3duLWJ1dHRvblwiXG4vLyAgICAgICAgICAgZGF0YS1kcm9wZG93bi10b2dnbGU9XCJkcm9wZG93blwiXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB6LTEwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweS0yLjUgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwtbGcgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwXCJcbi8vICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbi8vICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVEcm9wZG93blRvZ2dsZX1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIEFsbCBjYXRlZ29yaWVze1wiIFwifVxuLy8gICAgICAgICAgIDxzdmdcbi8vICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTFcIlxuLy8gICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4vLyAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbi8vICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxwYXRoXG4vLyAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4vLyAgICAgICAgICAgICAgIGQ9XCJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHpcIlxuLy8gICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuLy8gICAgICAgICAgICAgPjwvcGF0aD5cbi8vICAgICAgICAgICA8L3N2Zz5cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cInotMTAgaGlkZGVuIGJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTEwMCByb3VuZGVkLWxnIHNoYWRvdyB3LTQ0IGRhcms6YmctZ3JheS03MDBcIj5cbi8vICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMjAwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd24tYnV0dG9uXCI+XG4vLyAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHctZnVsbCBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgICAgICBNb2NrdXBzXG4vLyAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPlxuLy8gICAgICAgICAgICAgICAgIFRlbXBsYXRlc1xuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHctZnVsbCBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgICAgICBEZXNpZ25cbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4vLyAgICAgICAgICAgICAgICAgTG9nb3Ncbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuLy8gICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4vLyAgICAgICAgICAgICBpZD1cInNlYXJjaC1kcm9wZG93blwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBwLTIuNSB3LWZ1bGwgei0yMCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLXItbGcgYm9yZGVyLWwtZ3JheS01MCBib3JkZXItbC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1sLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbi8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE1vY2t1cHMsIExvZ29zLCBEZXNpZ24gVGVtcGxhdGVzLi4uXCJcbi8vICAgICAgICAgICAgIHJlcXVpcmVkXG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcC0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtci1sZyBib3JkZXIgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCJcbi8vICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8c3ZnXG4vLyAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuLy8gICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4vLyAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4vLyAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuLy8gICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbi8vICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiPjwvcGF0aD5cbi8vICAgICAgICAgICAgIDwvc3ZnPlxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlNlYXJjaDwvc3Bhbj5cbi8vICAgICAgICAgICA8L2J1dHRvbj5cblxuLy8gPC9kaXY+XG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBWb3RlIG5hbWVcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICB7LyogPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgIEltYWdlXG4gICAgICAgICAgICA8L3RoPiAqL31cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBDYW5kaWRhdGVzIGFuZCBWb3RlIENvdW50c1xuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIHsvKiA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgU3RhcnQgVGltZVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICBFbmQgVGltZVxuICAgICAgICAgICAgPC90aD4gKi99XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHsvKiB7dm90ZXMubWFwKCh2b3RlLCBpbmRleCkgPT4gKCAqL31cbiAgICAgICAgICAgIDx0ciBcbiAgICAgICAgICAgIC8vIGtleT17aW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZD5OaWdlcmlhIEVsZWN0aW9uPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlZvdGUgSW4geW91ciBQcmVzaWRlbnQ8L3RkPlxuICAgICAgICAgICAgICB7LyogPHRkPnt2b3RlLmltYWdlfTwvdGQ+ICovfVxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpID5cbiAgICAgICAgICAgICAgICAgIHsvKiB7dm90ZS5jYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9OiB7Y2FuZGlkYXRlLnZvdGVDb3VudH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgUGV0ZXIgT2JpOiAxMjAwPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICBCb2xhIFRpbnVidTogMTI4MDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgQXRpa3UgQWJ1YmFrYXI6IDk3OFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogPHRkPntuZXcgRGF0ZSh2b3RlLnN0YXJ0VGltZSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD4gKi99XG4gICAgICAgICAgICAgIHsvKiA8dGQ+e25ldyBEYXRlKHZvdGUuZW5kVGltZSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD4gKi99XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIFxuICA8L2Rpdj5cbiAgLy8gPC9kaXY+XG5cblxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb3RlVGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ29udHJhY3RDb250ZXh0IiwiVm90ZVRhYmxlIiwidm90ZXMiLCJmZXRjaFZvdGVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJ0ZCIsInVsIiwibGkiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/result.js\n"));

/***/ })

});