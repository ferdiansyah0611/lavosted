'use strict';
/**
 * @host ferdiansyah0611.github.com
 * @version 1.1-beta
 * @license MIT
 */
/*css*/

const apps = {};

export class L {
    constructor(__application__) {
        this.__application__ = __application__;
        this.store = function(__data) {
            return apps.data = __data;
        }
        /**
         * @function init
         * @version 1.0-beta
         * @param {*} data 
         **/
        this.init = function(data) {
            try {
                if (data.csrf !== undefined) {
                    if (data.csrf.name || data.csrf.token) {
                        this.security(data.csrf.name, data.csrf.token);
                    }
                }
                if (data.run !== undefined) {
                    if (data.run == 'development') {
                        console.info('You are running Lavosted in development mode.' + "\n" + 'Make sure to turn on production mode when deploying for production' + "\n" + 'More info visit https://github.com/ferdiansyah0611/Lavosted-Frameworks');
                    } else if (data.run == 'production') {}
                }
                if (data.responsive !== undefined) {
                    this.src({ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' }).meta();
                }
                if (data.headers !== undefined) {
                    active.data_headers.push(data.headers.Authorization);
                }
            } catch (e) {
                throw Error(e.stack);
            }
        }
    }
    url() {
        let app = {
            on: window.location.href,
            base: window.location.origin,
            reload: function() {
                return window.location.reload();
            },
            replace: function() {
                return window.location.replace()
            }
        };
        return Object.assign(app);
    }
    dom() {
        var o = []
        var app = document.body.querySelectorAll(this.__application__);
        app.forEach((val, key) => {
            o.push(val);
        });
        return o;
    }
    id(__defined) {
        let data_id = {};
        /*dom*/
        data_id.get = function() {
            try {
                return document.getElementById(__defined);
            } catch (e) { console.error(e.message); }
        }
        /*height*/
        data_id.height = function() {
            try {
                return document.getElementById(__defined).offsetHeight;
            } catch (e) { console.error(e.message); }
        }
        /*width*/
        data_id.width = function() {
            try {
                return document.getElementById(__defined).offsetWidth;
            } catch (e) { console.error(e.message); }
        }
        /*parent*/
        data_id.parent = function() {
            try {
                return document.getElementById(__defined).offsetParent;
            } catch (e) { console.error(e.message); }
        }
        /*val*/
        data_id.val = function(append = '') {
            if (append !== '') {
                try {
                    return document.getElementById(__defined).value = append;
                } catch (e) { console.error(e.message); }
            } else { return document.getElementById(__defined).value; }
        }
        /*delete*/
        data_id.del = function() {
            try {
                return document.getElementById(__defined).remove();
            } catch (e) { console.error(e.message); }
        }
        /*attribute*/
        data_id.attr = function(append = '', value = '') {
            try {
                var app = document.getElementById(__defined).getAttribute(append);
                if (app == null) {
                    throw Error('parameter exception');
                }
                if (append !== '') {
                    if (value !== '') {
                        document.getElementById(__defined).setAttribute(append, value);
                    } else {
                        return false;
                    }
                }
            } catch (e) { console.error(e.message); }
        }
        /*add class*/
        data_id.addClass = function($class) {
            try {
                return document.getElementById(__defined).classList.add($class);
            } catch (e) { console.error(e.message); }
        }
        /*remove class*/
        data_id.removeClass = function($class) {
            try {
                return document.getElementById(__defined).classList.remove($class);
            } catch (e) { console.error(e.message); }
        }
        /*toggle class*/
        data_id.toggleClass = function($class) {
            try {
                return document.getElementById(__defined).classList.toggle($class);
            } catch (e) { console.error(e.message); }
        }
        /*add css*/
        data_id.css = function(data) {
            try {
                if (typeof data == 'string') {
                    return document.getElementById(__defined).setAttribute('style', data);
                }
            } catch (e) { console.error(e.message); }
        }
        /*add text*/
        data_id.text = function(data) {
            try {
                return document.getElementById(__defined).innerText = data;
            } catch (e) { console.error(e.message); }
        }
        /*html*/
        data_class.html = function(data) {
            try {
                return document.getElementById(__defined).innerHTML = data;
            } catch (e) { console.error(e.message); }
        }
        return Object.create(data_id);
    }
    class(__defined) {
        let data_class = {};
        var app = document.body.getElementsByClassName(__defined);
        var array = [];
        /*dom*/
        data_class.get = function() {
            try {
                for (var i = 0; i < app.length; i++) {
                    array.push(app[i]);
                }
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*height*/
        data_class.height = function() {
            try {
                for (var i = 0; i < app.length; i++) {
                    array.push(app[i].offsetHeight);
                }
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*width*/
        data_class.width = function() {
            try {
                for (var i = 0; i < app.length; i++) {
                    array.push(app[i].offsetWidth);
                }
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*parent*/
        data_class.parent = function() {
            try {
                for (var i = 0; i < app.length; i++) {
                    array.push(app[i].offsetParent);
                }
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*val*/
        data_class.val = function(append = '') {
            try {
                if (append !== '') {
                    for (var i = 0; i < app.length; i++) {
                        array.push(app[i].value = append);
                    }
                    return true;
                } else {
                    for (var i = 0; i < app.length; i++) {
                        array.push(app[i].value);
                    }
                    return array;
                }
            } catch (e) { console.error(e.message); }
        }
        /*delete*/
        data_class.del = function() {
            try {
                for (var i = 0; i < app.length; i++) {
                    array.push(app[i]);
                }
                array.forEach((val, key) => {
                    val.remove();
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*attribute*/
        data_class.attr = function(append = '', value = '') {
            try {
                if (value !== '') {
                    for (var i = 0; i < app.length; i++) {
                        array.push(app[i]);
                    }
                    array.forEach((val, key) => {
                        val.setAttribute(append, value);
                    });
                    return true;
                } else {
                    for (var i = 0; i < app.length; i++) {
                        array.push(app[i]);
                    }
                    array.forEach((val, key) => {
                        val.getAttribute(append);
                    });
                    return array;
                }
            } catch (e) { console.error(e.message); }
        }
        /*add class*/
        data_class.addClass = function($class) {
            try {
                for (var i = 0; i < app.length; i++) {
                    app[i].classList.add($class);
                }
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*remove class*/
        data_class.removeClass = function($class) {
            try {
                for (var i = 0; i < app.length; i++) {
                    app[i].classList.remove($class);
                }
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*toggle class*/
        data_class.toggleClass = function($class) {
            try {
                for (var i = 0; i < app.length; i++) {
                    app[i].classList.toggle($class);
                }
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*add css*/
        data_class.css = function(data) {
            try {
                if (typeof data == 'string') {
                    for (var i = 0; i < app.length; i++) {
                        app[i].setAttribute('style', data);
                    }
                    return true;
                }
            } catch (e) { console.error(e.message); }
        }
        /*add text*/
        data_class.text = function(data) {
            try {
                for (var i = 0; i < app.length; i++) {
                    app[i].innerText = data;
                }
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*html*/
        data_class.html = function(data) {
            try {
                for (var i = 0; i < app.length; i++) {
                    app[i].innerHTML = data;
                }
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*length*/
        data_class.length = app.length;
        return Object.assign(data_class);
    }
    query(data) {
        let data_query = {};
        var app = document.body.querySelectorAll(data);
        var array = [];
        /*dom*/
        data_query.get = function() {
            try {
                app.forEach((val, key) => {
                    array.push(val);
                });
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*height*/
        data_query.height = function() {
            try {
                app.forEach((val, key) => {
                    array.push(val.offsetHeight);
                });
                return array;
            } catch (e) { console.error(e.message); }
            try {
                return document.getElementById(defined).offsetHeight;
            } catch (e) { console.error(e.message); }
        }
        /*width*/
        data_query.width = function() {
            try {
                app.forEach((val, key) => {
                    array.push(val.offsetWidth);
                });
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*parent*/
        data_query.parent = function() {
            try {
                app.forEach((val, key) => {
                    array.push(val.offsetParent);
                });
                return array;
            } catch (e) { console.error(e.message); }
        }
        /*val*/
        data_query.val = function(append = '') {
            if (append !== '') {
                try {
                    app.forEach((val, key) => {
                        val.value = append;
                    });
                    return true;
                } catch (e) { console.error(e.message); }
            } else {
                app.forEach((val, key) => {
                    array.push(val.value);
                });
                return array;
            }
        }
        /*delete*/
        data_query.del = function() {
            try {
                app.forEach((val, key) => {
                    val.remove();
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*attribute*/
        data_query.attr = function(append = '', value = '') {
            try {
                if (append !== '') {
                    if (value !== '') {
                        app.forEach((val, key) => {
                            val.setAttribute(append, value);
                        });
                        return true;
                    } else {
                        app.forEach((val, key) => {
                            array.push(val.getAttribute(append));
                        });
                        return array;
                    }
                }
            } catch (e) { console.error(e.message); }
        }
        /*add class*/
        data_query.addClass = function($class) {
            try {
                app.forEach((val, key) => {
                    val.classList.add($class);
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*remove class*/
        data_query.removeClass = function($class) {
            try {
                app.forEach((val, key) => {
                    val.classList.remove($class);
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*toggle class*/
        data_query.toggleClass = function($class) {
            try {
                app.forEach((val, key) => {
                    val.classList.toggle($class);
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*add css*/
        data_query.css = function(data) {
            try {
                if (typeof data == 'string') {
                    app.forEach((val, key) => {
                        val.setAttribute('style', data);
                    });
                    return true;
                }
            } catch (e) { console.error(e.message); }
        }
        /*add text*/
        data_query.text = function(data) {
            try {
                app.forEach((val, key) => {
                    val.innerText = data;
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        /*html*/
        data_query.html = function(data) {
            try {
                app.forEach((val, key) => {
                    val.innerHTML = data;
                });
                return true;
            } catch (e) { console.error(e.message); }
        }
        return Object.assign(data_query);
    }
    /**
     * @function src
     * @version 1.0-beta
     * @param {*} source 
     **/
    src(source) {
        var data = {};
        var app;
        data.link = function() {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('link');
                app.rel = 'stylesheet';
                app.type = 'text/css';
                app.href = source;
                document.head.appendChild(app);
                apps.resources = [source];
            });
        }
        data.script = function() {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('script');
                app.type = 'text/javascript';
                app.src = source;
                document.body.appendChild(app);
                apps.resources = [source];
            });
        }
        data.meta = function() {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('meta');
                app.name = source.name;
                app.content = source.content;
                document.head.appendChild(app);
            });
        }
        data.style = function() {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('style');
                app.type = 'text/css';
                app.innerText = source;
                document.head.appendChild(app);
            });
        }
        return Object.create(data);
    }
    /**
     * @function api
     * @version 1.1-beta
     * @param {*} url 
     **/
    api(url) {
        let data = {};
        data.get = function(object) {
            try {
                let xhr = new XMLHttpRequest();
                /*onloadstart*/
                xhr.onloadstart = function() {
                    if (typeof object.start == 'function') {
                        object.start();
                    }
                }
                /*onprogress*/
                xhr.onprogress = function() {
                    if (typeof object.progress == 'function') {
                        object.progress();
                    }
                }
                /*onload*/
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        object.success(this.response);
                    } else {
                        object.error(xhr.response, xhr.status);
                    }
                }
                /*cache*/
                if (object.cache == true) {
                    xhr.open('GET', url, true);
                }
                /*no cache*/
                if (object.cache == false || object.cache == null || object.cache == undefined) {
                    xhr.open('GET', url + '?_=' + new L().date().time(), true)
                }
                /*headers*/
                if (object.headers !== undefined) {
                    for (let i = 0; i < object.headers.length; i++) {
                        const header = object.headers[i];
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
                /*multipart*/
                if (object.multipart == true) {
                    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                }
                xhr.send();
            } catch (e) { console.error(e.message); }
        }
        data.post = function(object) {
            try {
                let xhr = new XMLHttpRequest();
                /*onloadstart*/
                xhr.onloadstart = function() {
                    if (typeof object.start == 'function') {
                        object.start();
                    }
                }
                /*onprogress*/
                xhr.onprogress = function() {
                    if (typeof object.progress == 'function') {
                        object.progress();
                    }
                }
                /*onload*/
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        object.success(this.response);
                    } else {
                        object.error(xhr.response, xhr.status);
                    }
                }
                /*cache*/
                if (object.cache == true) {
                    xhr.open(object.post, url, true);
                }
                /*no cache*/
                if (object.cache == false || object.cache == null || object.cache == undefined) {
                    xhr.open(object.post, url + '?_=' + new L().date().time(), true)
                }
                /*headers*/
                if (object.headers !== undefined) {
                    for (let i = 0; i < object.headers.length; i++) {
                        const header = object.headers[i];
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
                /*multipart*/
                if (object.multipart == true) {
                    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                }
                xhr.send(object.data);
            } catch (e) { console.error(e.message); }
        }
        return Object.create(data);
    }
    /**
     * @function local
     * @version 1.0-beta
     * @param {*} data 
     **/
    local(data = {}) {
        try {
            if (data.type == 'get') { var app = window.localStorage.getItem(data.name);
                data.success(app); } else if (data.type == 'set') { return window.localStorage.setItem(data.name, data.data); }
        } catch (e) { console.error(e.message); }
    }
    /**
     * @function session
     * @version 1.0-beta
     * @param {*} data 
     **/
    session(data = {}) {
        try {
            if (data.type == 'get') { var app = window.sessionStorage.getItem(data.name);
                data.success(app); } else if (data.type == 'set') { return window.sessionStorage.setItem(data.name, data.data); }
        } catch (e) { console.error(e.message); }
    }
    /**
     * @function html
     * @version 1.1-beta
     * @param {*} first_element
     * @param {*} to_element
     * @param {*} data
     * @param {*} tag_close
     **/
    html(first_element, to_element, data, tag_close = '') {
        try {
            if (tag_close !== '') {
                var query = document.body.querySelector(to_element);
                var app = document.createElement(first_element);
                app.innerHTML = data + tag_close;
                query.appendChild(app);
            } else {
                var query = document.body.querySelector(to_element);
                var app = document.createElement(first_element);
                app.innerHTML = data;
                query.appendChild(app);
            }
        } catch (e) {
            throw Error(e);
        }
    }
    static error() {

    }
    
    /**
     * @function event
     * @version 1.1-beta
     * @param {*} data 
     **/
    event(data) {
        /**
         * resource event = error, abort, load, beforeunload, unload
         * network event = online, offilne
         * focus event = focus, blur, focusin, focusout
         * websocket event = open, message, close
         * form event = reset, submit
         * view event = resize, scroll,
         * clipboard = cut, paste, copy
         * keyboard event = keydown, keypress, keyup
         * mouse event = auxclick, click, dbclick, mousedown, mouseenter, mouseleave,mousemove, mouseover, mouseout, mouseup
         * drag drop event = drag, dragend, dragenter, dragstart, dragleave, dragover, drop
         **/
        let data_event = {};
        var query = document.querySelector(data);
        /*resource event data*/
        const error = function(call) { query.addEventListener('error', function(e) { call(); }); }
        const abort = function(call) { query.addEventListener('abort', function(e) { call(); }); }
        const load = function(call) { query.addEventListener('load', function(e) { call(); }); }
        const beforeunload = function(call) { query.addEventListener('beforeunload', function(e) { call(); }); }
        const unload = function(call) { query.addEventListener('unload', function(e) { call(); }); }
        /*network event data*/
        const online = function(call) { query.addEventListener('online', function(e) { call(); }); }
        const offline = function(call) { query.addEventListener('offline', function(e) { call(); }); }
        /*focus event data*/
        const focus = function(call) { query.addEventListener('focus', function(e) { call(); }); }
        const blur = function(call) { query.addEventListener('blur', function(e) { call(); }); }
        const focusin = function(call) { query.addEventListener('focusin', function(e) { call(); }); }
        const focusout = function(call) { query.addEventListener('focusout', function(e) { call(); }); }
        /*form event data*/
        const reset = function(call) { query.addEventListener('reset', function(e) { call(); }); }
        const submit = function(call) { query.addEventListener('submit', function(e) { call(); }); }
        const change = function(call) { query.addEventListener('change', function(e) { call(); }); }
        /*view event data*/
        const resize = function(call) { query.addEventListener('resize', function(e) { call(); }); }
        const scroll = function(call) { query.addEventListener('scroll', function(e) { call(); }); }
        /*clipboard event data*/
        const cut = function(call) { query.addEventListener('cut', function(e) { call(); }); }
        const paste = function(call) { query.addEventListener('paste', function(e) { call(); }); }
        const copy = function(call) { query.addEventListener('copy', function(e) { call(); }); }
        /*keyboard event data*/
        const keydown = function(call) { query.addEventListener('keydown', function(e) { call(); }); }
        const keyup = function(call) { query.addEventListener('keyup', function(e) { call(); }); }
        const keypress = function(call) { query.addEventListener('keypress', function(e) { call(); }); }
        /*mouse event data*/
        const auxclick = function(call) { query.addEventListener('auxclick', function(e) { call(e); }); }
        const click = function(call) { query.addEventListener('click', function(e) { call(e); }); }
        const dbclick = function(call) { query.addEventListener('dbclick', function(e) { call(e); }); }
        const mousedown = function(call) { query.addEventListener('mousedown', function(e) { call(e); }); }
        const mouseenter = function(call) { query.addEventListener('mouseenter', function(e) { call(e); }); }
        const mouseleave = function(call) { query.addEventListener('mouseleave', function(e) { call(e); }); }
        const mousemove = function(call) { query.addEventListener('mousemove', function(e) { call(e); }); }
        const mouseover = function(call) { query.addEventListener('mouseover', function(e) { call(e); }); }
        const mouseout = function(call) { query.addEventListener('mouseout', function(e) { call(e); }); }
        const mouseup = function(call) { query.addEventListener('mouseup', function(e) { call(e); }); }
        /*drag drop event data */
        const drag = function(call) { query.addEventListener('drag', function(e) { call(e); }); }
        const dragend = function(call) { query.addEventListener('dragend', function(e) { call(e); }); }
        const dragenter = function(call) { query.addEventListener('dragenter', function(e) { call(e); }); }
        const dragstart = function(call) { query.addEventListener('dragstart', function(e) { call(e); }); }
        const dragleave = function(call) { query.addEventListener('dragleave', function(e) { call(e); }); }
        const dragover = function(call) { query.addEventListener('dragover', function(e) { call(e); }); }
        const drop = function(call) { query.addEventListener('drop', function(e) { call(e); }); }
        const DOMContentLoaded = function(call) { window.addEventListener('DOMContentLoaded', function(e) { call(e); }); }
        /**
         * @function on
         * @version 1.1-beta
         * @param type
         * @param call
         **/
        data_event.on = function(type, call) {
            try {
                if (type == 'error') { error(call); }
                if (type == 'abort') { abort(call); }
                if (type == 'load') { load(call); }
                if (type == 'beforeunload') { beforeunload(call); }
                if (type == 'unload') { unload(call); }

                if (type == 'offline') { offline(call); }
                if (type == 'online') { online(call); }

                if (type == 'focus') { focus(call); }
                if (type == 'blur') { blur(call); }
                if (type == 'focusin') { focusin(call); }
                if (type == 'focusout') { focusout(call); }

                if (type == 'reset') { reset(call); }
                if (type == 'submit') { submit(call); }
                if (type == 'change') { change(call); }

                if (type == 'resize') { resize(call); }
                if (type == 'scroll') { scroll(call); }

                if (type == 'cut') { cut(call); }
                if (type == 'paste') { paste(call); }
                if (type == 'copy') { copy(call); }

                if (type == 'keydown') { keydown(call); }
                if (type == 'keyup') { keyup(call); }
                if (type == 'keypress') { keypress(call); }

                if (type == 'auxclick') { auxclick(call); }
                if (type == 'click') { click(call); }
                if (type == 'dbclick') { dbclick(call); }
                if (type == 'mousedown') { mousedown(call); }
                if (type == 'mouseenter') { mouseenter(call); }
                if (type == 'mouseleave') { mouseleave(call); }
                if (type == 'mousemove') { mousemove(call); }
                if (type == 'mouseover') { mouseover(call); }
                if (type == 'mouseout') { mouseout(call); }
                if (type == 'mouseup') { mouseup(call); }

                if (type == 'drag') { drag(call); }
                if (type == 'dragend') { dragend(call); }
                if (type == 'dragenter') { dragenter(call); }
                if (type == 'dragstart') { dragstart(call); }
                if (type == 'dragleave') { dragleave(call); }
                if (type == 'dragover') { dragover(call); }
                if (type == 'drop') { drop(call); }
                if (type == 'DOMContentLoaded') { DOMContentLoaded(call); }
            } catch (e) { console.error(e); }
        }
        data_event.error = function(call) { error(call); }
        data_event.abort = function(call) { abort(call); }
        data_event.load = function(call) { load(call); }
        data_event.beforeunload = function(call) { beforeunload(call); }
        data_event.unload = function(call) { unload(call); }
        data_event.offline = function(call) { offline(call); }
        data_event.online = function(call) { online(call); }
        data_event.focus = function(call) { focus(call); }
        data_event.blur = function(call) { blur(call); }
        data_event.focusin = function(call) { focusin(call); }
        data_event.focusout = function(call) { focusout(call); }
        data_event.reset = function(call) { reset(call); }
        data_event.submit = function(call) { submit(call); }
        data_event.change = function(call) { change(call); }
        data_event.resize = function(call) { resize(call); }
        data_event.scroll = function(call) { scroll(call); }
        data_event.cut = function(call) { cut(call); }
        data_event.paste = function(call) { paste(call); }
        data_event.copy = function(call) { copy(call); }
        data_event.keydown = function(call) { keydown(call); }
        data_event.keyup = function(call) { keyup(call); }
        data_event.keypress = function(call) { keypress(call); }
        data_event.auxclick = function(call) { auxclick(call); }
        data_event.click = function(call) { click(call); }
        data_event.dbclick = function(call) { dbclick(call); }
        data_event.mousedown = function(call) { mousedown(call); }
        data_event.mouseenter = function(call) { mouseenter(call); }
        data_event.mouseleave = function(call) { mouseleave(call); }
        data_event.mousemove = function(call) { mousemove(call); }
        data_event.mouseover = function(call) { mouseover(call); }
        data_event.mouseout = function(call) { mouseout(call); }
        data_event.mouseup = function(call) { mouseup(call); }
        data_event.drag = function(call) { drag(call); }
        data_event.dragend = function(call) { dragend(call); }
        data_event.dragenter = function(call) { dragenter(call); }
        data_event.dragstart = function(call) { dragstart(call); }
        data_event.dragleave = function(call) { dragleave(call); }
        data_event.dragover = function(call) { dragover(call); }
        data_event.drop = function(call) { drop(call); }
        data_event.DOMContentLoaded = function(call) { DOMContentLoaded(call); }
        return Object.assign(data_event);
    }
    /**
     * @function date
     * @version 1.1-beta 
     **/
    date() {
        let app = new Date();
        let data_date = {};
        data_date.date = function() { return app.getDate(); }
        data_date.year = function() { return app.getFullYear() }
        data_date.month = function() { return app.getMonth(); }
        data_date.hours = function() { return app.getHours(); }
        data_date.minutes = function() { return app.getMinutes(); }
        data_date.seconds = function() { return app.getSeconds(); }
        data_date.time = function() { return app.getTime(); }
        data_date.now = function() { return app; }
        return Object.create(data_date);
    }
    /**
     * @function parse
     * @version 1.0-beta
     **/
    parse() { return JSON.parse(this.__application__); }
    /**
     * @function stringify
     * @version 1.0-beta
     **/
    stringify() { return JSON.stringify(this.__application__); }
    interval(call, time) {
        setInterval(function() {
            call();
        }, time);
    }
    timeout(call, time) {
        setTimeout(function() {
            call();
        }, time);
    }
    isArray() {
        if(typeof this.__application__ == 'object'){return true;}else{return false;}
    }
}

/*prototype*/
L.prototype.data = Object.assign(apps);
/*instance*/
var Lavosted = new L();

export default Lavosted;

window.L = function(__application__) {
    return new L(__application__);
}