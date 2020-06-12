'use strict';
/**
 * @host ferdiansyah0611.github.com
 * @version 1.0
 * @license MIT
 */

 /*
$defaults = [
1: headers
]
 */
var active = {};
active.resources_css = [];
active.resources_js = [];
active.resources_meta = [];
class L{
	constructor()
	{
        /*store ex: headers*/
        this.$apps = [];
        /*store data*/
        this.data = [];
        this.active = function(app)
        {
            return Object.create(app);
        }
        /*doms*/
        this.dom = function()
        {
            var data = {};
            data.id = function(defined)
            {
                var data_id = {};
                data_id.get = function(){
                    return document.getElementById(defined);
                }
                data_id.height = function(){
                    return document.getElementById(defined).offsetHeight;
                }
                data_id.width = function(){
                    return document.getElementById(defined).offsetWidth;
                }
                data_id.parent = function(){
                    return document.getElementById(defined).offsetParent;
                }
                data_id.val = function(append = ''){
                    if(append !== ''){
                        return document.getElementById(defined).value = append
                    }else{
                        return document.getElementById(defined).value;
                    }
                }
                data_id.serialize = function(){
                    
                }
                data_id.del = function(){
                    return document.getElementById(defined).remove();
                }
                data_id.attr = function(append = '', value = ''){
                    var app = document.getElementById(defined).getAttribute(append);
                    if(app == null){
                        throw Error('parameter exception');
                    }
                    if(append !== ''){
                        if(value !== ''){
                            document.getElementById(defined).setAttribute(append, value);
                        }else{
                            return false;
                        }
                    }else{
                        throw ReferenceError('value not recommended null');
                    }
                }
                data_id.addClass = function()
                {

                }
                return Object.create(data_id);
            }
            data.class = function(defined)
            {
                return document.getElementsByClassName(defined);
            }
            data.name = function()
            {
                return document.getElementsByName(data);
            }
            data.query = function()
            {
                return document.querySelectorAll(data);
            }
            return Object.create(data);
        }
        this.url = {
            on : function(){
                return window.location.href;
            }
        }
    }
    /**
    * @function store
    * @version 1.0
    * @param {*} data
    **/
    set store(data)
    {
        return this.data.push(data);
    }
    /**
     * @function init
     * @version 1.0
     * @param {*} data 
     */
	init(data)
	{
        try{
            if(data.csrf !== undefined) {
                if (data.csrf.name || data.csrf.token) {
                    this.security(data.csrf.name, data.csrf.token);
                }
            }
            if(data.run !== undefined) {
                if(data.run == 'development')
                {
                    console.groupCollapsed('Information');
                    console.info('You are running Lavosted in development mode.');
                    console.info('Make sure to turn on production mode when deploying for production');
                    console.groupEnd();
                }
                else if(data.run == 'production'){
                }
            }
            if(data.responsive !== undefined) {
                this.src({name : 'viewport', content : 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no'}).meta();
                this.src('./css/__responsive.css').link();
            }
            if(data.headers !== undefined) {
                this.$apps[1] = data.headers.Authorization;
            }
            if(data.form !== undefined) {
                this.src('./css/__form.css').link();
            }
            if(data.component) {
                if(data.component.button !== undefined) {
                    this.src('./css/component/button.css').link();
                }
                if(data.component.card !== undefined) {
                    this.src('./css/component/card.css').link();
                }
            }
        }catch(e){
            throw Error(e);
        }
    }
    src(source){
        var data = {}; var app;
        data.link = function()
        {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('link');
                app.rel = 'stylesheet';
                app.type = 'text/css';
                app.href = source;
                document.head.appendChild(app);
                active.resources_css.push(source);
            });
        }
        data.script = function()
        {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('script');
                app.type = 'text/javascript';
                app.src = source;
                document.body.appendChild(app);
                active.resources_js.push(source);
            });
        }
        data.meta = function()
        {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('meta');
                app.name = source.name;
                app.content = source.content;
                document.head.appendChild(app);
                active.resources_meta.push([source.name, source.content]);
            });
        }
        data.style = function()
        {
            window.addEventListener('DOMContentLoaded', function() {
                app = document.createElement('style');
                app.type = 'text/css';
                app.innerText = source;
                document.head.appendChild(app);
            });
        }
        return Object.create(data);
    }
    headers(data, options)
    {
        const debug_open = function()
        {
            console.group('headers');
            console.log('Name  : ' + data[0]);console.log('Value : ' + data[1]);
            console.groupEnd();
        }
        const debug_close = function()
        {
            console.groupCollapsed('headers');
            console.log('Name  : ' + data[0]);console.log('Value : ' + data[1]);
            console.groupEnd();
        }
        try{
            if(typeof data == 'object') {
                if(data[0] == 'Authorization')
                {
                    this.local(this.stringify({
                        type : 'set',
                        name : 'headers',
                        data : this.stringify({'Authorization' : data[1],'Content-Type' : data[2] })
                    })
                    );
                }
                if(data[0] == 'Content-Type')
                {

                }
                else if(options == 'debug-open')
                {
                    debug_open();
                }
                else if(options == 'debug-close')
                {
                    debug_close();
                }
            }
        }catch(e){
            throw Error(e);
        }
    }
    design(app = '')
    {
        var data = {};
        active.id = 'asd';
        data.nav = function(data, resize = '')
        {
            var query, id, mobile, content_nav_open, content_nav_close, nav_close;
            content_nav_open = '<div class="nav-mobile">';
            content_nav_close = '</div>';
            nav_close = '<div class="nav-mobile-close"></div>';
            new L().src('./css/__nav.css').link();
            if(resize !== undefined){
                window.addEventListener('load', function(){
                    query = document.querySelectorAll('nav.nav');
                    new L().html('body', content_nav_open + query[0].innerHTML, content_nav_close + nav_close)
                    id = document.getElementById(data);
                    mobile = [];
                    mobile[0] = document.getElementsByClassName('nav-mobile')[0];
                    mobile[1] = document.getElementsByClassName('nav-mobile-close')[0];
                    mobile[0].style.marginLeft = '-350px';
                    mobile[0].style.position = 'absolute';
                    mobile[1].style.display = 'none';
                    /*menu click*/
                    id.addEventListener('click', function(){
                        mobile[0].style.position = 'fixed';
                        mobile[0].style.zIndex = '999999';
                        mobile[0].style.backgroundColor = '#fff';
                        mobile[0].style.top = '0';
                        mobile[0].style.left = '0';
                        mobile[0].style.width = '300px';
                        mobile[0].style.height = '100%';
                        mobile[0].style.transition = 'all 0.1s ease 0s';
                        mobile[0].style.marginLeft = '0';
                        mobile[0].style.boxShadow = 'black 0px 0px 10px 0px';
                        mobile[1].style.display = 'block';
                        mobile[1].style.position = 'fixed';
                        mobile[1].style.zIndex = '99999';
                        mobile[1].style.backgroundColor = 'rgb(173 173 173 / 58%)';
                        mobile[1].style.width = '100%';
                        mobile[1].style.top = '0';
                        mobile[1].style.left = '0';
                        mobile[1].style.height = '100%';
                        document.body.classList.add('nav-open');
                    });
                    /*overlay click*/
                    mobile[1].addEventListener('click', function(){
                        mobile[0].style.marginLeft = '-300px';
                        mobile[0].style.boxShadow = 'none';
                        mobile[1].style.display = 'none';
                        document.body.classList.remove('nav-open');
                    });
                    /*move*/
                    mobile[1].addEventListener('touchmove', function(e){
                        if(e.changedTouches[0].pageX > 560){
                        }
                        if(e.changedTouches[0].pageX > 100 && e.changedTouches[0].pageX < 320)
                        {
                            mobile[0].style.marginLeft = e.changedTouches[0].pageX +50 - mobile[1].offsetWidth + 'px';
                        }
                        else{
                            mobile[0].style.marginLeft = e.changedTouches[0].pageX + 100 - mobile[1].offsetWidth + 'px';
                            if(mobile[0].offsetLeft < -250){
                                mobile[0].classList.add('close');
                                mobile[0].style.marginLeft = '-300px';
                                mobile[1].style.display = 'none';
                                document.body.classList.remove('nav-open');
                            }
                        }
                    });
                    /*end move*/
                    mobile[1].addEventListener('touchend', function(e){
                        if(mobile[0].offsetLeft < -250){
                            mobile[0].style.marginLeft = '-300px';
                            mobile[0].style.boxShadow = 'none';
                            mobile[1].style.display = 'none';
                            document.body.classList.remove('nav-open');
                        }else{
                            mobile[0].style.marginLeft = '0';
                        }
                    });
                });
            }else{

            }
        }
        return Object.create(data);
    }
    /**
     * @function api
     * @version 1.0
     * @param {*} data 
     */
    api(url, option = '')
    {
        var data = {};
        data.get = function(object)
        {
            let xhr = new XMLHttpRequest();
            xhr.onloadstart = function(){
                
            }
            xhr.onprogress = function(){

            }
            xhr.onload = function(){
                if(xhr.status >= 200 && xhr.status < 300) {
                    object.success(this.response);
                }else{
                    object.error(xhr.response, xhr.status);
                }
            }
            xhr.open('GET', url);
            xhr.send();
        }
        data.post = function()
        {
            
        }
        return Object.create(data);
    }
	validation()
	{

    }
    local(data)
    {
        try{
            var storage = JSON.parse(data);
            if(storage.type == 'get')
            {
                return window.localStorage.getItem(storage.name);
            }
            else if(storage.type == 'set')
            {
                return window.localStorage.setItem(storage.name, storage.data);
            }
        }catch(e){
            throw Error(e);
        }
    }
    session(data)
    {
        try{
            var storage = JSON.parse(data);
            if(storage.type == 'get')
            {
                return window.sessionStorage.getItem(storage.name);
            }
            else if(storage.type == 'set')
            {
                return window.sessionStorage.setItem(storage.name, storage.data);
            }
        }catch(e){
            throw Error(e);
        }
    }
	security()
	{
        let form = document.getElementsByClassName('form');
        for (var i = 0; i < document.getElementsByClassName('form').length; i++) {
            var create = document.createElement('input');
            create.type = 'hidden';
            create.value = token;
            create.name = csrf;
            form[i].appendChild(create);
        }
	}
	html(init, data, tag_close = '')
	{
        try{
            if(init == 'body'){
                if(tag_close !== ''){
                    var query = document.body;
                    var before = query.innerHTML;
                    var app = document.createElement('div');
                    app.innerHTML = data + tag_close
                    query.appendChild(app);
                    /*query.innerHTML = before + data + tag_close;*/
                }else{
                    var query = document.body;
                    var before = query.innerHTML;
                    query.innerHTML = before + data;

                }
            }
            else{
                var query = document.body.querySelectorAll(init);
                for (var i = 0; i < query.length; i++) {
                    var before = query[i].innerHTML;
                    query[i].innerHTML = before + data;
                }
            }
        }catch(e){
            throw Error(e);
        }
	}
    text(init, data)
    {
        try{
            var query = document.body.querySelectorAll(init);
            for (var i = 0; i < query.length; i++) {
                query[i].innerText = data;
            }
        }catch(e){
            throw Error(e);
        }
    }
    event(classes, options)
    {
        const load = function(){

        }
        const click = function(classes, options){
            return new Promise(function(resolve, reject){
                var events = document.querySelectorAll(classes);
                for (var i = 0; i < events.length; i++) {
                    events[i].addEventListener('click', function(){
                        classes;
                    });
                }
            });
        }
        const submit = function(){

        }
        try{

        }catch(e){
            throw Error(e);
        }
    }
	spa(data)
	{
        
	}
	component(init)
	{
		
    }
    parse(data)
    {
        return JSON.parse(data);
    }
    stringify(data)
    {
        return JSON.stringify(data);
    }
}
Object.create(active);
window.L_active = active;
window.L = new L();
var Lavosted = new L();
export default Lavosted;