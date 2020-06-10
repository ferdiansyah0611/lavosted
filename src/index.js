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
class L{
	constructor()
	{
        /*store ex: headers*/
        this.$apps = [];
        /*store data*/
        this.data = [];
        /*doms*/
        this.doms = {
            classes : function(data, option = ''){
                if(option.style !== undefined) {
                    var style = option.style;
                    var value = option.value;
                    var classes = document.getElementsByClassName(data);
                    switch(style){
                        case 'display':
                            for (var i = 0; i < classes.length; i++) {
                                classes[i].style.display = value;
                            }
                        break;
                    }
                    return document.getElementsByClassName(data);
                }
                else {
                    return document.getElementsByClassName(data);
                }
            },
            id: function(data, option){
                return document.getElementById(data);
            },
            name : function(data, option){
                return document.getElementsByName(data);
            },
            query : function(data){
                return document.querySelectorAll(data);
            }
        }
        this.url = {
            on : function(){
                return window.location.href;
            }
        }
    }
    /**
    * @function title
    **/
   get title()
   {
        return 'Lavosted Frameworks';
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
                    console.info('You are running Lavosted in development mode.');console.info('Make sure to turn on production mode when deploying for production');
                    console.groupEnd();
                }
                else if(data.run == 'production'){
                }
            }
            if(data.responsive !== undefined) {
                this.src('meta', {name : 'viewport', content : 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no'})
                this.src('link', {src : './css/__responsive.css'});
            }
            if(data.headers !== undefined) {
                this.$apps[1] = data.headers.Authorization;
            }
        }catch(e){
            throw Error(e);
        }
    }
    src(type, option){
        var data;
        function init()
        {
            return 'init'
        }
        new init();
        const link = function(src)
        {
            window.addEventListener('DOMContentLoaded', function() {
                data = document.createElement('link');
                data.rel = 'stylesheet';
                data.type = 'text/css';
                data.href = src;
                document.head.appendChild(data);
            });
        }
        const script = function(src) {
            window.addEventListener('DOMContentLoaded', function() {
                data = document.createElement('script');
                data.type = 'text/javascript';
                data.src = src;
                document.body.appendChild(data);
            });
        }
        const meta = function(name, content) {
            window.addEventListener('DOMContentLoaded', function() {
                data = document.createElement('meta');
                data.name = name;
                data.content = content;
                document.head.appendChild(data);
            });
        }
        const style = function(style) {
            window.addEventListener('DOMContentLoaded', function() {
                data = document.createElement('style');
                data.type = 'text/css';
                data.innerText = style;
                document.head.appendChild(data);
            });
        }
        try{
            switch(type) {
                case 'link':
                    link(option.src);
                    break;
                case 'script':
                    script(option.src);
                    break;
                case 'meta':
                    meta(option.name, option.content);
                    break;
                case 'style':
                    style(option);
                    break;
                return true;
            }
        }catch(e){
            throw Error(e);
        }
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
    design(data)
    {
        var query;
        const design = {
            nav : function() {
                console.log('nav');
                query = document.querySelectorAll('nav.nav');
                query.forEach(function(v, i){
                    console.log(query[i].innerHTML);
                });
            }
        };
        if(data.nav.active == true){
            this.src('link', {src : './css/__nav.css'});
            design.nav();
        }
    }
    /**
     * @function api
     * @version 1.0
     * @param {*} data 
     */
	async api(data, options)
	{
        var headers = JSON.parse(window.localStorage.getItem('headers'));
        const debug_open = function(data)
        {
            console.group('api');
            console.log(data);
            console.groupEnd();
            return data;
        }
        const debug_close = function(data)
        {
            console.groupCollapsed('api');
            console.log(data);
            console.groupEnd();
            return data;
        }
        /**
         * @function get
         * @version 1.0
         * @param {*} url
         * @returns {json()}
         */
        const get = async function(url, options)
        {
            if(typeof headers == 'object'){
                var auth = window.L.local(JSON.stringify({
                    type : 'get',
                    name : 'headers'
                })
                );
                return await fetch(url, {
                    headers: {
                        Authorization : window.L.parse(auth).Authorization
                    }
                }).then(response => {
                    if(response.status == 200 || response.status < 200){
                        if(typeof response == undefined){
                            throw Error('Undefined to get api');
                        }else{
                            if(options){
                                if(options == 'debug-open'){
                                    response.json().then(data => {
                                        debug_open(data);
                                    });
                                }
                                if(options == 'debug-close'){
                                    response.json().then(data => {
                                        debug_close(data);
                                    });
                                }else{
                                    throw Error('Please check word options in function api');
                                }
                            }else{
                                return response.json();
                            }
                        }
                    }
                    if(response.status == 404){
                        throw Error('Not found');
                    }
                    if(response.status == 403){
                        throw Error('Not allowed');
                    }
                }).catch(e => {
                    throw Error(e);
                });
            }
            else {
                return await fetch(url).then(response => {
                    if(response.status == 200 || response.status < 200){
                        if(typeof response == undefined){
                            throw Error('Undefined to get api');
                        }else{
                            return response.json();
                        }
                    }
                    if(response.status == 404){
                        throw Error('Not found');
                    }
                    if(response.status == 403){
                        throw Error('Not allowed');
                    }
                }).catch(e => {
                    throw Error(e);
                }); 
            }
        }
        /**
         * @function post
         * @version 1.0
         * @param {*} url
         * @param {*} data
         * @returns {ServerResponse}
         */
        const post = async function(url, data, options)
        {
            if(typeof headers == 'object'){
                var auth = window.L.local(JSON.stringify({
                    type : 'get',
                    name : 'headers'
                })
                );
                return await fetch(url,{
                    method : 'post',
                    headers: {
                        Authorization : window.L.parse(auth).Authorization
                    }
                }).then(response => {
                    if(response.status == 200 || response.status < 200){
                        if(typeof response == undefined){
                            throw Error('Undefined to get api');
                        }else{
                            return response.json();
                        }
                    }
                    if(response.status == 404){
                        throw Error('Not found');
                    }
                    if(response.status == 403){
                        throw Error('Not allowed');
                    }
                });
            }
            else {
                return await fetch(url,{
                    method : 'post'
                }).then(response => {
                    if(response.status == 200 || response.status < 200){
                        if(typeof response == undefined){
                            throw Error('Undefined to get api');
                        }else{
                            return response.json();
                        }
                    }
                    if(response.status == 404){
                        throw Error('Not found');
                    }
                    if(response.status == 403){
                        throw Error('Not allowed');
                    }
                });
            }
        }
        try{
            var parse = JSON.parse(data);
            var method = parse.method;
            var url = parse.url;
            if(method == 'get'){
                if(options == 'debug-open'){
                    return get(url, 'debug-open');
                }
                if(options == 'debug-close'){
                    return get(url, 'debug-close');
                }else{
                    return get(url);
                }
            }
            if(method == 'post' || method == 'put' || method == 'delete'){
                var posted = document.body.querySelector(parse.data);
                return post(url, posted);
            }
        }catch(e){
            throw Error(e);
        }
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
	html(init, data)
	{
        try{
            var query = document.body.querySelectorAll(init);
            for (var i = 0; i < query.length; i++) {
                var before = query[i].innerHTML;
                query[i].innerHTML = before + data;
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
window.L = new L();
var Lavosted = new L();
export default Lavosted;