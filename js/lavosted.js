/*LAVOSTED JS BETA VERSION
FERDIANSYAH
MIT LICENSED 2020 COPYRIGHT
FIRST WORKING : 25 MARCH 2020
RELEASED ??? @version 1.0
*/
(function(){
'use strict';
/*DATATYPE*/
var typedata = ['string', 'undefined', 'number', 'function', 'object', 'boolean', 'null'];
/*ALL LAVOSTED FUNCTION*/
class $LV {
    /*CONSTRUCTOR DATA*/
    constructor() {
        this.bug = {
            log:function(data){
                console.log(data);
            },
            err:function(data){
                console.error(data);
            },
            warn:function(data){
                console.warn(data);
            },
            throw:function(data){
                throw Error(data);
            },
            info:function(data){
                console.info(data);
            },
            trace:function(data){
                console.trace(data);
            },
            clear:function(data){
                console.clear(data);
            },
            group:function(data){
                console.group(data);
            },
        };
        /*this.spa = function(type, classes, list){
            $LV.singlePage(type, classes, list)
        }*/
    }
    /*INITIAL DATA*/
    initial(data) {
            if (data.csrf) {
                if (data.csrf.name || data.csrf.token) {
                    this.security(data.csrf.name, data.csrf.token);
                }
            }
            if (data.frontend) {
                if (data.frontend.css) {
                    const style = document.createElement('link');
                    style.src = data.frontend.css;
                    style.rel = 'stylesheet';
                    document.head.appendChild(style);
                }
                if (data.frontend.js) {
                    if (data.frontend.crossoriginJs) {
                        const script = document.createElement('link');
                        script.src = data.frontend.js;
                        script.rel = 'stylesheet';
                        script.crossorigin = data.frontend.crossoriginJs;
                        document.head.appendChild(script);
                    } else {
                        const script = document.createElement('link');
                        script.src = data.frontend.js;
                        script.rel = 'stylesheet';
                        document.head.appendChild(script);
                    }
                }
            }
            if (data.responsive) {
                if (data.responsive == true) {
                    const meta = document.createElement('meta');
                    meta.name = 'viewport';
                    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no';
                    document.head.appendChild(meta);
                } else {
                    return false;
                }
            }
            if (data.perfomance) {
                if (data.perfomance.cache == true) {
                    if(data.perfomance.urlLavosted == '/'){
                        if ('serviceWorker' in navigator) {
                            window.addEventListener("load", function() {
                                navigator.serviceWorker.register('./js/service.js')
                                    .then(function() {
                                        $.bug.log('serviceworker registration success');
                                    })
                                    .catch(function() {
                                        $.bug.err('serviceworker registration failed');
                                    });
                            });
                        } else {
                            console.log('ServiceWorker not supported in this browser');
                        }
                    }
                    else{
                        if ("serviceWorker" in navigator) {
                            window.addEventListener("load", function() {
                                navigator.serviceWorker.register(data.perfomance.urlLavosted + '/js/service.js')
                                .then(function() {
                                    $.bug.log('serviceworker registration success');
                                }).catch(function() {
                                    $.bug.err('serviceworker registration failed');
                                });
                            });
                        } else {
                            console.log("ServiceWorker not supported in this browser");
                        }
                    }
                }
            }
            if (data.notification) {
                if (data.notification.status == true) {
                    if (!("Notification" in window)) {
                        debug.m('log', "This browser does not support desktop notification");
                    } else if (Notification.permission !== 'denied' || Notification.permission === "default") {
                        Notification.requestPermission(function(permission) {
                            if (permission === "granted") {
                                var notification = new Notification("Thanks your for activated notification");
                            }
                        });
                    }
                }
            }
            if(data.multiLanguange == true)
            {
                return window.navigator.languange;
            }
            if(data.run)
            {
                if(data.run == 'development')
                {
                    console.info('You are running Lavosted in development mode. Make sure to turn on production mode when deploying for production');

                } else {
                }
            }
            window.addEventListener('DOMContentLoaded', function(){
                if(window.location.hash)
                {

                }
                else{

                }
            });
        }
        /*FETCH API*/
    async api(method, url, data, custom = '') {
            try {
                if (typeof method == typedata[0]) {
                    if (typeof url == typedata[0]) {
                        if (method == 'get' || method == 'Get' || method == 'GET') {
                            try{
                                const get = fetch(url).then(response => {
                                    if (response.status == 200 || response.status < 200) {
                                        if (typeof response == 'undefined') {
                                            $.bug.err('undefined get data');
                                        } else {
                                            return response.json();
                                        }
                                    }
                                    if (response.status == 404) {
                                        $.bug.err('url not founds');
                                    }
                                    if (response.status == 403) {
                                        $.bug.err('url not allowed');
                                    } 
                                    else {
                                        $.bug.err('error');
                                    }
                                });
                                return await get;
                            }catch(e){
                                $.bug.err(e);
                            }
                        }
                        if (method == 'post' || method == 'Post' || method == 'POST' || method == 'update' || method == 'Update' || method == 'UPDATE' || method == 'delete' || method == 'Delete' || method == 'DELETE') {
                            return new Promise(function (resolve, reject) {
                                var xhr = new XMLHttpRequest();
                                xhr.open(method, url);
                                xhr.onload = function () {
                                    if (this.status >= 200 && this.status < 300) {
                                        console.log(xhr)
                                        resolve(xhr.response);
                                    }
                                    else{
                                        reject({
                                            status: this.status,
                                            statusText: xhr.statusText
                                        });
                                    }
                                };
                                /*XHR ON ERROR*/
                                xhr.onerror = function () {
                                    reject({
                                        status: this.status,
                                        statusText: xhr.statusText
                                    });
                                };
                                /*XHR ON ABORT*/
                                xhr.onabort = function () {
                                    throw Error('Abort request');
                                };
                                /*XHR SEND REQUEST*/
                                xhr.send(new FormData(data));
                            });
                        } else {

                        }
                    } else {

                    }
                } else {
                    $.bug.err('Method must be string');
                }

            } catch (e) {
                $.bug.err(e)
            }
        }
        /*FOREACH DATA*/
    async each(data) {
            for (var i = 0; i < data.length; i++) {
                return data[i];
            }
        }
        /*PARSE DATA*/
    parse(data) {
            return JSON.parse(data);
        }
        /*STRINGIFY DATA*/
    stringify(data) {
            return JSON.stringify(data);
        }
        /*VALIDATION INPUT*/
    validation(data) {
            try {
            	if(typeof data == 'object')
            	{
	            	for(var key in data)
	            	{
	            		const nameForm 	= data[key][0];
	            		const nameInput = data[key][1];
	            		const minInput 	= data[key][2];
	            		const maxInput 	= data[key][3];
	            		const typeInput = data[key][4];
	            		const idError 	= data[key][5];
                        if(idError == undefined){
                            $.bug.throw(idError)
                        }
	            		document.getElementById(idError).style.display = 'none';
	            		if(typeInput == 'text' || typeInput == 'number')
	            		{
	            			const dataInput = document.getElementsByName(nameInput)[0];
	            			dataInput.setAttribute('type',typeInput);
	            			dataInput.setAttribute('minlength', minInput);
	            			dataInput.setAttribute('maxlength', maxInput);
	            		}
		            	document.forms[nameForm][nameInput].addEventListener('keyup', function(){
		            		var leng = this.value;
        		             var id = document.getElementById(idError);
        		             /*NOT HAVE VALUE*/
        		             if (leng.length == 0) {
        		                 id.style.display = 'block';
        		                 id.style.color = 'red';
                                 if(window.$.initial.multiLanguange == true)
                                 {
                                    var langDefault = window.navigator.languange;
                                    if(langDefault == 'id')
                                    {
                                        id.innerHTML = 'Tolong masukkan data '+typeInput+' minimal ' + minInput;
                                    }
                                    if(langDefault == 'en')
                                    {
                                        id.innerHTML = 'Please input keyword '+typeInput+' min ' + minInput;
                                    }
                                    if(langDefault == 'en-US')
                                    {
                                        id.innerHTML = 'Please input keyword '+typeInput+' min ' + minInput;
                                    }else{
                                        id.innerHTML = 'Please input keyword '+typeInput+' min ' + minInput;
                                    }
                                 }else{
                                    id.innerHTML = 'Please input keyword '+typeInput+' min ' + minInput;
                                 }
        		             }
        		             /*MIN*/
        		             else if (leng.length <= minInput) {
        		                 id.style.display = 'block';
        		                 id.style.color = 'red';
        		                 id.innerHTML = 'Please input keyword '+typeInput+' min ' + minInput;
        		             }
        		             /*MIDDLE*/
        		             else if (leng.length <= maxInput) {
        		                 id.style.display = 'block';
        		                 id.style.color = 'green';
        		                 id.innerHTML = 'Data correctly';
        		             }
        		             /*MAX*/
        		             else if (leng.length > maxInput) {
        		                 id.style.display = 'block';
        		                 id.style.color = 'red';
        		                 id.innerHTML = 'Please input keyword '+typeInput+' max ' + maxInput;
        		             }
		            	});
	            		
	            	}
            	}
            	else{

            	}
            } catch (e) {
            	$.bug.log(e);
            }
        }
        /*SECURITY FORMS*/
    security(csrf, token) {
            var form = document.getElementsByClassName('form');
            for (var i = 0; i < document.getElementsByClassName('form').length; i++) {
                var create = document.createElement('input');
                create.type = 'hidden';
                create.value = token;
                create.name = csrf;
                form[i].appendChild(create);
            }
        }
        /*DOM MANIPULATION*/
    appendTo(type, selector = '', data = {}) {
        /*RENDER HTML*/
        if (data.append == 'html') {
            if (type == 'class') {
                document.getElementsByClassName(selector).innerHTML = data.fill;
            }
            if (type == 'id') {
                document.getElementById(selector).innerHTML = data.fill;
            }
        }
        /*RENDER CSS*/
        if (type == 'style') {
            var style = document.createElement('style');
            style.innerText = data.fill;
            style.type = 'text/css';
            document.head.appendChild(style);
        }
        /*APPEND VALUE*/
        if (type == 'input') {
            if (type == 'class') {
                document.getElementsByClassName(selector).innerText = document.getElementsByName(data.name)[0].value;
            }
            if (type == 'id') {
                document.getElementById(selector).innerText = document.getElementsByName(data.name)[0].value;
            }
        }
    }
    append(data)
    {
        try{
            if(data == undefined || data == '' || data == null)
            {
                throw Error('Undefined element or data append');
            }
        	if(typeof data == 'object')
        	{
        		for(var key in data)
        		{
        			const dataKey = data[key].split('|');
        			const query = document.querySelectorAll(dataKey[0]);
        			for (var i = 0; i < query.length; i++) {
        				query[i].innerHTML = query[i].innerHTML+dataKey[1];
        			}
        		}
        	}
        	else{
        		const key = data.split('|');
        		const query = document.querySelectorAll(key[0]);
        		for (var i = 0; i < query.length; i++) {
        			query[i].innerHTML = query[i].innerHTML+key[1];
        		}
        	}
        }catch(e) {

        }
    }
    dom(get, data)
    {
        try{
            return new Promise(function(resolve, reject){
                resolve(document.body.querySelectorAll(get))
            });
        }catch(e){
            $.bug.err(e)
        }
    }
    html(classes, data)
    {
        try{
            if(typeof classes == 'object') {
                for(var i in classes){
                    document.body.querySelector(classes[i][0]).innerHTML = classes[i][1];
                }
            }else if(typeof classes == 'string'){
                document.body.querySelector(classes).innerHTML = data;
            }
        }catch(e){
            $.bug.err(e)
        }
    }
    htmlAll(classes, data)
    {
        try{
            if(typeof classes == 'object') {
                for(var i in classes){
                    document.body.querySelectorAll(classes[i][0]).innerHTML = classes[i][1];
                }
            }else if(typeof classes == 'string'){
                document.body.querySelectorAll(classes).innerHTML = data;
            }
        }catch(e){
            $.bug.err(e)
        }
    }
    css(style, data)
    {
        try{
            if(typeof style == 'object') {
                for(var i in style){
                    document.body.querySelector(style[i][0]).innerHTML = style[i][1];
                }
            }else if(typeof style == 'string'){
                var splitData = data.split('|');
                for (var i = 0; i < splitData.length; i++) {
                    console.log(splitData[i]);
                    var splitData2 = splitData[i].split(':');
                    for (var i2 = 0; i2 < splitData2.length; i2++) {
                        console.log(splitData2[i2])
                    }
                }
            }
        }catch(e){
            $.bug.err(e)
        }
    }
    /*SINGLE PAGE APPLICATION
    Have default no define classes and type
    */
    spa = (type, classes, list) =>
    {
        const historyUrl = {
            call:function(type, url, title, progress){
                if(type == 'push')
                {
                    /*TITLE SUPPORT ALL BROWSER*/
                    window.title = title;
                    const slug = url.split(' ').join('-');
                    /*TITLE SUPPORT SAFARI|REPLACE STATE SUPPORT ALL BROWSER EXCEPT WITHOUT SERVER*/
                    window.history.pushState('',title,'#!/'+slug);
                }
                if(type == 'replace')
                {
                    /*TITLE SUPPORT ALL BROWSER*/
                    window.title = title;
                    const slug = url.split(' ').join('-');
                    /*TITLE SUPPORT SAFARI|REPLACE STATE SUPPORT ALL BROWSER EXCEPT WITHOUT SERVER*/
                    window.history.replaceState('',title,'#!/'+slug);
                }
            }
        }
        const url = {
            /*FOR DEFAULT*/
            default:function(){
                /*CLASS HTML DEFAULT*/
                var classed = document.getElementsByClassName('lv-url');
                $.bug.log('default');
                for (var i = 0; i < classed.length; i++) {
                    classed[i].addEventListener('click', function(event){
                        event.preventDefault();
                        if(window.location.hash){
                            if(window.location.hash == url)
                            {
                                return false;
                            }else{

                            }
                        }
                        else {
                            let url = this.dataset.url;
                            let title = this.dataset.title;
                            historyUrl.call('push', url, title,'');

                        }
                    });
                }
            },
            /*FOR CUSTOM PUSH*/
            push:function(){
                $.bug.log('default');
            },
            /*FOR CUSTOM REPLACE*/
            replace:function(){

            },
        }
        if(type == 'default')
        {
            url.default();
        }
        /*NOT DEFAULT*/
        else{
            /*CLASSES OBJECT*/
            if(typeof classes == 'object')
            {
                /*LIST OBJECT*/
                if(typeof list == 'object')
                {
                    if(type == 'push')
                    {

                    }
                    if(type == 'replace')
                    {

                    }
                    if(type == 'default')
                    {
                        this.default();
                    }
                    else{

                    }
                }
                /*LIST NOT OBJECT*/
                else{
                    if(type == 'push')
                    {

                    }
                    if(type == 'replace')
                    {

                    }
                    if(type == 'default')
                    {
                        this.default();
                    }
                    else{

                    }
                }
            }
            /*CLASSES NOT OBJECT*/
            else{

            }
        }
    }
}
window.$ = new $LV();
})()