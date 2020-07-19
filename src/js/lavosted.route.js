export class L/* extends Route*/{
    constructor(/*router = [], element = ''*/)
    {
        /*super(router, element);
        super.router();*/
        this.store = function(__data){
            return apps.data = __data;
        }
    }
}
class Route
{
    constructor(router = '', element = ''){
        this.list = router;
        this.element = element;
    }
    router(){
        var url = [];
        /*console.log(this.list);*/
        var element = this.element
        var list = this.list;
        this.list.forEach(function(v, i){
            /*console.log(v)*/
            url[i] = v.url;
            /*console.log(url)*/
            
            var name = document.body.getElementsByTagName('route-link');
            for (var a = 0; a < name.length; a++) {
                var attr = name[a].getAttribute('to');
                name[a].addEventListener('click', function(){
                    var base = window.location.origin;
                    var find = list.find(x => x.url == this.getAttribute('to'));
                    console.log(find)
                    // if same link
                    if(this.getAttribute('to') == window.location.pathname){
                        return false;
                    }
                    // if data router have value
                    else if(url.indexOf(this.getAttribute('to')) !== '-1'){
                        // if data router not undefined
                        if(find !== undefined){
                            // run push/replace state in here
                            new Route().urls(find.url).pushed(Object.create(find));
                            // append data
                            document.querySelector(element).innerHTML = find.data.template();
                            console.log(Object.create(find))
                        }else{
                            alert('gagals')
                        }
                    }else{
                        alert('gagal')
                    }
                });
            }
        })
    }
    urls(url){
        var app = {};
        app.pushed = function(data){
            data.data.created();
            data.data.mounted();
            console.log(data.data.data());
            const state = data.data.data()
            const title = 'This page'
            window.title = title;
            history.pushState(state, title, window.location.origin + url);
        }
        app.replace = function(){

        }
        return Object.create(app);
    }
}