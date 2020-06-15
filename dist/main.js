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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return L; });\n\r\n/**\r\n * @host ferdiansyah0611.github.com\r\n * @version 1.1-beta\r\n * @license MIT\r\n */\r\nvar active = {};\r\nactive.resources_css = [];\r\nactive.resources_js = [];\r\nactive.resources_meta = [];\r\nactive.data_headers = [];\r\n\r\nclass Route\r\n{\r\n    constructor(Router = []){\r\n        this.list = Router;\r\n    }\r\n    router(){\r\n\r\n    }\r\n}\r\n\r\n\r\nclass L extends Route{\r\n\tconstructor(router = [], element)\r\n\t{\r\n        super(router);\r\n        /*store data*/\r\n        this.data = [];\r\n        /**\r\n        * @function init\r\n        * @version 1.0-beta\r\n        * @param {*} data \r\n        **/\r\n        this.init = function(data){\r\n            try{\r\n                if(data.csrf !== undefined) {\r\n                    if (data.csrf.name || data.csrf.token) {\r\n                        this.security(data.csrf.name, data.csrf.token);\r\n                    }\r\n                }\r\n                if(data.run !== undefined) {\r\n                    if(data.run == 'development'){\r\n                        console.groupCollapsed('Information');\r\n                        console.info('You are running Lavosted in development mode.');\r\n                        console.info('Make sure to turn on production mode when deploying for production');console.groupEnd();}\r\n                    else if(data.run == 'production'){}\r\n                }\r\n                if(data.responsive !== undefined) {\r\n                    this.src({name : 'viewport', content : 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no'}).meta();\r\n                }\r\n                if(data.headers !== undefined) {\r\n                    active.data_headers.push(data.headers.Authorization);\r\n                }\r\n            }catch(e){\r\n                throw Error(e.stack);\r\n            }\r\n        }\r\n    }\r\n    url(){\r\n        let app = {\r\n            on : window.location.href,\r\n            base : window.location.origin,\r\n            reload : function(){\r\n                return window.location.reload();\r\n            },\r\n            replace : function(){\r\n                return window.location.replace()\r\n            }\r\n        };\r\n        return Object.create(app);\r\n    }\r\n    /**\r\n    * @function store\r\n    * @version 1.0-beta\r\n    * @param {*} data\r\n    **/\r\n    set store(data)\r\n    {\r\n        return this.data.push(data);\r\n    }\r\n    /**\r\n    * @function dom\r\n    * @version 1.0-beta\r\n    **/\r\n    dom()\r\n    {\r\n        let data = {};\r\n        /*id*/\r\n        data.id = function(defined)\r\n        {\r\n            let data_id = {};\r\n            /*dom*/\r\n            data_id.get = function(){\r\n                try{\r\n                    return document.getElementById(defined);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*height*/\r\n            data_id.height = function(){\r\n                try{\r\n                    return document.getElementById(defined).offsetHeight;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*width*/\r\n            data_id.width = function(){\r\n                try{\r\n                    return document.getElementById(defined).offsetWidth;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*parent*/\r\n            data_id.parent = function(){\r\n                try{\r\n                    return document.getElementById(defined).offsetParent;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*val*/\r\n            data_id.val = function(append = ''){\r\n                if(append !== ''){\r\n                    try{\r\n                        return document.getElementById(defined).value = append;\r\n                    }catch(e){console.error(e.message);}\r\n                }\r\n                else{return document.getElementById(defined).value;}}\r\n            /*delete*/\r\n            data_id.del = function(){\r\n                try{\r\n                    return document.getElementById(defined).remove();\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*attribute*/\r\n            data_id.attr = function(append = '', value = ''){\r\n                try{\r\n                    var app = document.getElementById(defined).getAttribute(append);\r\n                    if(app == null){\r\n                        throw Error('parameter exception');\r\n                    }\r\n                    if(append !== ''){\r\n                        if(value !== ''){\r\n                            document.getElementById(defined).setAttribute(append, value);\r\n                        }else{\r\n                            return false;\r\n                        }\r\n                    }\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add class*/\r\n            data_id.addClass = function($class){\r\n                try{\r\n                    return document.getElementById(defined).classList.add($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*remove class*/\r\n            data_id.removeClass = function($class){\r\n                try{\r\n                    return document.getElementById(defined).classList.remove($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*toggle class*/\r\n            data_id.toggleClass = function($class){\r\n                try{\r\n                    return document.getElementById(defined).classList.toggle($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add css*/\r\n            data_id.css = function(data){\r\n                try{\r\n                    if(typeof data == 'string'){\r\n                        return document.getElementById(defined).setAttribute('style', data);\r\n                    }\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add text*/\r\n            data_id.text = function(data){\r\n                try{\r\n                    return document.getElementById(defined).innerText = data;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            return Object.create(data_id);\r\n        }\r\n        /*class*/\r\n        data.class = function(defined)\r\n        {\r\n            let data_class = {};\r\n            /*dom*/\r\n            data_class.get = function(){\r\n                try{\r\n                    return document.getElementsByClassName(defined);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*height*/\r\n            data_class.height = function(length){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].offsetHeight;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*width*/\r\n            data_class.width = function(length){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].offsetWidth;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*parent*/\r\n            data_class.parent = function(length){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].offsetParent;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*val*/\r\n            data_class.val = function(length, append = ''){\r\n                try{\r\n                    if(append !== ''){\r\n                        var app = document.getElementsByClassName(defined);\r\n                        return app[length].value = append;\r\n                    }else{\r\n                        var app = document.getElementsByClassName(defined);\r\n                        return app[length].value;\r\n                    }\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*delete*/\r\n            data_class.del = function(length){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].remove();\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*attribute*/\r\n            data_class.attr = function(length, append = '', value = ''){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined).getAttribute(append);\r\n                    if(app == null){\r\n                        throw Error('parameter exception');\r\n                    }\r\n                    if(append !== ''){\r\n                        if(value !== ''){\r\n                            var app = document.getElementsByClassName(defined);\r\n                            return app[length].setAttribute(append, value);\r\n                        }else{\r\n                            return false;\r\n                        }\r\n                    }else{\r\n                        throw ReferenceError('2 arguments required');\r\n                    }\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add class*/\r\n            data_class.addClass = function(length, $class){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].classList.add($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*remove class*/\r\n            data_class.removeClass = function(length, $class){\r\n                try{\r\n                    var app = document.getElementsByClassName(defined);\r\n                    return app[length].classList.remove($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*toggle class*/\r\n            data_class.toggleClass = function(length, $class){\r\n                try{\r\n                    return app[length].classList.toggle($class);\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add css*/\r\n            data_class.css = function(length, data){\r\n                try{\r\n                    if(typeof data == 'string'){\r\n                        return document.getElementsByClassName(defined)[length].setAttribute('style', data);\r\n                    }\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*add text*/\r\n            data_class.text = function(length, data){\r\n                try{\r\n                    return document.getElementsByClassName(defined)[length].innerText = data;\r\n                }catch(e){console.error(e.message);}\r\n            }\r\n            /*length*/\r\n            data_class.length = document.getElementsByClassName(defined).length;\r\n            return Object.create(data_class);\r\n        }\r\n        data.name = function()\r\n        {\r\n            try{\r\n                return document.getElementsByName(data);\r\n            }catch(e){console.error(e.message);}\r\n        }\r\n        data.query = function()\r\n        {\r\n            try{\r\n                return document.querySelectorAll(data);\r\n            }catch(e){console.error(e.message);}\r\n        }\r\n        return Object.create(data);\r\n    }\r\n    /**\r\n     * @function src\r\n     * @version 1.0-beta\r\n     * @param {*} source \r\n     **/\r\n    src(source){\r\n        var data = {}; var app;\r\n        data.link = function()\r\n        {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                app = document.createElement('link');app.rel = 'stylesheet';app.type = 'text/css';app.href = source;document.head.appendChild(app);active.resources_css.push(source);\r\n            });\r\n        }\r\n        data.script = function()\r\n        {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                app = document.createElement('script');app.type = 'text/javascript';app.src = source;document.body.appendChild(app);active.resources_js.push(source);\r\n            });\r\n        }\r\n        data.meta = function()\r\n        {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                app = document.createElement('meta');app.name = source.name;app.content = source.content;document.head.appendChild(app);active.resources_meta.push([source.name, source.content]);\r\n            });\r\n        }\r\n        data.style = function()\r\n        {\r\n            window.addEventListener('DOMContentLoaded', function() {\r\n                app = document.createElement('style');app.type = 'text/css';app.innerText = source;document.head.appendChild(app);\r\n            });\r\n        }\r\n        return Object.create(data);\r\n    }\r\n    /**\r\n     * @function api\r\n     * @version 1.1-beta\r\n     * @param {*} url \r\n     **/\r\n    api(url)\r\n    {\r\n        let data = {};\r\n        data.get = function(object)\r\n        {\r\n            try{\r\n                let xhr = new XMLHttpRequest();\r\n                /*onloadstart*/\r\n                xhr.onloadstart = function(){\r\n                    if(typeof object.start == 'function'){\r\n                        object.start();\r\n                    }\r\n                }\r\n                /*onprogress*/\r\n                xhr.onprogress = function(){\r\n                    if(typeof object.progress == 'function'){\r\n                        object.progress();\r\n                    }\r\n                }\r\n                /*onload*/\r\n                xhr.onload = function(){\r\n                    if(xhr.status >= 200 && xhr.status < 300) {\r\n                        object.success(this.response);\r\n                    }else{\r\n                        object.error(xhr.response, xhr.status);\r\n                    }\r\n                }\r\n                /*cache*/\r\n                if(object.cache == true){\r\n                    xhr.open('GET', url, true);\r\n                }\r\n                /*no cache*/\r\n                if(object.cache == false || object.cache == null || object.cache == undefined){\r\n                    xhr.open('GET', url + '?_=' + new L().date().time(), true)\r\n                }\r\n                /*headers*/\r\n                if(object.headers !== undefined){\r\n                    for (let i = 0; i < object.headers.length; i++) {\r\n                        const header = object.headers[i];\r\n                        xhr.setRequestHeader(header.name, header.value);\r\n                    }\r\n                }\r\n                /*multipart*/\r\n                if(object.multipart == true){\r\n                    xhr.setRequestHeader('Content-Type', 'multipart/form-data');\r\n                }\r\n                xhr.send();\r\n            }catch(e){console.error(e.message);}\r\n        }\r\n        data.post = function(object)\r\n        {\r\n            try{\r\n                let xhr = new XMLHttpRequest();\r\n                /*onloadstart*/\r\n                xhr.onloadstart = function(){\r\n                    if(typeof object.start == 'function'){\r\n                        object.start();\r\n                    }\r\n                }\r\n                /*onprogress*/\r\n                xhr.onprogress = function(){\r\n                    if(typeof object.progress == 'function'){\r\n                        object.progress();\r\n                    }\r\n                }\r\n                /*onload*/\r\n                xhr.onload = function(){\r\n                    if(xhr.status >= 200 && xhr.status < 300) {\r\n                        object.success(this.response);\r\n                    }else{\r\n                        object.error(xhr.response, xhr.status);\r\n                    }\r\n                }\r\n                /*cache*/\r\n                if(object.cache == true){\r\n                    xhr.open(object.post, url, true);\r\n                }\r\n                /*no cache*/\r\n                if(object.cache == false || object.cache == null || object.cache == undefined){\r\n                    xhr.open(object.post, url + '?_=' + new L().date().time(), true)\r\n                }\r\n                /*headers*/\r\n                if(object.headers !== undefined){\r\n                    for (let i = 0; i < object.headers.length; i++) {\r\n                        const header = object.headers[i];\r\n                        xhr.setRequestHeader(header.name, header.value);\r\n                    }\r\n                }\r\n                /*multipart*/\r\n                if(object.multipart == true){\r\n                    xhr.setRequestHeader('Content-Type', 'multipart/form-data');\r\n                }\r\n                xhr.send(object.data);\r\n            }catch(e){console.error(e.message);}\r\n        }\r\n        return Object.create(data);\r\n    }\r\n    /**\r\n     * @function local\r\n     * @version 1.0-beta\r\n     * @param {*} data \r\n     **/\r\n    local(data = {})\r\n    {\r\n        try{\r\n            if(data.type == 'get'){var app = window.localStorage.getItem(data.name);data.success(app);}\r\n            else if(data.type == 'set'){return window.localStorage.setItem(data.name, data.data);}\r\n        }catch(e){console.error(e.message);}\r\n    }\r\n    /**\r\n     * @function session\r\n     * @version 1.0-beta\r\n     * @param {*} data \r\n     **/\r\n    session(data = {})\r\n    {\r\n        try{\r\n            if(data.type == 'get'){var app = window.sessionStorage.getItem(data.name);data.success(app);}\r\n            else if(data.type == 'set'){return window.sessionStorage.setItem(data.name, data.data);}\r\n        }catch(e){console.error(e.message);}\r\n    }\r\n    /**\r\n     * @function html\r\n     * @version 1.1-beta\r\n     * @param {*} first_element\r\n     * @param {*} to_element\r\n     * @param {*} data\r\n     * @param {*} tag_close\r\n     **/\r\n\thtml(first_element, to_element, data, tag_close = '')\r\n\t{\r\n        try{\r\n            if(tag_close !== ''){\r\n                var query = document.body.querySelector(to_element);var app = document.createElement(first_element);\r\n                app.innerHTML = data + tag_close;\r\n                query.appendChild(app);}\r\n            else{\r\n                var query = document.body.querySelector(to_element);var app = document.createElement(first_element);\r\n                app.innerHTML = data;\r\n                query.appendChild(app);}\r\n        }catch(e){\r\n            throw Error(e);\r\n        }\r\n    }\r\n    /**\r\n     * @function event\r\n     * @version 1.1-beta\r\n     * @param {*} data \r\n     **/\r\n    event(data)\r\n    {\r\n        /**\r\n         * resource event = error, abort, load, beforeunload, unload\r\n         * network event = online, offilne\r\n         * focus event = focus, blur, focusin, focusout\r\n         * websocket event = open, message, close\r\n         * form event = reset, submit\r\n         * view event = resize, scroll,\r\n         * clipboard = cut, paste, copy\r\n         * keyboard event = keydown, keypress, keyup\r\n         * mouse event = auxclick, click, dbclick, mousedown, mouseenter, mouseleave,mousemove, mouseover, mouseout, mouseup\r\n         * drag drop event = drag, dragend, dragenter, dragstart, dragleave, dragover, drop\r\n         **/\r\n        let data_event = {};\r\n        var query = document.querySelector(data);\r\n        /*resource event data*/\r\n        const error = function(call){query.addEventListener('error', function(e){call();});}\r\n        const abort = function(call){query.addEventListener('abort', function(e){call();});}\r\n        const load = function(call){query.addEventListener('load', function(e){call();});}\r\n        const beforeunload = function(call){query.addEventListener('beforeunload', function(e){call();});}\r\n        const unload = function(call){query.addEventListener('unload', function(e){call();});}\r\n        /*network event data*/\r\n        const online = function(call){query.addEventListener('online', function(e){call();});}\r\n        const offline = function(call){query.addEventListener('offline', function(e){call();});}\r\n        /*focus event data*/\r\n        const focus = function(call){query.addEventListener('focus', function(e){call();});}\r\n        const blur = function(call){query.addEventListener('blur', function(e){call();});}\r\n        const focusin = function(call){query.addEventListener('focusin', function(e){call();});}\r\n        const focusout = function(call){query.addEventListener('focusout', function(e){call();});}\r\n        /*form event data*/\r\n        const reset = function(call){query.addEventListener('reset', function(e){call();});}\r\n        const submit = function(call){query.addEventListener('submit', function(e){call();});}\r\n        const change = function(call){query.addEventListener('change', function(e){call();});}\r\n        /*view event data*/\r\n        const resize = function(call){query.addEventListener('resize', function(e){call();});}\r\n        const scroll = function(call){query.addEventListener('scroll', function(e){call();});}\r\n        /*clipboard event data*/\r\n        const cut = function(call){query.addEventListener('cut', function(e){call();});}\r\n        const paste = function(call){query.addEventListener('paste', function(e){call();});}\r\n        const copy = function(call){query.addEventListener('copy', function(e){call();});}\r\n        /*keyboard event data*/\r\n        const keydown = function(call){query.addEventListener('keydown', function(e){call();});}\r\n        const keyup = function(call){query.addEventListener('keyup', function(e){call();});}\r\n        const keypress = function(call){query.addEventListener('keypress', function(e){call();});}\r\n        /*mouse event data*/\r\n        const auxclick = function(call){query.addEventListener('auxclick', function(e){call(e);});}\r\n        const click = function(call){query.addEventListener('click', function(e){call(e);});}\r\n        const dbclick = function(call){query.addEventListener('dbclick', function(e){call(e);});}\r\n        const mousedown = function(call){query.addEventListener('mousedown', function(e){call(e);});}\r\n        const mouseenter = function(call){query.addEventListener('mouseenter', function(e){call(e);});}\r\n        const mouseleave = function(call){query.addEventListener('mouseleave', function(e){call(e);});}\r\n        const mousemove = function(call){query.addEventListener('mousemove', function(e){call(e);});}\r\n        const mouseover = function(call){query.addEventListener('mouseover', function(e){call(e);});}\r\n        const mouseout = function(call){query.addEventListener('mouseout', function(e){call(e);});}\r\n        const mouseup = function(call){query.addEventListener('mouseup', function(e){call(e);});}\r\n        /*drag drop event data */\r\n        const drag = function(call){query.addEventListener('drag', function(e){call(e);});}\r\n        const dragend = function(call){query.addEventListener('dragend', function(e){call(e);});}\r\n        const dragenter = function(call){query.addEventListener('dragenter', function(e){call(e);});}\r\n        const dragstart = function(call){query.addEventListener('dragstart', function(e){call(e);});}\r\n        const dragleave = function(call){query.addEventListener('dragleave', function(e){call(e);});}\r\n        const dragover = function(call){query.addEventListener('dragover', function(e){call(e);});}\r\n        const drop = function(call){query.addEventListener('drop', function(e){call(e);});}\r\n        /**\r\n        * @function on\r\n        * @version 1.1-beta\r\n        * @param type\r\n        * @param call\r\n        **/\r\n        data_event.on = function(type, call){\r\n            try{\r\n                if(type == 'error'){error(call);}\r\n                if(type == 'abort'){abort(call);}\r\n                if(type == 'load'){load(call);}\r\n                if(type == 'beforeunload'){beforeunload(call);}\r\n                if(type == 'unload'){unload(call);}\r\n                \r\n                if(type == 'offline'){offline(call);}\r\n                if(type == 'online'){online(call);}\r\n\r\n                if(type == 'focus'){focus(call);}\r\n                if(type == 'blur'){blur(call);}\r\n                if(type == 'focusin'){focusin(call);}\r\n                if(type == 'focusout'){focusout(call);}\r\n\r\n                if(type == 'reset'){reset(call);}\r\n                if(type == 'submit'){submit(call);}\r\n                if(type == 'change'){change(call);}\r\n\r\n                if(type == 'resize'){resize(call);}\r\n                if(type == 'scroll'){scroll(call);}\r\n\r\n                if(type == 'cut'){cut(call);}\r\n                if(type == 'paste'){paste(call);}\r\n                if(type == 'copy'){copy(call);}\r\n\r\n                if(type == 'keydown'){keydown(call);}\r\n                if(type == 'keyup'){keyup(call);}\r\n                if(type == 'keypress'){keypress(call);}\r\n\r\n                if(type == 'auxclick'){auxclick(call);}\r\n                if(type == 'click'){click(call);}\r\n                if(type == 'dbclick'){dbclick(call);}\r\n                if(type == 'mousedown'){mousedown(call);}\r\n                if(type == 'mouseenter'){mouseenter(call);}\r\n                if(type == 'mouseleave'){mouseleave(call);}\r\n                if(type == 'mousemove'){mousemove(call);}\r\n                if(type == 'mouseover'){mouseover(call);}\r\n                if(type == 'mouseout'){mouseout(call);}\r\n                if(type == 'mouseup'){mouseup(call);}\r\n\r\n                if(type == 'drag'){drag(call);}\r\n                if(type == 'dragend'){dragend(call);}\r\n                if(type == 'dragenter'){dragenter(call);}\r\n                if(type == 'dragstart'){dragstart(call);}\r\n                if(type == 'dragleave'){dragleave(call);}\r\n                if(type == 'dragover'){dragover(call);}\r\n                if(type == 'drop'){drop(call);}\r\n            }catch(e){console.error(e);}\r\n        }\r\n        data_event.error = function(call){error(call);}\r\n        data_event.abort = function(call){abort(call);}\r\n        data_event.load = function(call){load(call);}\r\n        data_event.beforeunload = function(call){beforeunload(call);}\r\n        data_event.unload = function(call){unload(call);}\r\n        data_event.offline = function(call){offline(call);}\r\n        data_event.online = function(call){online(call);}\r\n        data_event.focus = function(call){focus(call);}\r\n        data_event.blur = function(call){blur(call);}\r\n        data_event.focusin = function(call){focusin(call);}\r\n        data_event.focusout = function(call){focusout(call);}\r\n        data_event.reset = function(call){reset(call);}\r\n        data_event.submit = function(call){submit(call);}\r\n        data_event.change = function(call){change(call);}\r\n        data_event.resize = function(call){resize(call);}\r\n        data_event.scroll = function(call){scroll(call);}\r\n        data_event.cut = function(call){cut(call);}\r\n        data_event.paste = function(call){paste(call);}\r\n        data_event.copy = function(call){copy(call);}\r\n        data_event.keydown = function(call){keydown(call);}\r\n        data_event.keyup = function(call){keyup(call);}\r\n        data_event.keypress = function(call){keypress(call);}\r\n        data_event.auxclick = function(call){auxclick(call);}\r\n        data_event.click = function(call){click(call);}\r\n        data_event.dbclick = function(call){dbclick(call);}\r\n        data_event.mousedown = function(call){mousedown(call);}\r\n        data_event.mouseenter = function(call){mouseenter(call);}\r\n        data_event.mouseleave = function(call){mouseleave(call);}\r\n        data_event.mousemove = function(call){mousemove(call);}\r\n        data_event.mouseover = function(call){mouseover(call);}\r\n        data_event.mouseout = function(call){mouseout(call);}\r\n        data_event.mouseup = function(call){mouseup(call);}\r\n        data_event.drag = function(call){drag(call);}\r\n        data_event.dragend = function(call){dragend(call);}\r\n        data_event.dragenter = function(call){dragenter(call);}\r\n        data_event.dragstart = function(call){dragstart(call);}\r\n        data_event.dragleave = function(call){dragleave(call);}\r\n        data_event.dragover = function(call){dragover(call);}\r\n        data_event.drop = function(call){drop(call);}\r\n        return Object.create(data_event);\r\n    }\r\n    /**\r\n     * @function date\r\n     * @version 1.1-beta \r\n     **/\r\n    date()\r\n    {\r\n        let app = new Date();let data_date = {};\r\n        data_date.date = function(){return app.getDate();}\r\n        data_date.year = function(){return app.getFullYear()}\r\n        data_date.month = function(){return app.getMonth();}\r\n        data_date.hours = function(){return app.getHours();}\r\n        data_date.minutes = function(){return app.getMinutes();}\r\n        data_date.seconds = function(){return app.getSeconds();}\r\n        data_date.time = function(){return app.getTime();}\r\n        data_date.now = function(){return app;}\r\n        return Object.create(data_date);\r\n    }\r\n    /**\r\n     * @function parse\r\n     * @version 1.0-beta\r\n     * @param {*} data \r\n     **/\r\n    parse(data){return JSON.parse(data);}\r\n    /**\r\n     * @function stringify\r\n     * @version 1.0-beta\r\n     * @param {*} data \r\n     **/\r\n    stringify(data){return JSON.stringify(data);}\r\n}\r\nObject.create(active);\r\nwindow.L_active = active;\r\n/*window.L = new L();*/\r\n/*var Lavosted = new L();*/\r\n/*export default Lavosted;*/\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });