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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n/**\r\n * @host ferdiansyah0611.github.com\r\n * @version 1.0\r\n * @license MIT\r\n */\r\nclass design{\r\n    constructor()\r\n    {\r\n\r\n    }\r\n}\r\nclass L extends design{\r\n\tconstructor()\r\n\t{\r\n        super();\r\n        this.items = function(data){\r\n            return data;\r\n        }\r\n        this.data = [];\r\n        this.obj = {};\r\n        this.dev = {\r\n            headers : function(){\r\n                return true;\r\n            }\r\n        }\r\n        this.doms = {\r\n            class : function(data){\r\n                return document.getElementsByClassName(data);\r\n            },\r\n            id: function(data){\r\n                return document.getElementById(data);\r\n            },\r\n            name : function(data){\r\n                return document.getElementsByName(data);\r\n            },\r\n            query : function(data){\r\n                return document.querySelectorAll(data);\r\n            }\r\n        }\r\n    }\r\n    set set(data){\r\n        return this.data.push(data);\r\n    }\r\n    /**\r\n     * \r\n     */\r\n\trequired()\r\n\t{\r\n        (function(){\r\n            Function.prototype.d = function(){\r\n                return 'sa';\r\n            }\r\n\r\n        })\r\n        return 'ok'\r\n    }\r\n    /**\r\n     * @function init\r\n     * @param {*} data \r\n     */\r\n\tinit(data)\r\n\t{\r\n        if (data.csrf) {\r\n            if (data.csrf.name || data.csrf.token) {\r\n                this.security(data.csrf.name, data.csrf.token);\r\n            }\r\n        }\r\n        if(data.run)\r\n        {\r\n            if(data.run == 'development')\r\n            {\r\n                console.groupCollapsed('Information');\r\n                console.info('You are running Lavosted in development mode.');console.info('Make sure to turn on production mode when deploying for production');\r\n                console.groupEnd();\r\n            }\r\n            else if(data.run == 'production'){\r\n            }\r\n        }\r\n        if (data.responsive) {\r\n            if (data.responsive == true) {\r\n                const meta = document.createElement('meta');\r\n                meta.name = 'viewport';\r\n                meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no';\r\n                document.head.appendChild(meta);\r\n            } else {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    src(type, option){\r\n        const link = function(src)\r\n        {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                var data = document.createElement('link');\r\n                data.rel = 'stylesheet';\r\n                data.type = 'text/css';\r\n                data.href = src;\r\n                document.head.appendChild(data);\r\n            });\r\n        }\r\n        const script = function(src) {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                var data = document.createElement('script');\r\n                data.type = 'text/javascript';\r\n                data.src = src;\r\n                document.body.appendChild(data);\r\n            });\r\n        }\r\n        const meta = function(name, content) {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                var data = document.createElement('meta');\r\n                data.name = name;\r\n                data.content = content;\r\n                document.head.appendChild(data);\r\n            });\r\n        }\r\n        try{\r\n            if(type == 'link') {\r\n                link(option.src);\r\n            }\r\n            if(type == 'script') {\r\n                script(option.src);\r\n            }\r\n            if(type == 'meta') {\r\n                meta(option.name, option.content);\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    headers(data, options)\r\n    {\r\n        const debug_open = function()\r\n        {\r\n            console.group('headers');\r\n            console.log('Name  : ' + data[0]);console.log('Value : ' + data[1]);\r\n            console.groupEnd();\r\n        }\r\n        const debug_close = function()\r\n        {\r\n            console.groupCollapsed('headers');\r\n            console.log('Name  : ' + data[0]);console.log('Value : ' + data[1]);\r\n            console.groupEnd();\r\n        }\r\n        try{\r\n            if(typeof data == 'object') {\r\n                if(data[0] == 'Authorization')\r\n                {\r\n                    this.local(this.stringify({\r\n                        type : 'set',\r\n                        name : 'headers',\r\n                        data : this.stringify({'Authorization' : data[1],'Content-Type' : data[2] })\r\n                    })\r\n                    );\r\n                }\r\n                if(data[0] == 'Content-Type')\r\n                {\r\n\r\n                }\r\n                else if(options == 'debug-open')\r\n                {\r\n                    debug_open();\r\n                }\r\n                else if(options == 'debug-close')\r\n                {\r\n                    debug_close();\r\n                }\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    /**\r\n     * @function api\r\n     * @version 1.0\r\n     * @param {*} data \r\n     */\r\n\tasync api(data, options)\r\n\t{\r\n        var headers = JSON.parse(window.localStorage.getItem('headers'));\r\n        const debug_open = function(data)\r\n        {\r\n            console.group('api');\r\n            console.log(data);\r\n            console.groupEnd();\r\n            return data;\r\n        }\r\n        const debug_close = function(data)\r\n        {\r\n            console.groupCollapsed('api');\r\n            console.log(data);\r\n            console.groupEnd();\r\n            return data;\r\n        }\r\n        /**\r\n         * @function get\r\n         * @version 1.0\r\n         * @param {*} url\r\n         * @returns {json()}\r\n         */\r\n        const get = async function(url, options)\r\n        {\r\n            if(typeof headers == 'object'){\r\n                var auth = window.L.local(JSON.stringify({\r\n                    type : 'get',\r\n                    name : 'headers'\r\n                })\r\n                );\r\n                return await fetch(url, {\r\n                    headers: {\r\n                        Authorization : window.L.parse(auth).Authorization\r\n                    }\r\n                }).then(response => {\r\n                    if(response.status == 200 || response.status < 200){\r\n                        if(typeof response == undefined){\r\n                            throw Error('Undefined to get api');\r\n                        }else{\r\n                            if(options){\r\n                                if(options == 'debug-open'){\r\n                                    response.json().then(data => {\r\n                                        debug_open(data);\r\n                                    });\r\n                                }\r\n                                if(options == 'debug-close'){\r\n                                    response.json().then(data => {\r\n                                        debug_close(data);\r\n                                    });\r\n                                }else{\r\n                                    throw Error('Please check word options in function api');\r\n                                }\r\n                            }else{\r\n                                return response.json();\r\n                            }\r\n                        }\r\n                    }\r\n                    if(response.status == 404){\r\n                        throw Error('Not found');\r\n                    }\r\n                    if(response.status == 403){\r\n                        throw Error('Not allowed');\r\n                    }\r\n                }).catch(e => {\r\n                    throw Error(e);\r\n                });\r\n            }\r\n            else {\r\n                return await fetch(url).then(response => {\r\n                    if(response.status == 200 || response.status < 200){\r\n                        if(typeof response == undefined){\r\n                            throw Error('Undefined to get api');\r\n                        }else{\r\n                            return response.json();\r\n                        }\r\n                    }\r\n                    if(response.status == 404){\r\n                        throw Error('Not found');\r\n                    }\r\n                    if(response.status == 403){\r\n                        throw Error('Not allowed');\r\n                    }\r\n                }).catch(e => {\r\n                    throw Error(e);\r\n                }); \r\n            }\r\n        }\r\n        /**\r\n         * @function post\r\n         * @version 1.0\r\n         * @param {*} url\r\n         * @param {*} data\r\n         * @returns {ServerResponse}\r\n         */\r\n        const post = async function(url, data, options)\r\n        {\r\n            if(typeof headers == 'object'){\r\n                var auth = window.L.local(JSON.stringify({\r\n                    type : 'get',\r\n                    name : 'headers'\r\n                })\r\n                );\r\n                return await fetch(url,{\r\n                    method : 'post',\r\n                    headers: {\r\n                        Authorization : window.L.parse(auth).Authorization\r\n                    }\r\n                }).then(response => {\r\n                    if(response.status == 200 || response.status < 200){\r\n                        if(typeof response == undefined){\r\n                            throw Error('Undefined to get api');\r\n                        }else{\r\n                            return response.json();\r\n                        }\r\n                    }\r\n                    if(response.status == 404){\r\n                        throw Error('Not found');\r\n                    }\r\n                    if(response.status == 403){\r\n                        throw Error('Not allowed');\r\n                    }\r\n                });\r\n            }\r\n            else {\r\n                return await fetch(url,{\r\n                    method : 'post'\r\n                }).then(response => {\r\n                    if(response.status == 200 || response.status < 200){\r\n                        if(typeof response == undefined){\r\n                            throw Error('Undefined to get api');\r\n                        }else{\r\n                            return response.json();\r\n                        }\r\n                    }\r\n                    if(response.status == 404){\r\n                        throw Error('Not found');\r\n                    }\r\n                    if(response.status == 403){\r\n                        throw Error('Not allowed');\r\n                    }\r\n                });\r\n            }\r\n        }\r\n        try{\r\n            var parse = JSON.parse(data);\r\n            var method = parse.method;\r\n            var url = parse.url;\r\n            if(method == 'get'){\r\n                if(options == 'debug-open'){\r\n                    return get(url, 'debug-open');\r\n                }\r\n                if(options == 'debug-close'){\r\n                    return get(url, 'debug-close');\r\n                }else{\r\n                    return get(url);\r\n                }\r\n            }\r\n            if(method == 'post' || method == 'put' || method == 'delete'){\r\n                var posted = document.body.querySelector(parse.data);\r\n                return post(url, posted);\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n\t}\r\n\tvalidation()\r\n\t{\r\n\r\n    }\r\n    local(data)\r\n    {\r\n        try{\r\n            var storage = JSON.parse(data);\r\n            if(storage.type == 'get')\r\n            {\r\n                return window.localStorage.getItem(storage.name);\r\n            }\r\n            else if(storage.type == 'set')\r\n            {\r\n                return window.localStorage.setItem(storage.name, storage.data);\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    session(data)\r\n    {\r\n        try{\r\n            var storage = JSON.parse(data);\r\n            if(storage.type == 'get')\r\n            {\r\n                return window.sessionStorage.getItem(storage.name);\r\n            }\r\n            else if(storage.type == 'set')\r\n            {\r\n                return window.sessionStorage.setItem(storage.name, storage.data);\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n\tsecurity()\r\n\t{\r\n        let form = document.getElementsByClassName('form');\r\n        for (var i = 0; i < document.getElementsByClassName('form').length; i++) {\r\n            var create = document.createElement('input');\r\n            create.type = 'hidden';\r\n            create.value = token;\r\n            create.name = csrf;\r\n            form[i].appendChild(create);\r\n        }\r\n\t}\r\n\thtml(init, data)\r\n\t{\r\n        try{\r\n            var query = document.body.querySelectorAll(init);\r\n            for (var i = 0; i < query.length; i++) {\r\n                var before = query[i].innerHTML;\r\n                query[i].innerHTML = before + data;\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n\t}\r\n    text(init, data)\r\n    {\r\n        try{\r\n            var query = document.body.querySelectorAll(init);\r\n            for (var i = 0; i < query.length; i++) {\r\n                query[i].innerText = data;\r\n            }\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    style(init, data)\r\n    {\r\n        try{\r\n            var style = document.createElement('style');\r\n            style.type = 'text/css';\r\n            style.innerText = data;\r\n            document.head.appendChild(style);\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    event(classes, options)\r\n    {\r\n        const load = function(){\r\n\r\n        }\r\n        const click = function(classes, options){\r\n            return new Promise(function(resolve, reject){\r\n                var events = document.querySelectorAll(classes);\r\n                for (var i = 0; i < events.length; i++) {\r\n                    events[i].addEventListener('click', function(){\r\n                        classes;\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        const submit = function(){\r\n\r\n        }\r\n        try{\r\n\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n\tspa(data)\r\n\t{\r\n        data.forEach(function(val, key){\r\n            console.log(val);\r\n        });\r\n\t}\r\n\tcomponent(init)\r\n\t{\r\n\t\t\r\n    }\r\n    parse(data)\r\n    {\r\n        return JSON.parse(data);\r\n    }\r\n    stringify(data)\r\n    {\r\n        return JSON.stringify(data);\r\n    }\r\n}\r\nwindow.L = new L();\r\nvar Lavosted = new L();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lavosted);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });