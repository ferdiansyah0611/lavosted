(function(window) {
    const $apps = {};
    const $object = {};
    const $array = [];
    const $data_storage = [];
    var $this;

    class Lavosted {
        constructor(__application__) {
            this.__application__ = __application__;
            this.store = (__data__) => {
                return $apps.data = __data__;
            }
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
                        $data_storage['headers'] = data.headers.Authorization
                    }
                } catch (e) {
                    throw Error(e.stack);
                }
            }
        }
        src(source){
            $data_storage['resources'] = [];
            return {
                script: () =>{
                    window.addEventListener('DOMContentLoaded', function() {
                        const app = document.createElement('script');
                        app.type = 'text/javascript';
                        app.src = source;
                        document.body.appendChild(app);
                        $data_storage['resources'].push(source)
                    })
                },
                link: () =>{
                    window.addEventListener('DOMContentLoaded', function() {
                        const app = document.createElement('link');
                        app.rel = 'stylesheet';
                        app.type = 'text/css';
                        app.href = source;
                        document.head.appendChild(app);
                        $data_storage['resources'].push(source)
                    })
                },
                meta: () =>{
                    addEventListener('DOMContentLoaded', function() {
                        const app = document.createElement('meta');
                        app.name = source.name;
                        app.content = source.content;
                        document.head.appendChild(app);
                    })
                },
                style: () =>{
                    addEventListener('DOMContentLoaded', function() {
                        const app = document.createElement('style');
                        app.type = 'text/css';
                        app.innerText = source;
                        document.head.appendChild(app);
                    })
                }
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
            $this = Lavosted.dom(this.__application__);
            switch (__event__) {
                case 'click':
                    $this.forEach((val, key) => {
                        val.addEventListener('click', function(e) { call(e); });
                    });
                    break;
                case 'abort':
                    $this.forEach((val, key) => {
                        val.addEventListener('abort', function(e) { call(e); });
                    });
                    break;
                case 'load':
                    $this.forEach((val, key) => {
                        val.addEventListener('abort', function(e) { call(e); });
                    });
                    break;
                case 'beforeunload':
                    $this.forEach((val, key) => {
                        val.addEventListener('beforeunload', function(e) { call(e); });
                    });
                    break;
                case 'unload':
                    $this.forEach((val, key) => {
                        val.addEventListener('unload', function(e) { call(e); });
                    });
                    break;
                case 'online':
                    $this.forEach((val, key) => {
                        val.addEventListener('online', function(e) { call(e); });
                    });
                    break;
                case 'offline':
                    $this.forEach((val, key) => {
                        val.addEventListener('offline', function(e) { call(e); });
                    });
                    break;
                case 'focus':
                    $this.forEach((val, key) => {
                        val.addEventListener('focus', function(e) { call(e); });
                    });
                    break;
                case 'blur':
                    $this.forEach((val, key) => {
                        val.addEventListener('blur', function(e) { call(e); });
                    });
                    break;
                case 'focusin':
                    $this.forEach((val, key) => {
                        val.addEventListener('focusin', function(e) { call(e); });
                    });
                    break;
                case 'focusout':
                    $this.forEach((val, key) => {
                        val.addEventListener('focusout', function(e) { call(e); });
                    });
                    break;
                case 'reset':
                    $this.forEach((val, key) => {
                        val.addEventListener('reset', function(e) { call(e); });
                    });
                    break;
                case 'submit':
                    $this.forEach((val, key) => {
                        val.addEventListener('submit', function(e) { call(e); });
                    });
                    break;
                case 'change':
                    $this.forEach((val, key) => {
                        val.addEventListener('change', function(e) { call(e); });
                    });
                    break;
                case 'resize':
                    $this.forEach((val, key) => {
                        val.addEventListener('resize', function(e) { call(e); });
                    });
                    break;
                case 'scroll':
                    $this.forEach((val, key) => {
                        val.addEventListener('scroll', function(e) { call(e); });
                    });
                    break;
                case 'cut':
                    $this.forEach((val, key) => {
                        val.addEventListener('cut', function(e) { call(e); });
                    });
                    break;
                case 'paste':
                    $this.forEach((val, key) => {
                        val.addEventListener('paste', function(e) { call(e); });
                    });
                    break;
                case 'copy':
                    $this.forEach((val, key) => {
                        val.addEventListener('copy', function(e) { call(e); });
                    });
                    break;
                case 'keydown':
                    $this.forEach((val, key) => {
                        val.addEventListener('keydown', function(e) { call(e); });
                    });
                    break;
                case 'keyup':
                    $this.forEach((val, key) => {
                        val.addEventListener('keyup', function(e) { call(e); });
                    });
                    break;
                case 'keypress':
                    $this.forEach((val, key) => {
                        val.addEventListener('keypress', function(e) { call(e); });
                    });
                    break;
                case 'auxclick':
                    $this.forEach((val, key) => {
                        val.addEventListener('auxclick', function(e) { call(e); });
                    });
                    break;
                case 'click':
                    $this.forEach((val, key) => {
                        val.addEventListener('click', function(e) { call(e); });
                    });
                    break;
                case 'dbclick':
                    $this.forEach((val, key) => {
                        val.addEventListener('dbclick', function(e) { call(e); });
                    });
                    break;
                case 'mousedown':
                    $this.forEach((val, key) => {
                        val.addEventListener('mousedown', function(e) { call(e); });
                    });
                    break;
                case 'mouseenter':
                    $this.forEach((val, key) => {
                        val.addEventListener('mouseenter', function(e) { call(e); });
                    });
                    break;
                case 'mouseleave':
                    $this.forEach((val, key) => {
                        val.addEventListener('mouseleave', function(e) { call(e); });
                    });
                    break;
                case 'mousemove':
                    $this.forEach((val, key) => {
                        val.addEventListener('mousemove', function(e) { call(e); });
                    });
                    break;
                case 'mouseover':
                    $this.forEach((val, key) => {
                        val.addEventListener('mouseover', function(e) { call(e); });
                    });
                    break;
                case 'mouseout':
                    $this.forEach((val, key) => {
                        val.addEventListener('mouseout', function(e) { call(e); });
                    });
                    break;
                case 'mouseup':
                    $this.forEach((val, key) => {
                        val.addEventListener('mouseup', function(e) { call(e); });
                    });
                    break;
                case 'drag':
                    $this.forEach((val, key) => {
                        val.addEventListener('drag', function(e) { call(e); });
                    });
                    break;
                case 'dragend':
                    $this.forEach((val, key) => {
                        val.addEventListener('dragend', function(e) { call(e); });
                    });
                    break;
                case 'dragenter':
                    $this.forEach((val, key) => {
                        val.addEventListener('dragenter', function(e) { call(e); });
                    });
                    break;
                case 'dragstart':
                    $this.forEach((val, key) => {
                        val.addEventListener('dragstart', function(e) { call(e); });
                    });
                    break;
                case 'dragleave':
                    $this.forEach((val, key) => {
                        val.addEventListener('dragleave', function(e) { call(e); });
                    });
                    break;
                case 'dragover':
                    $this.forEach((val, key) => {
                        val.addEventListener('dragover', function(e) { call(e); });
                    });
                    break;
                case 'drop':
                    $this.forEach((val, key) => {
                        val.addEventListener('drop', function(e) { call(e); });
                    });
                    break;
                case 'DOMContentLoaded':
                    $this.forEach((val, key) => {
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
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                _array.push(val.offsetHeight);
            });
            return _array;
        }
        width() {
            let _array = [];
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                _array.push(val.offsetWidth);
            });
            return _array;
        }
        parent() {
            let _array = [];
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                _array.push(val.offsetParent);
            });
            return _array;
        }
        val(__data) {
            try {
                if (__data) {
                    let _array = [];
                    $this = Lavosted.dom(this.__application__);
                    $this.forEach((val, key) => {
                        val.value = __data;
                    });
                    return true;
                } else {
                    let _array = [];
                    $this = Lavosted.dom(this.__application__);
                    $this.forEach((val, key) => {
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
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                val.remove();
            });
            return true;
        }
        attr(__name, __data) {
            if (__name && __data) {
                let _array = [];
                $this = Lavosted.dom(this.__application__);
                $this.forEach((val, key) => {
                    val.setAttribute(__name, __data);
                });
                return true;
            } else {
                let _array = [];
                $this = Lavosted.dom(this.__application__);
                $this.forEach((val, key) => {
                    _array.push(val.getAttribute(__name));
                });
                return _array;
            }
        }
        addClass(__name) {
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.add(v);
                });
            });
            return true;
        }
        removeClass(__name) {
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.remove(v);
                });
            });
            return true;
        }
        toggleClass(__name) {
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                var _split = __name.split(' ');
                _split.forEach((v, k) => {
                    val.classList.toggle(v);
                });
            });
            return true;
        }
        text(__data) {
            let _array = [];
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
                val.innerText = __data;
            });
            return true;
        }
        html(__data) {
            let _array = [];
            $this = Lavosted.dom(this.__application__);
            $this.forEach((val, key) => {
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
                        $this = Lavosted.dom(this.__application__);
                        $this.forEach((val, key) => {
                            _array.push(val.getAttribute('data-' + __data));
                        });
                        return _array;
                    }
                } else {
                    var _array = [];
                    $this = Lavosted.dom(this.__application__);
                    $this.forEach((val, key) => {
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
        	var __date = new Date(),__data = {};
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
        form() {
            var app = Lavosted.dom(this.__application__)[0],array_value = [],array_name = []
            for (var i = 0; i < app.length; i++) {
                var name = app[i].getAttribute('name');array_value.push(app[i].value);array_name.push(app[i].name);;;;;
                if(name == null){
                    throw('error : null attribute name in ' + this.__application__);
                }
            }
            return {
                serialize : () =>{
                    return array_value.join('&')
                },
                validation : (__data) =>{
                    for (var i = 0; i < __data.length; i++) {
                        console.log(__data[i])
                        if(array_name.find(val => val == __data[i].name)){
                            if(Array.isArray(__data[i].count) && Array.isArray(__data[i].maxMessage) && Array.isArray(__data[i].minMessage)){
                                var max = __data[i].count[1], min = __data[i].count[0], query = document.querySelector('.lavosted[name="' + __data[i].name + '"]')
                                , maxError = __data[i].maxMessage, minError = __data[i].minMessage;
                                document.querySelector('input[name="' + __data[i].name + '"]').addEventListener('keyup', event => {
                                    if(event.target.value.length > max) {
                                        document.querySelector(maxError[0]).innerHTML = maxError[1];
                                        document.querySelector(maxError[0]).style.display = 'inline';
                                    }
                                    if(event.target.value.length < min) {
                                        document.querySelector(minError[0]).innerHTML = minError[1];
                                        document.querySelector(maxError[0]).style.display = 'inline';
                                    }
                                    if(event.target.value.length < max && event.target.value.length > min) {
                                        document.querySelector(maxError[0]).innerHTML = '';
                                        document.querySelector(maxError[0]).style.display = 'none';
                                    }
                                })
                            }
                        }
                    }
                },
                array : (type) =>{
                    if(type == 'name'){
                        return array_name;
                    }
                    if(type == 'value'){
                        return array_value;
                    }
                }
            }
        }
    }
    /*prototype*/
    Lavosted.prototype.database = Object.assign($apps);
    /*instance*/
    L = function(__application__) {
        return new Lavosted(__application__);
    }
})();