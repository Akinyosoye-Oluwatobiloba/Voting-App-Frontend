"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/ContractContext.jsx":
/*!*****************************************!*\
  !*** ./src/context/ContractContext.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContractContext\": function() { return /* binding */ ContractContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ContractContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContractProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [voteIndex, setVoteIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [candidateNames, setCandidateNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedCandidate, setSelectedCandidate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [votes, setVotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchContract = (signerOrProvider)=>new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signerOrProvider);\n    //check if wallet is connected to the blockchain\n    const checkIfWalletIsConnected = async ()=>{\n        try {\n            if (!window.ethereum) return alert(\"please install Metamask on your browser, preferably use Chrome browser\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log(accounts[0]);\n            } else {\n                setError(error.message);\n                console.log(\"No accounts found\");\n            }\n        } catch (error) {\n            setError(error.message);\n            console.log(error);\n            console.log(\"No ethereum Object\");\n        }\n    };\n    //connect wallet function\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return alert(\"Please install MetaMask on your browser, preferably use Chrome browser\"); //check if there's no etherium object\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n            console.log(accounts);\n        } catch (error) {\n            setError(error.message);\n            console.log(error);\n            console.log(\"No ethereum Object.\");\n        }\n    };\n    const connectToSmartContract = async ()=>{\n        try {\n            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n            const connection = await web3Modal.connect();\n            console.log(connection);\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n            const signer = provider.getSigner();\n            const contract = fetchContract(signer);\n            console.log(contract);\n            return contract;\n            setContract(contract);\n        } catch (error) {\n            setError(error.message);\n            console.log(error);\n            return null;\n        }\n    };\n    // create vote\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const candidateNamesArray = candidateNames.split(\",\");\n        try {\n            if (!voteIndex || !title || !description || !image || !candidateNamesArray || !duration) return console.log(\"Input data is missing\");\n            const contract = await connectToSmartContract();\n            if (contract) {\n                await contract.createVote(Number(voteIndex), title, description, image, candidateNamesArray, Number(duration));\n                console.log(\"Voting Successful\");\n            } else {\n                setError(\"Failed to connect to the smart contract.\");\n                console.log(\"Failed to connect to the smart contract.\");\n            }\n        // Voting successful\n        } catch (error) {\n            setError(error.message.toString());\n            console.log(error);\n        }\n    };\n    //csas\n    const Submit = async (event)=>{\n        event.preventDefault();\n        try {\n            if (!voteIndex || !selectedCandidate) return console.log(\"Input data is missing\");\n            const contract = await connectToSmartContract();\n            if (contract) {\n                await contract.castVote(Number(voteIndex), selectedCandidate);\n                console.log(\"Vote cast Successful\");\n            } else {\n                setError(\"Failed to Cast Vote.\");\n                console.log(\"Failed to Cast Vote.\");\n            }\n        } catch (error) {\n            setError(error.message);\n            console.log(error);\n        }\n    };\n    const fetchVotes = async ()=>{\n        try {\n            const contract = await connectToSmartContract();\n            const voteCount = await contract.voteCount();\n            const votes = [];\n            for(let i = 1; i <= voteCount; i++){\n                const vote = await contract.getVote(i);\n                // Extract the vote count for each candidate\n                const voteCounts = vote[6];\n                // Create an array of candidates with their respective vote counts\n                const candidatesWithVoteCount = vote[3].map((candidate, index)=>({\n                        ...candidate,\n                        voteCount: voteCounts[index]\n                    }));\n                // Create an updated vote object with the modified candidates array\n                const updatedVote = {\n                    title: vote[0],\n                    description: vote[1],\n                    image: vote[2],\n                    candidates: candidatesWithVoteCount,\n                    startTime: vote[4],\n                    endTime: vote[5]\n                };\n                votes.push(updatedVote);\n            }\n            setVotes(votes);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // useEffect(()=>{\n    //     connectToSmartContract();\n    //     fetchVotes();\n    // },[]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContractContext.Provider, {\n        value: {\n            Submit,\n            votes,\n            error,\n            fetchVotes,\n            setError,\n            description,\n            image,\n            setDescription,\n            setImage,\n            selectedCandidate,\n            setSelectedCandidate,\n            connectWallet,\n            currentAccount,\n            handleSubmit,\n            voteIndex,\n            setVoteIndex,\n            title,\n            setTitle,\n            candidateNames,\n            setCandidateNames,\n            duration,\n            setDuration\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/abc/Documents/votingApp/client/src/context/ContractContext.jsx\",\n        lineNumber: 176,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ContractProvider, \"LDHS6eEbuqkaaOOZIi4vElz71IE=\");\n_c = ContractProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractProvider);\nvar _c;\n$RefreshReg$(_c, \"ContractProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbkIsZ0JBQWdCeUUsUUFBUTtRQUFDQyxPQUFTO1lBQUNsQjtZQUFPakM7WUFBTUo7WUFBTXVDO1lBQVd0QztZQUFTYjtZQUFZRTtZQUFNRDtZQUFlRTtZQUFTVztZQUFtQkM7WUFBcUJpQjtZQUFjdEI7WUFBZStCO1lBQWE3QztZQUFVQztZQUFhQztZQUFNQztZQUFTSztZQUFlQztZQUFrQkM7WUFBU0M7UUFBVztrQkFFalNaOzs7Ozs7QUFJVDtHQTNLTUQ7S0FBQUE7QUE0S04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9Db250cmFjdENvbnRleHQuanN4Pzg0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgIHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcbmltcG9ydCAge1dlYjNQcm92aWRlcn0gIGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250cmFjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IENvbnRyYWN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBbdm90ZUluZGV4LCBzZXRWb3RlSW5kZXhdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjYW5kaWRhdGVOYW1lcywgc2V0Q2FuZGlkYXRlTmFtZXNdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzZWxlY3RlZENhbmRpZGF0ZSwgc2V0U2VsZWN0ZWRDYW5kaWRhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIFxuICAgIGNvbnN0IFt2b3Rlcywgc2V0Vm90ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgZmV0Y2hDb250cmFjdCA9IChzaWduZXJPclByb3ZpZGVyKSA9PlxuICAgIG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgc2lnbmVyT3JQcm92aWRlcik7XG4gICAgXG4gICAgLy9jaGVjayBpZiB3YWxsZXQgaXMgY29ubmVjdGVkIHRvIHRoZSBibG9ja2NoYWluXG5cbiAgICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBhbGVydChcInBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIG9uIHlvdXIgYnJvd3NlciwgcHJlZmVyYWJseSB1c2UgQ2hyb21lIGJyb3dzZXJcIik7ICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjY291bnRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnRzIGZvdW5kXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBldGhlcmV1bSBPYmplY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vY29ubmVjdCB3YWxsZXQgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBpZighd2luZG93LmV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBvbiB5b3VyIGJyb3dzZXIsIHByZWZlcmFibHkgdXNlIENocm9tZSBicm93c2VyXCIpOy8vY2hlY2sgaWYgdGhlcmUncyBubyBldGhlcml1bSBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBldGhlcmV1bSBPYmplY3QuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbm5lY3RUb1NtYXJ0Q29udHJhY3Q9IGFzeW5jKCkgPT57XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lciAoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3Qoc2lnbmVyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyYWN0O1xuICAgICAgICAgICAgICAgIHNldENvbnRyYWN0KGNvbnRyYWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgLy8gY3JlYXRlIHZvdGVcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7ICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZU5hbWVzQXJyYXkgPSBjYW5kaWRhdGVOYW1lcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZvdGVJbmRleCB8fCAhdGl0bGV8fCFkZXNjcmlwdGlvbnx8IWltYWdlIHx8ICFjYW5kaWRhdGVOYW1lc0FycmF5IHx8ICFkdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLiBsb2coXCJJbnB1dCBkYXRhIGlzIG1pc3NpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdFRvU21hcnRDb250cmFjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb250cmFjdC5jcmVhdGVWb3RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih2b3RlSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZU5hbWVzQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWb3RpbmcgU3VjY2Vzc2Z1bFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCB0byB0aGUgc21hcnQgY29udHJhY3QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gdGhlIHNtYXJ0IGNvbnRyYWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gVm90aW5nIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jc2FzXG4gICAgICAgIGNvbnN0IFN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBpZiAoIXZvdGVJbmRleCB8fCAhc2VsZWN0ZWRDYW5kaWRhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuIGxvZyhcIklucHV0IGRhdGEgaXMgbWlzc2luZ1wiKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RUb1NtYXJ0Q29udHJhY3QoKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY29udHJhY3QuY2FzdFZvdGUoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih2b3RlSW5kZXgpLCBzZWxlY3RlZENhbmRpZGF0ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVm90ZSBjYXN0IFN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBDYXN0IFZvdGUuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIENhc3QgVm90ZS5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICBjb25zdCBmZXRjaFZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0VG9TbWFydENvbnRyYWN0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IHZvdGVDb3VudCA9IGF3YWl0IGNvbnRyYWN0LnZvdGVDb3VudCgpO1xuICAgICAgICAgICAgICBjb25zdCB2b3RlcyA9IFtdO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB2b3RlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZvdGUgPSBhd2FpdCBjb250cmFjdC5nZXRWb3RlKGkpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHZvdGUgY291bnQgZm9yIGVhY2ggY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3Qgdm90ZUNvdW50cyA9IHZvdGVbNl07XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGNhbmRpZGF0ZXMgd2l0aCB0aGVpciByZXNwZWN0aXZlIHZvdGUgY291bnRzXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc1dpdGhWb3RlQ291bnQgPSB2b3RlWzNdLm1hcCgoY2FuZGlkYXRlLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgICAgICAgICAgICAgIHZvdGVDb3VudDogdm90ZUNvdW50c1tpbmRleF0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbiB1cGRhdGVkIHZvdGUgb2JqZWN0IHdpdGggdGhlIG1vZGlmaWVkIGNhbmRpZGF0ZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVm90ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB2b3RlWzBdLFxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHZvdGVbMV0sXG4gICAgICAgICAgICAgICAgICBpbWFnZTogdm90ZVsyXSxcbiAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZXM6IGNhbmRpZGF0ZXNXaXRoVm90ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB2b3RlWzRdLFxuICAgICAgICAgICAgICAgICAgZW5kVGltZTogdm90ZVs1XSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZvdGVzLnB1c2godXBkYXRlZFZvdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldFZvdGVzKHZvdGVzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgY29ubmVjdFRvU21hcnRDb250cmFjdCgpO1xuICAgIC8vICAgICBmZXRjaFZvdGVzKCk7XG4gICAgLy8gfSxbXSk7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgPENvbnRyYWN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7U3VibWl0LHZvdGVzLGVycm9yLGZldGNoVm90ZXMsc2V0RXJyb3IsZGVzY3JpcHRpb24saW1hZ2Usc2V0RGVzY3JpcHRpb24sc2V0SW1hZ2Usc2VsZWN0ZWRDYW5kaWRhdGUsIHNldFNlbGVjdGVkQ2FuZGlkYXRlLGNvbm5lY3RXYWxsZXQsY3VycmVudEFjY291bnQsaGFuZGxlU3VibWl0LHZvdGVJbmRleCxzZXRWb3RlSW5kZXgsdGl0bGUsc2V0VGl0bGUsY2FuZGlkYXRlTmFtZXMsc2V0Q2FuZGlkYXRlTmFtZXMsZHVyYXRpb24sc2V0RHVyYXRpb259fT5cbiAgICAgICAgey8qIHtlcnJvciAmJiA8ZGl2PkVycm9yOiB7SlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZSl9PC9kaXY+fSAqL31cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udHJhY3RDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29udHJhY3RQcm92aWRlcjsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJXZWIzTW9kYWwiLCJXZWIzUHJvdmlkZXIiLCJEZXNjcmlwdGlvbiIsIkNvbnRyYWN0Q29udGV4dCIsIkNvbnRyYWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInZvdGVJbmRleCIsInNldFZvdGVJbmRleCIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImNhbmRpZGF0ZU5hbWVzIiwic2V0Q2FuZGlkYXRlTmFtZXMiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRDYW5kaWRhdGUiLCJzZXRTZWxlY3RlZENhbmRpZGF0ZSIsInZvdGVzIiwic2V0Vm90ZXMiLCJmZXRjaENvbnRyYWN0Iiwic2lnbmVyT3JQcm92aWRlciIsIkNvbnRyYWN0IiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY29ubmVjdFdhbGxldCIsImNvbm5lY3RUb1NtYXJ0Q29udHJhY3QiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmRpZGF0ZU5hbWVzQXJyYXkiLCJzcGxpdCIsImNyZWF0ZVZvdGUiLCJOdW1iZXIiLCJ0b1N0cmluZyIsIlN1Ym1pdCIsImNhc3RWb3RlIiwiZmV0Y2hWb3RlcyIsInZvdGVDb3VudCIsImkiLCJ2b3RlIiwiZ2V0Vm90ZSIsInZvdGVDb3VudHMiLCJjYW5kaWRhdGVzV2l0aFZvdGVDb3VudCIsIm1hcCIsImNhbmRpZGF0ZSIsImluZGV4IiwidXBkYXRlZFZvdGUiLCJjYW5kaWRhdGVzIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ContractContext.jsx\n"));

/***/ })

});