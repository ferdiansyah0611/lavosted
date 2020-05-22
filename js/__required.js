class ResponsiveLavosted{
     constructor() {

	}
     required() {
          var head = document.getElementsByTagName('head')[0];
          var meta = document.createElement('meta');
      
          meta.name = "viewport";
          meta.content = "width=device-width, initial-scale=1.0";
          head.appendChild(meta)
          console.log(meta)
    }
}
class css extends ResponsiveLavosted{
    col() {
        var classed = document.getElementsByClassName("lavosted");
        if(classed.length < 0) {
            throw error('[Element Not Founds]: .lavosted');
        }/*IF*/
        else {
            for (var i = 0; i < classed.length; i++) {
				var attribut = classed[i].getAttribute("lv-layout");
                if(attribut == "xs-1"){
                  classed[i].classList.add("lv-xs-1");
                }
                if(attribut == "xs-2"){
                  classed[i].classList.add("lv-xs-2");
                }
                if(attribut == "xs-3"){
                  classed[i].classList.add("lv-xs-3");
                }
                if(attribut == "xs-4"){
                  classed[i].classList.add("lv-xs-4");
                }
                if(attribut == "xs-5"){
                  classed[i].classList.add("lv-xs-5");
                }
                if(attribut == "xs-6"){
                  classed[i].classList.add("lv-xs-6");
                }
                if(attribut == "xs-7"){
                  classed[i].classList.add("lv-xs-7");
                }
                if(attribut == "xs-8"){
                  classed[i].classList.add("lv-xs-8");
                }
                if(attribut == "xs-9"){
                  classed[i].classList.add("lv-xs-9");
                }
                if(attribut == "xs-10"){
                  classed[i].classList.add("lv-xs-10");
                }
                if(attribut == "xs-11"){
                  classed[i].classList.add("lv-xs-11");
                }
                if(attribut == "xs-12"){
                  classed[i].classList.add("lv-xs-12");
                }
                if(attribut == "md-1"){
                  classed[i].classList.add("lv-md-1");
                }
                if(attribut == "md-2"){
                  classed[i].classList.add("lv-md-2");
                }
                if(attribut == "md-3"){
                  classed[i].classList.add("lv-md-3");
                }
                if(attribut == "md-4"){
                  classed[i].classList.add("lv-md-4");
                }
                if(attribut == "md-5"){
                  classed[i].classList.add("lv-md-5");
                }
                if(attribut == "md-6"){
                  classed[i].classList.add("lv-md-6");
                }
                if(attribut == "md-7"){
                  classed[i].classList.add("lv-md-7");
                }
                if(attribut == "md-8"){
                  classed[i].classList.add("lv-md-8");
                }
                if(attribut == "md-9"){
                  classed[i].classList.add("lv-md-9");
                }
                if(attribut == "md-10"){
                  classed[i].classList.add("lv-md-10");
                }
                if(attribut == "md-11"){
                  classed[i].classList.add("lv-md-11");
                }
                if(attribut == "md-12"){
                  classed[i].classList.add("lv-md-12");
                }
                if(attribut == "lg-1"){
                  classed[i].classList.add("lv-lg-1");
                }
                if(attribut == "lg-2"){
                  classed[i].classList.add("lv-lg-2");
                }
                if(attribut == "lg-3"){
                  classed[i].classList.add("lv-lg-3");
                }
                if(attribut == "lg-4"){
                  classed[i].classList.add("lv-lg-4");
                }
                if(attribut == "lg-5"){
                  classed[i].classList.add("lv-lg-5");
                }
                if(attribut == "lg-6"){
                  classed[i].classList.add("lv-lg-6");
                }
                if(attribut == "lg-7"){
                  classed[i].classList.add("lv-lg-7");
                }
                if(attribut == "lg-8"){
                  classed[i].classList.add("lv-lg-8");
                }
                if(attribut == "lg-9"){
                  classed[i].classList.add("lv-lg-9");
                }
                if(attribut == "lg-10"){
                  classed[i].classList.add("lv-lg-10");
                }
                if(attribut == "lg-11"){
                  classed[i].classList.add("lv-lg-11");
                }
                if(attribut == "lg-12"){
                  classed[i].classList.add("lv-lg-12");
                }
                if(attribut == "xl-1"){
                  classed[i].classList.add("lv-xl-1");
                }
                if(attribut == "xl-2"){
                  classed[i].classList.add("lv-xl-2");
                }
                if(attribut == "xl-3"){
                  classed[i].classList.add("lv-xl-3");
                }
                if(attribut == "xl-4"){
                  classed[i].classList.add("lv-xl-4");
                }
                if(attribut == "xl-5"){
                  classed[i].classList.add("lv-xl-5");
                }
                if(attribut == "xl-6"){
                  classed[i].classList.add("lv-xl-6");
                }
                if(attribut == "xl-7"){
                  classed[i].classList.add("lv-xl-7");
                }
                if(attribut == "xl-8"){
                  classed[i].classList.add("lv-xl-8");
                }
                if(attribut == "xl-9"){
                  classed[i].classList.add("lv-xl-9");
                }
                if(attribut == "xl-10"){
                  classed[i].classList.add("lv-xl-10");
                }
                if(attribut == "xl-11"){
                  classed[i].classList.add("lv-xl-11");
                }
                if(attribut == "xl-12"){
                  classed[i].classList.add("lv-xl-12");
                }
			}/*FOR LENGTH*/
      }/*ELSE*/
		}
    color() {
      try {
        
      }
      catch(e){}
    }
	}

	var required_style_lavosted = function() {
    this.col = function() {
      return new css().col();
    }
	}
new required_style_lavosted().col();
var responsive_lavosted = new ResponsiveLavosted();
responsive_lavosted.required();