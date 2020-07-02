(function(window) {
    const ___apps = {};
    const ___object = {};
    const ___array = [];
    var __this;

    class Lavosted {
        constructor(__application__) {
            this.__application__ = __application__;
            this.store = (__data__) => {
                return ___apps.data = __data__;
            }
        }
        /*static function*/
        static dom(__data) {
            let _array = [];
            var __doms = document.body.querySelectorAll(__data);
            __doms.forEach((val, key) => {
                _array.push(val);
            });
            return _array;
        }
        /*ajax*/
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
        /*event*/
        on(__event__, call) {
            __this = Lavosted.dom(this.__application__);
            switch (__event__) {
                case 'click':
                    __this.forEach((val, key) => {
                        val.addEventListener('click', function(e) { call(e); });
                    });
                    break;
                case 'abort':
                    __this.forEach((val, key) => {
                        val.addEventListener('abort', function(e) { call(e); });
                    });
                    break;
                case 'load':
                    __this.forEach((val, key) => {
                        val.addEventListener('abort', function(e) { call(e); });
                    });
                    break;
                case 'beforeunload':
                    __this.forEach((val, key) => {
                        val.addEventListener('beforeunload', function(e) { call(e); });
                    });
                    break;
                case 'unload':
                    __this.forEach((val, key) => {
                        val.addEventListener('unload', function(e) { call(e); });
                    });
                    break;
                case 'online':
                    __this.forEach((val, key) => {
                        val.addEventListener('online', function(e) { call(e); });
                    });
                    break;
                case 'offline':
                    __this.forEach((val, key) => {
                        val.addEventListener('offline', function(e) { call(e); });
                    });
                    break;
                case 'focus':
                    __this.forEach((val, key) => {
                        val.addEventListener('focus', function(e) { call(e); });
                    });
                    break;
                case 'blur':
                    __this.forEach((val, key) => {
                        val.addEventListener('blur', function(e) { call(e); });
                    });
                    break;
                case 'focusin':
                    __this.forEach((val, key) => {
                        val.addEventListener('focusin', function(e) { call(e); });
                    });
                    break;
                case 'focusout':
                    __this.forEach((val, key) => {
                        val.addEventListener('focusout', function(e) { call(e); });
                    });
                    break;
                case 'reset':
                    __this.forEach((val, key) => {
                        val.addEventListener('reset', function(e) { call(e); });
                    });
                    break;
                case 'submit':
                    __this.forEach((val, key) => {
                        val.addEventListener('submit', function(e) { call(e); });
                    });
                    break;
                case 'change':
                    __this.forEach((val, key) => {
                        val.addEventListener('change', function(e) { call(e); });
                    });
                    break;
                case 'resize':
                    __this.forEach((val, key) => {
                        val.addEventListener('resize', function(e) { call(e); });
                    });
                    break;
                case 'scroll':
                    __this.forEach((val, key) => {
                        val.addEventListener('scroll', function(e) { call(e); });
                    });
                    break;
                case 'cut':
                    __this.forEach((val, key) => {
                        val.addEventListener('cut', function(e) { call(e); });
                    });
                    break;
                case 'paste':
                    __this.forEach((val, key) => {
                        val.addEventListener('paste', function(e) { call(e); });
                    });
                    break;
                case 'copy':
                    __this.forEach((val, key) => {
                        val.addEventListener('copy', function(e) { call(e); });
                    });
                    break;
                case 'keydown':
                    __this.forEach((val, key) => {
                        val.addEventListener('keydown', function(e) { call(e); });
                    });
                    break;
                case 'keyup':
                    __this.forEach((val, key) => {
                        val.addEventListener('keyup', function(e) { call(e); });
                    });
                    break;
                case 'keypress':
                    __this.forEach((val, key) => {
                        val.addEventListener('keypress', function(e) { call(e); });
                    });
                    break;
                case 'auxclick':
                    __this.forEach((val, key) => {
                        val.addEventListener('auxclick', function(e) { call(e); });
                    });
                    break;
                case 'click':
                    __this.forEach((val, key) => {
                        val.addEventListener('click', function(e) { call(e); });
                    });
                    break;
                case 'dbclick':
                    __this.forEach((val, key) => {
                        val.addEventListener('dbclick', function(e) { call(e); });
                    });
                    break;
                case 'mousedown':
                    __this.forEach((val, key) => {
                        val.addEventListener('mousedown', function(e) { call(e); });
                    });
                    break;
                case 'mouseenter':
                    __this.forEach((val, key) => {
                        val.addEventListener('mouseenter', function(e) { call(e); });
                    });
                    break;
                case 'mouseleave':
                    __this.forEach((val, key) => {
                        val.addEventListener('mouseleave', function(e) { call(e); });
                    });
                    break;
                case 'mousemove':
                    __this.forEach((val, key) => {
                        val.addEventListener('mousemove', function(e) { call(e); });
                    });
                    break;
                case 'mouseover':
                    __this.forEach((val, key) => {
                        val.addEventListener('mouseover', function(e) { call(e); });
                    });
                    break;
                case 'mouseout':
                    __this.forEach((val, key) => {
                        val.addEventListener('mouseout', function(e) { call(e); });
                    });
                    break;
                case 'mouseup':
                    __this.forEach((val, key) => {
                        val.addEventListener('mouseup', function(e) { call(e); });
                    });
                    break;
                case 'drag':
                    __this.forEach((val, key) => {
                        val.addEventListener('drag', function(e) { call(e); });
                    });
                    break;
                case 'dragend':
                    __this.forEach((val, key) => {
                        val.addEventListener('dragend', function(e) { call(e); });
                    });
                    break;
                case 'dragenter':
                    __this.forEach((val, key) => {
                        val.addEventListener('dragenter', function(e) { call(e); });
                    });
                    break;
                case 'dragstart':
                    __this.forEach((val, key) => {
                        val.addEventListener('dragstart', function(e) { call(e); });
                    });
                    break;
                case 'dragleave':
                    __this.forEach((val, key) => {
                        val.addEventListener('dragleave', function(e) { call(e); });
                    });
                    break;
                case 'dragover':
                    __this.forEach((val, key) => {
                        val.addEventListener('dragover', function(e) { call(e); });
                    });
                    break;
                case 'drop':
                    __this.forEach((val, key) => {
                        val.addEventListener('drop', function(e) { call(e); });
                    });
                    break;
                case 'DOMContentLoaded':
                    __this.forEach((val, key) => {
                        val.addEventListener('DOMContentLoaded', function(e) { call(e); });
                    });
                    break;
                default:
                    break;
            }
        }
        /*data dom*/
        collection() {
            return Lavosted.dom(this.__application__);
        }
        height() {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                _array.push(val.offsetHeight);
            });
            return _array;
        }
        width() {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                _array.push(val.offsetWidth);
            });
            return _array;
        }
        parent() {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                _array.push(val.offsetParent);
            });
            return _array;
        }
        val(__data) {
            try {
                if (__data) {
                    let _array = [];
                    __this = Lavosted.dom(this.__application__);
                    __this.forEach((val, key) => {
                        val.value = __data;
                    });
                    return true;
                } else {
                    let _array = [];
                    __this = Lavosted.dom(this.__application__);
                    __this.forEach((val, key) => {
                        _array.push(val.value);
                    });
                    if (_array[0] == undefined) {
                        console.error('Type error : undefined data value');
                        return false;
                    } else {
                        return _array;
                    }
                }
            } catch (e) {
                console.error(e.message);
            }
        }
        remove() {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                val.remove();
            });
            return true;
        }
        attr(__name, __data) {
            if (__name && __data) {
                let _array = [];
                __this = Lavosted.dom(this.__application__);
                __this.forEach((val, key) => {
                    val.setAttribute(__name, __data);
                });
                return true;
            } else {
                let _array = [];
                __this = Lavosted.dom(this.__application__);
                __this.forEach((val, key) => {
                    _array.push(val.getAttribute(__name));
                });
                return _array;
            }
        }
        addClass(__name) {
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.add(v);
                });
            });
            return true;
        }
        removeClass(__name) {
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.remove(v);
                });
            });
            return true;
        }
        toggleClass(__name) {
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.toggle(v);
                });
            });
            return true;
        }
        text(__data) {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                val.innerText = __data;
            });
            return true;
        }
        html(__data) {
            let _array = [];
            __this = Lavosted.dom(this.__application__);
            __this.forEach((val, key) => {
                val.innerHTML = __data;
            });
            return true;
        }
        /*storage*/
        data(__data) {
            try {
                if (__data) {
                    if (typeof __data == 'object') {
                        if (__data.type == 'local') {
                            if (__data.methods == 'get') {
                                return localStorage.getItem(__data.name);
                            }
                            if (__data.methods == 'set') {
                                return localStorage.setItem(__data.name, __data.data);
                            }
                        }
                        if (__data.type == 'session') {
                            if (__data.methods == 'get') {
                                return sessionStorage.getItem(__data.name);
                            }
                            if (__data.methods == 'set') {
                                return sessionStorage.setItem(__data.name, __data.data);
                            }
                        }
                    } else {
                        var _array = [];
                        __this = Lavosted.dom(this.__application__);
                        __this.forEach((val, key) => {
                            _array.push(val.getAttribute('data-' + __data));
                        });
                        return _array;
                    }
                } else {
                    var _array = [];
                    __this = Lavosted.dom(this.__application__);
                    __this.forEach((val, key) => {
                        _array.push(val.getAttribute('data-' + __data));
                    });
                    return _array;
                }
            } catch (e) {
                console.error(e.message);
            }
        }
        /*date*/
        date() {
        	const __date = new Date();
        	const __data = {};
        	__data.date = function() { return __date.getDate(); }
        	__data.year = function() { return __date.getFullYear() }
        	__data.month = function() { return __date.getMonth(); }
        	__data.hours = function() { return __date.getHours(); }
        	__data.minutes = function() { return __date.getMinutes(); }
        	__data.seconds = function() { return __date.getSeconds(); }
        	__data.time = function() { return __date.getTime(); }
        	__data.now = function() { return __date; }
        	return Object.create(__data);
    	}
        /*json*/
        parse() { return JSON.parse(this.__application__); }
        stringify() { return JSON.stringify(this.__application__); }
        /*time*/
        interval(__call, __time) { setInterval(function() { __call(); }, __time); }
        timeout(__call, __time) { setTimeout(function() { __call(); }, __time); }
        /*array*/
        isArray() { if (typeof this.__application__ == 'object') { return true; } else { return false; } }
    }
    /*prototype*/
    Lavosted.prototype.database = Object.assign(___apps);
    /*instance*/
    L = function(__application__) {
        return new Lavosted(__application__);
    }
})();