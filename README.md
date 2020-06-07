# Lavosted
Lavosted is a frontend framework for websites. Lavosted is simpler to use compared to other framewok because lavosted only defines what class is needed, the css file will be called automatically so that lavosted is lightweight to use and improves website performance

## Getting Started

Before using lavosted, add jquery.js to your website. It is confirmed that jquery.js is before lavosted

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
<div class="container-auto">
	<input type="hidden" name="data">
	<div class="bg-cyan t-center col s12 cy">Hello</div>
	<div class="bg-cyan t-center col s11">Hello</div>
	<div class="bg-cyan t-center col s10">Hello</div>
	<div class="bg-cyan t-center col s9">Hello</div>
	<div class="bg-cyan t-center col s8">Hello</div>
	<div class="bg-cyan t-center col s7">Hello</div>
	<div class="bg-cyan t-center col s6">Hello</div>
	<div class="bg-cyan t-center col s5">Hello</div>
</div>
<script src="./dist/main.js"></script>
<script>
L.init({
	responsive: true,
	run: 'development',
	route: true
});
L.set = 'asd';
L.set = 'asd';
L.set = 'asd';
L.src('link', {src : './css/__responsive.css'});
L.src('link', {src : './css/__background.css'});
L.src('link', {src : './css/__helper.css'});
L.src('link', {src : './css/__required.css'});
L.html('.col', '<p>Test HTML append</p>');
L.style('.cy', '.cy {background-color: red;}');
</script>
</body>
</html>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
