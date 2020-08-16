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
    src(source) {
        $data_storage['resources'] = [];
        return {
            script: () => {
                window.addEventListener('DOMContentLoaded', function() {
                    const app = document.createElement('script');
                    app.type = 'text/javascript';
                    app.src = source;
                    document.body.appendChild(app);
                    $data_storage['resources'].push(source)
                })
            },
            link: () => {
                window.addEventListener('DOMContentLoaded', function() {
                    const app = document.createElement('link');
                    app.rel = 'stylesheet';
                    app.type = 'text/css';
                    app.href = source;
                    document.head.appendChild(app);
                    $data_storage['resources'].push(source)
                })
            },
            meta: () => {
                addEventListener('DOMContentLoaded', function() {
                    const app = document.createElement('meta');
                    app.name = source.name;
                    app.content = source.content;
                    document.head.appendChild(app);
                })
            },
            style: () => {
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
    static listevent() {
        return [
            'animationend', 'animationiteration', 'animationstart', 'beginEvent', 'endEvent', 'repeatEvent',
            'chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange',
            'alerting', 'busy', 'callschanged', 'cfstatechange', 'connected', 'connecting', 'dialing', 'disconnected', 'disconnecting', 'error', 'held', 'holding', 'incoming', 'resuming', 'statechange', 'voicechange',
            'CssRuleViewRefreshed', 'CssRuleViewChanged', 'CssRuleViewCSSLinkClicked', 'transitionend',
            'abort', 'blocked', 'complete', 'success', 'upgradeneeded', 'versionchange',
            'DOMLinkAdded', 'DOMLinkRemoved', 'DOMMetaAdded', 'DOMMetaRemoved', 'DOMWillOpenModalDialog', 'DOMModalDialogClosed', 'unload',
            'DOMAttributeNameChanged', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMContentLoaded', 'DOMElementNameChanged', 'DOMNodeInserted', 'DOMNodeInsertedIntoDocument', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMSubtreeModified',
            'drag', 'dragdrop', 'dragend', 'dragenter', 'dragexit', 'draggesture', 'dragleave', 'dragover', 'dragstart', 'drop',
            'invalid', 'overflow', 'underflow', 'DOMAutoComplete', 'command', 'commandupdate',
            'blur', 'change', 'DOMFocusIn', 'DOMFocusOut', 'focus', 'focusin', 'focusout',
            'reset', 'submit',
            'mozbrowserclose', 'mozbrowsercontextmenu', 'mozbrowsererror', 'mozbrowsericonchange', 'mozbrowserlocationchange', 'mozbrowserloadend', 'mozbrowserloadstart', 'mozbrowseropenwindow', 'mozbrowsersecuritychange', 'mozbrowsershowmodalprompt', 'mozbrowsertitlechange', 'DOMFrameContentLoaded',
            'click', 'dbclick', 'contextmenu', 'DOMMouseScroll', 'dblclick', 'gamepadconnected', 'gamepaddisconnected', 'keydown', 'keypress', 'keyup', 'MozGamepadButtonDown', 'MozGamepadButtonUp', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'MozMousePixelScroll', 'pointerlockchange', 'pointerlockerror', 'wheel',
            'audioprocess', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'ended', 'loadeddata', 'loadedmetadata', 'MozAudioAvailable', 'pause', 'play', 'playing', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting', 'complete',
            'DOMMenuItemActive', 'DOMMenuItemInactive',
            'datachange', 'dataerror', 'disabled', 'enabled', 'offline', 'online', 'statuschange', 'connectionInfoUpdate',
            'pointerover', 'pointerenter', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'pointerout', 'pointerleave', 'gotpointercapture', 'lostpointercapture',
            'afterprint', 'beforeprint',
            'load', 'beforeunload', 'loadend', 'loadstart', 'progress', 'timeout', 'uploadprogress',
            'compositionend', 'compositionstart', 'compositionupdate', 'copy', 'cut', 'paste', 'select', 'text',
            'touchcancel', 'touchend', 'touchenter', 'touchleave', 'touchmove', 'touchstart',
            'fullscreen', 'fullscreenchange', 'fullscreenerror', 'MozEnteredDomFullscreen', 'MozScrolledAreaChanged', 'resize', 'scroll', 'sizemodechange',
        ]
    }
    /*ajax*/
    ajax(object = {}) {
        let data = {};
        var list_methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            list_type = ['', 'arraybuffer', 'blob', 'document', 'json', 'text', 'ms-stream']
        if (list_methods.find(data => data == object.method)) {
            try {
                let xhr = new XMLHttpRequest();
                if (object.type) {
                    xhr.responseType = object.type;
                }
                if (!object.type) {
                    xhr.responseType = 'json';
                }

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
                    xhr.open(object.method, object.url, true);
                }
                /*no cache*/
                if (object.cache == false || object.cache == null || object.cache == undefined) {
                    xhr.open(object.method, object.url + '?_=' + new L().date().time(), true)
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
    }
    on(__event__, call, boolean) {
        $this = Lavosted.dom(this.__application__);
        var event_type = typeof __event__,
            call_type = typeof call,
            event_js = Lavosted.listevent();
        if (event_type == 'string') {
            if (event_js.find(event => event == __event__)) {
                if (call_type == 'function') {
                    $this.forEach((val, key) => {
                        val.addEventListener(__event__, function(e) {
                            call(e);
                        }, boolean);
                    });
                } else {
                    throw Error(`parameter 2 is not a function.`)
                }
            }
        } else {
            throw Error(`parameter 1 is not a string.`)
        }
    }
    removeEvent(__event__, call, boolean) {
        $this = Lavosted.dom(this.__application__);
        var event_type = typeof __event__,
            call_type = typeof call,
            event_js = Lavosted.listevent();
        if (event_type == 'string') {
            if (event_js.find(event => event == __event__)) {
                if (call_type == 'function') {
                    $this.forEach((val, key) => {
                        val.removeEventListener(__event__, function(e) {
                            call(e);
                        }, boolean);
                    });
                } else {
                    throw Error('parameter 2 is not a function.')
                }
            }
        } else {
            throw Error('parameter 1 is not a string.')
        }
    }
    style(__data__) {
        let _array = [];
        $this = Lavosted.dom(this.__application__);
        if (typeof __data__ == 'string') {
            $this.forEach((val, key) => {
                if (val.getAttribute('style') !== null) {
                    val.setAttribute('style', val.getAttribute('style') + __data__);
                    _array.push(val.getAttribute('style') + __data__);
                }
            })
            return _array;
        } else {
            throw Error('parameter 1 is not a string.')
        }
    }
    push(...__data__) {
        $this = this.__application__;
        var data = '';
        // parameter tambah data dengan L(Array)
        // find array yg sama dengan parameter lakukan throw jika tidak sama return
        if (Array.isArray($this)) {
            __data__.forEach(valueD => {
                if ($this.find(data => data == valueD)) {
                    throw Error('parameter is unique to its main array and cannot be the same value.');
                } else {
                    data = $this.concat(__data__);
                }
            })
            return data;
        } else {
            throw Error('L() parameter 1 is not a array.');
        }
    }
    async findArray(__find__) {
        $this = this.__application__;
        if (Array.isArray($this)) {
            return new Promise((resolve, reject) => {
                if (typeof __find__ == 'string') {
                    if ($this.find(_data => _data == __find__)) {
                        resolve(__find__);
                    } else {
                        reject('No data founds');
                    }
                } else {
                    reject('parameter 1 not have a value');
                }
            })
        } else {
            throw Error('L() parameter 1 is not a array');
        }
    }
    isArray() {
        if (Array.isArray(this.__application__)) {
            return true;
        } else {
            false
        }
    }
    fragment(__element__, __data__) {
        var fragment = new DocumentFragment()
        $this = Lavosted.dom(this.__application__);
        $this.forEach((val, key) => {
            var element = document.createElement(__element__);
            element.innerHTML = __data__;
            fragment.appendChild(element);
            val.appendChild(fragment)
        });
    }
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
    addClass(...__name) {
        $this = Lavosted.dom(this.__application__);
        var application = this.__application__;
        $this.forEach((val, key) => {
            val.classList.add(...__name);
        });
        return {
            removeClass: (...__name) => {
                return new Lavosted(application).removeClass(...__name);
            },
            toggleClass: (...__name) => {
                return new Lavosted(application).toggleClass(...__name);
            },
            text: (__data) => {
                return new Lavosted(application).text(__data);
            },
            html: (__data) => {
                return new Lavosted(application).html(__data);
            },
            data: (__data) => {
                return new Lavosted(application).data(__data);
            }
        }
    }
    removeClass(...__name) {
        $this = Lavosted.dom(this.__application__);
        var application = this.__application__;
        $this.forEach((val, key) => {
            val.classList.remove(...__name);
        });
        return {
            addClass: (...__name) => {
                return new Lavosted(application).addClass(...__name);
            },
            toggleClass: (...__name) => {
                return new Lavosted(application).toggleClass(...__name);
            },
            text: (__data) => {
                return new Lavosted(application).text(__data);
            },
            html: (__data) => {
                return new Lavosted(application).html(__data);
            },
            data: (__data) => {
                return new Lavosted(application).data(__data);
            }
        }
    }
    toggleClass(...__name) {
        $this = Lavosted.dom(this.__application__);
        var application = this.__application__;
        $this.forEach((val, key) => {
            val.classList.toggle(...__name);
        });
        return {
            addClass: (...__name) => {
                return new Lavosted(application).addClass(...__name);
            },
            removeClass: (...__name) => {
                return new Lavosted(application).removeClass(...__name);
            },
            text: (__data) => {
                return new Lavosted(application).text(__data);
            },
            html: (__data) => {
                return new Lavosted(application).html(__data);
            },
            data: (__data) => {
                return new Lavosted(application).data(__data);
            }
        }
    }
    text(__data) {
        let _array = [];
        $this = Lavosted.dom(this.__application__);
        var application = this.__application__;
        $this.forEach((val, key) => {
            val.textContent = __data;
        });
        return {
            addClass: (...__name) => {
                return new Lavosted(application).addClass(...__name);
            },
            removeClass: (...__name) => {
                return new Lavosted(application).removeClass(...__name);
            },
            toggleClass: (__data) => {
                return new Lavosted(application).toggleClass(__data);
            },
            html: (__data) => {
                return new Lavosted(application).html(__data);
            },
            data: (__data) => {
                return new Lavosted(application).data(__data);
            }
        }
    }
    html(__data) {
        let _array = [];
        $this = Lavosted.dom(this.__application__);
        var application = this.__application__;
        $this.forEach((val, key) => {
            val.innerHTML = __data;
        });
        return {
            addClass: (...__name) => {
                return new Lavosted(application).addClass(...__name);
            },
            removeClass: (...__name) => {
                return new Lavosted(application).removeClass(...__name);
            },
            toggleClass: (__data) => {
                return new Lavosted(application).toggleClass(__data);
            },
            text: (__data) => {
                return new Lavosted(application).text(__data);
            },
            data: (__data) => {
                return new Lavosted(application).data(__data);
            }
        }
    }
    data(__data) {
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
        }
        if (!__data) {
            throw Error('parameter 1 not have a value');
        }
    }
    date() {
        var __date = new Date(),
            __data = {};
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
    parse() { return JSON.parse(this.__application__); }
    stringify() { return JSON.stringify(this.__application__); }
    interval(__call, __time) {
        if (typeof __call == 'function') {
            if (typeof __time == 'number') {
                setInterval(function() {
                    __call();
                }, __time);
            } else {
                throw Error('parameter 2 is not a number');
            }
        } else {
            throw Error('parameter 2 is not a function')
        }
    }
    timeout(__call, __time) {
        if (typeof __call == 'function') {
            if (typeof __time == 'number') {
                setTimeout(function() {
                    __call();
                }, __time);
            } else {
                throw Error('parameter 2 is not a number');
            }
        } else {
            throw Error('parameter 2 is not a function')
        }
    }
    form() {
        var app = Lavosted.dom(this.__application__)[0],
            array_value = [],
            array_name = [];
        for (var i = 0; i < app.length; i++) {
            var name = app[i].getAttribute('name');
            array_value.push(app[i].value);
            array_name.push(app[i].name);
            if (name == null) {
                throw ('error : null attribute name in ' + this.__application__);
            }
        }
        return {
            serialize: () => {
                return array_value.join('&')
            },
            validation: (__data) => {
                for (var i = 0; i < __data.length; i++) {
                    console.log(__data[i])
                    if (array_name.find(val => val == __data[i].name)) {
                        if (Array.isArray(__data[i].count) && Array.isArray(__data[i].maxMessage) && Array.isArray(__data[i].minMessage)) {
                            var max = __data[i].count[1],
                                min = __data[i].count[0],
                                query = document.querySelector('.lavosted[name="' + __data[i].name + '"]'),
                                maxError = __data[i].maxMessage,
                                minError = __data[i].minMessage;
                            document.querySelector('input[name="' + __data[i].name + '"]').addEventListener('keyup', event => {
                                var queryMax = document.querySelector(maxError[0]),
                                    queryMin = document.querySelector(minError[0]);
                                if (event.target.value.length > max) {
                                    queryMax.innerHTML = maxError[1];
                                    queryMax.style.display = 'inline';
                                }
                                if (event.target.value.length < min) {
                                    queryMin.innerHTML = minError[1];
                                    queryMax.style.display = 'inline';
                                }
                                if (event.target.value.length < max && event.target.value.length > min) {
                                    queryMax.innerHTML = '';
                                    queryMax.style.display = 'none';
                                }
                            })
                        }
                    }
                }
            },
            array: (type) => {
                if (type == 'name') {
                    return array_name;
                }
                if (type == 'value') {
                    return array_value;
                }
            }
        }
    }
}

Lavosted.prototype.database = Object.assign($apps);
window.L = function(__application__) {
    return new Lavosted(__application__);
}
window.Lv = new Lavosted();