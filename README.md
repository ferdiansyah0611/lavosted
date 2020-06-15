# Lavosted
Lavosted is a frontend framework js for websites. Lavosted is results compiler and simple to use compared to other framewok so that lavosted is lightweight to use and improves website performance.
 In the future, the addition of new features for more modern websites is to use a single page application and typescript.

### Installing

What things you need to install the software and how to install them
## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Lavosted Framework</title>
</head>
<body>
	<div class="col"></div>
<script src="./dist/main.js"></script>
<script>
/*Initialize*/
L.init({
	responsive: true,
	run: 'development',
	route: true,
	headers: {
		Authorization : 'as'
	},
});
/*DOM Manipulation*/
L.dom().id('id_element').get();
L.dom().id('id_element').height();
L.dom().id('id_element').width();
L.dom().id('id_element').parent();
L.dom().id('id_element').val(append = '');
L.dom().id('id_element').del();
L.dom().id('id_element').attr(name_attribute, value_attribute);
L.dom().id('id_element').addClass(name_class);
L.dom().id('id_element').removeClass(name_class);
L.dom().id('id_element').toggleClass(name_class);

L.dom().class('class_element').get();
L.dom().class('class_element').height(length_class);
L.dom().class('class_element').width(length_class);
L.dom().class('class_element').parent(length_class);
L.dom().class('class_element').val(length_class, append = '');
L.dom().class('class_element').del(length_class);
L.dom().class('class_element').attr(length_class, name_attribute, value_attribute);
L.dom().class('class_element').addClass(length_class, name_class);
L.dom().class('class_element').removeClass(length_class, name_class);
L.dom().class('class_element').toggleClass(length_class, name_class);

/*ADD RESOURCES ON DOMContentLoaded*/
L.src('./css/__background.css').link();
L.src('./css/__background.js').script();
L.src({name : 'name_meta', content : 'content_meta'}).meta();
L.src('.cy{background-color: red;}').style();

/*STORAGE*/
L.local({
	type: 'get',
	name: 'name localStorage',
	success: function(data){
		console.log(data);
		console.log('Parse : ' + L.parse(data));
	}
});
L.local({
	type: 'set',
	name: 'name sessionStorage',
	data: L.stringify({app : 'anyting'})
});
L.session({
	type: 'get',
	name: 'name sessionStorage',
	success: function(data){
		console.log(data);
		console.log('Parse : ' + L.parse(data));
	}
});
L.session({
	type: 'set',
	name: 'name sessionStorage',
	data: L.stringify({app : 'anyting'})
});

L.html('.col', '<p>Append</p>');
/*AJAX API*/
L.api('https://api.apis.guru/v2/metrics.json').get({
	success: function(data){
		console.log(data)
	},
	error: function(message, status){
		console.error(message);
	}
});
/*JSON*/
L.stringify('your data json');
L.parse('your data json');
</script>
</body>
</html>
```
## Check the latest version
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
