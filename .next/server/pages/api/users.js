"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ users)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nconst { getBasiqAuthorizationHeader  } = __webpack_require__(/*! ../../serverAuthentication */ \"(api)/./serverAuthentication.js\");\nasync function users(req, res) {\n    try {\n        const { data  } = await axios.get(`https://au-api.basiq.io/users`, {\n            headers: {\n                Authorization: await getBasiqAuthorizationHeader(),\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        res.status(200).json(data.data);\n    } catch (error) {\n        res.status(400).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzlCLE1BQU0sRUFBRUMsMkJBQTJCLEdBQUUsR0FBR0QsbUJBQU8sQ0FBQyxtRUFBNEIsQ0FBQztBQUU5RCxlQUFlRSxLQUFLLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHLE1BQU1OLEtBQUssQ0FBQ08sR0FBRyxDQUM5QixDQUFDLDZCQUE2QixDQUFDLEVBQy9CO1lBQ0VDLE9BQU8sRUFBRTtnQkFDUEMsYUFBYSxFQUFFLE1BQU1QLDJCQUEyQixFQUFFO2dCQUNsRFEsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztTQUNGLENBQ0Y7UUFDREwsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ04sSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztLQUNqQyxDQUFDLE9BQU9PLEtBQUssRUFBRTtRQUNkUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXZhbGlkYXRpb24vLi9wYWdlcy9hcGkvdXNlcnMuanM/NDlmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCB7IGdldEJhc2lxQXV0aG9yaXphdGlvbkhlYWRlciB9ID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyQXV0aGVudGljYXRpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXNlcnMocmVxLCByZXMpIHtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXUtYXBpLmJhc2lxLmlvL3VzZXJzYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGF3YWl0IGdldEJhc2lxQXV0aG9yaXphdGlvbkhlYWRlcigpLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImdldEJhc2lxQXV0aG9yaXphdGlvbkhlYWRlciIsInVzZXJzIiwicmVxIiwicmVzIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

/***/ }),

/***/ "(api)/./serverAuthentication.js":
/*!*********************************!*\
  !*** ./serverAuthentication.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBasiqAuthorizationHeader\": () => (/* binding */ getBasiqAuthorizationHeader),\n/* harmony export */   \"getNewClientToken\": () => (/* binding */ getNewClientToken)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nconst qs = __webpack_require__(/*! qs */ \"qs\");\n/**\n * The Basiq API authentication process is fairly straight forward, we simply exchange our API key for a token which has an expiry of 60 minutes\n * Our token will be passed as the authorization header to requests made to the Basiq API, which you can find in `pages/api`\n *\n * IMPORTANT: You do not want to request a new token on every request!\n * In this file we keep the latest server token in memory and only request a new token when it is expired\n *\n * https://api.basiq.io/reference/authentication\n * */ const REFRESH_INTERVAL = 1000 * 60 * 30; // 30 minutes\nlet serverToken = undefined;\nlet serverTokenRefreshDate = 0;\nasync function getBasiqAuthorizationHeader() {\n    const token = await getServerToken();\n    return `Bearer ${token}`;\n}\nasync function getServerToken() {\n    if (!serverToken || Date.now() - serverTokenRefreshDate > REFRESH_INTERVAL) {\n        // If we don't have a server token in memory, or the token has expired, fetch a new one\n        await updateServerToken();\n    }\n    return serverToken;\n}\nasync function updateServerToken() {\n    serverToken = await getNewServerToken();\n    serverTokenRefreshDate = Date.now();\n}\nasync function getNewServerToken() {\n    const { data  } = await axios.post(\"https://au-api.basiq.io/token\", qs.stringify({\n        scope: \"SERVER_ACCESS\"\n    }), {\n        headers: {\n            Authorization: `Basic ${process.env.BASIQ_API_KEY}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\",\n            \"basiq-version\": \"3.0\"\n        }\n    });\n    return data.access_token;\n}\nasync function getNewClientToken(userId) {\n    const { data  } = await axios.post(\"https://au-api.basiq.io/token\", qs.stringify({\n        scope: \"CLIENT_ACCESS\",\n        userId\n    }), {\n        headers: {\n            Authorization: `Basic ${process.env.BASIQ_API_KEY}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\",\n            \"basiq-version\": \"3.0\"\n        }\n    });\n    return data.access_token;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXJBdXRoZW50aWNhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzlCLE1BQU1DLEVBQUUsR0FBR0QsbUJBQU8sQ0FBQyxjQUFJLENBQUM7QUFFeEI7Ozs7Ozs7O0tBUUssQ0FFTCxNQUFNRSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxhQUFhO0FBRXRELElBQUlDLFdBQVcsR0FBR0MsU0FBUztBQUMzQixJQUFJQyxzQkFBc0IsR0FBRyxDQUFDO0FBRXZCLGVBQWVDLDJCQUEyQixHQUFHO0lBQ2xELE1BQU1DLEtBQUssR0FBRyxNQUFNQyxjQUFjLEVBQUU7SUFDcEMsT0FBTyxDQUFDLE9BQU8sRUFBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUMxQjtBQUVELGVBQWVDLGNBQWMsR0FBRztJQUM5QixJQUFJLENBQUNMLFdBQVcsSUFBSU0sSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBR0wsc0JBQXNCLEdBQUdILGdCQUFnQixFQUFFO1FBQzFFLHVGQUF1RjtRQUN2RixNQUFNUyxpQkFBaUIsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBT1IsV0FBVyxDQUFDO0NBQ3BCO0FBRUQsZUFBZVEsaUJBQWlCLEdBQUc7SUFDakNSLFdBQVcsR0FBRyxNQUFNUyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDUCxzQkFBc0IsR0FBR0ksSUFBSSxDQUFDQyxHQUFHLEVBQUUsQ0FBQztDQUNyQztBQUVELGVBQWVFLGlCQUFpQixHQUFHO0lBQ2pDLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTWQsS0FBSyxDQUFDZSxJQUFJLENBQUMsK0JBQStCLEVBQUViLEVBQUUsQ0FBQ2MsU0FBUyxDQUFDO1FBQUVDLEtBQUssRUFBRSxlQUFlO0tBQUUsQ0FBQyxFQUFFO1FBQzNHQyxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDLENBQUM7WUFDbkQsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxlQUFlLEVBQUUsS0FBSztTQUN2QjtLQUNGLENBQUM7SUFDRixPQUFPUixJQUFJLENBQUNTLFlBQVksQ0FBQztDQUMxQjtBQUVNLGVBQWVDLGlCQUFpQixDQUFDQyxNQUFNLEVBQUU7SUFDOUMsTUFBTSxFQUFFWCxJQUFJLEdBQUUsR0FBRyxNQUFNZCxLQUFLLENBQUNlLElBQUksQ0FBQywrQkFBK0IsRUFBRWIsRUFBRSxDQUFDYyxTQUFTLENBQUM7UUFBRUMsS0FBSyxFQUFFLGVBQWU7UUFBRVEsTUFBTTtLQUFFLENBQUMsRUFBRTtRQUNuSFAsT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ELGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsZUFBZSxFQUFFLEtBQUs7U0FDdkI7S0FDRixDQUFDO0lBQ0YsT0FBT1IsSUFBSSxDQUFDUyxZQUFZLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXZhbGlkYXRpb24vLi9zZXJ2ZXJBdXRoZW50aWNhdGlvbi5qcz81NDI3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcblxuLyoqXG4gKiBUaGUgQmFzaXEgQVBJIGF1dGhlbnRpY2F0aW9uIHByb2Nlc3MgaXMgZmFpcmx5IHN0cmFpZ2h0IGZvcndhcmQsIHdlIHNpbXBseSBleGNoYW5nZSBvdXIgQVBJIGtleSBmb3IgYSB0b2tlbiB3aGljaCBoYXMgYW4gZXhwaXJ5IG9mIDYwIG1pbnV0ZXNcbiAqIE91ciB0b2tlbiB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXIgdG8gcmVxdWVzdHMgbWFkZSB0byB0aGUgQmFzaXEgQVBJLCB3aGljaCB5b3UgY2FuIGZpbmQgaW4gYHBhZ2VzL2FwaWBcbiAqXG4gKiBJTVBPUlRBTlQ6IFlvdSBkbyBub3Qgd2FudCB0byByZXF1ZXN0IGEgbmV3IHRva2VuIG9uIGV2ZXJ5IHJlcXVlc3QhXG4gKiBJbiB0aGlzIGZpbGUgd2Uga2VlcCB0aGUgbGF0ZXN0IHNlcnZlciB0b2tlbiBpbiBtZW1vcnkgYW5kIG9ubHkgcmVxdWVzdCBhIG5ldyB0b2tlbiB3aGVuIGl0IGlzIGV4cGlyZWRcbiAqXG4gKiBodHRwczovL2FwaS5iYXNpcS5pby9yZWZlcmVuY2UvYXV0aGVudGljYXRpb25cbiAqICovXG5cbmNvbnN0IFJFRlJFU0hfSU5URVJWQUwgPSAxMDAwICogNjAgKiAzMDsgLy8gMzAgbWludXRlc1xuXG5sZXQgc2VydmVyVG9rZW4gPSB1bmRlZmluZWQ7XG5sZXQgc2VydmVyVG9rZW5SZWZyZXNoRGF0ZSA9IDA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCYXNpcUF1dGhvcml6YXRpb25IZWFkZXIoKSB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0U2VydmVyVG9rZW4oKTtcbiAgcmV0dXJuIGBCZWFyZXIgJHt0b2tlbn1gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJUb2tlbigpIHtcbiAgaWYgKCFzZXJ2ZXJUb2tlbiB8fCBEYXRlLm5vdygpIC0gc2VydmVyVG9rZW5SZWZyZXNoRGF0ZSA+IFJFRlJFU0hfSU5URVJWQUwpIHtcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgc2VydmVyIHRva2VuIGluIG1lbW9yeSwgb3IgdGhlIHRva2VuIGhhcyBleHBpcmVkLCBmZXRjaCBhIG5ldyBvbmVcbiAgICBhd2FpdCB1cGRhdGVTZXJ2ZXJUb2tlbigpO1xuICB9XG4gIHJldHVybiBzZXJ2ZXJUb2tlbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2VydmVyVG9rZW4oKSB7XG4gIHNlcnZlclRva2VuID0gYXdhaXQgZ2V0TmV3U2VydmVyVG9rZW4oKTtcbiAgc2VydmVyVG9rZW5SZWZyZXNoRGF0ZSA9IERhdGUubm93KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE5ld1NlcnZlclRva2VuKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXUtYXBpLmJhc2lxLmlvL3Rva2VuJywgcXMuc3RyaW5naWZ5KHsgc2NvcGU6ICdTRVJWRVJfQUNDRVNTJyB9KSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Byb2Nlc3MuZW52LkJBU0lRX0FQSV9LRVl9YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICdiYXNpcS12ZXJzaW9uJzogJzMuMCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBkYXRhLmFjY2Vzc190b2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld0NsaWVudFRva2VuKHVzZXJJZCkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXUtYXBpLmJhc2lxLmlvL3Rva2VuJywgcXMuc3RyaW5naWZ5KHsgc2NvcGU6ICdDTElFTlRfQUNDRVNTJywgdXNlcklkIH0pLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7cHJvY2Vzcy5lbnYuQkFTSVFfQVBJX0tFWX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgJ2Jhc2lxLXZlcnNpb24nOiAnMy4wJyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGRhdGEuYWNjZXNzX3Rva2VuO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInFzIiwiUkVGUkVTSF9JTlRFUlZBTCIsInNlcnZlclRva2VuIiwidW5kZWZpbmVkIiwic2VydmVyVG9rZW5SZWZyZXNoRGF0ZSIsImdldEJhc2lxQXV0aG9yaXphdGlvbkhlYWRlciIsInRva2VuIiwiZ2V0U2VydmVyVG9rZW4iLCJEYXRlIiwibm93IiwidXBkYXRlU2VydmVyVG9rZW4iLCJnZXROZXdTZXJ2ZXJUb2tlbiIsImRhdGEiLCJwb3N0Iiwic3RyaW5naWZ5Iiwic2NvcGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJCQVNJUV9BUElfS0VZIiwiYWNjZXNzX3Rva2VuIiwiZ2V0TmV3Q2xpZW50VG9rZW4iLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./serverAuthentication.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();