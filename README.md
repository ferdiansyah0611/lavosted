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
	<div class="navbar">
		<nav class="nav">
			<div class="nav-link">
				<ul>
					<li><a href="#">LINK 1</a></li>
					<li><a href="#">LINK 1</a></li>
					<li><input id="form" type="search" name="search"></li>
				</ul>
			</div>
		</nav>
		<div class="data-nav">
			<ul>
				<li><div class="menu icon" id="idmenu"></div></li>
			</ul>
		</div>
	</div>
<div class="container mt5">
	<h4>Column</h4>
	<div class="row">
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
	</div>
	<div class="row gp-0" style="margin-top: 50px;">
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
		<div class="bg-cyan col">Hello</div>
	</div>
</div>
<div class="container mt5">
	<h4>Forms</h4>
	<div class="row-1">
		<div class="form-default">
			<label for="name">Name</label>
			<input type="text" name="name" id="name">
		</div>
	</div>
</div>
<script src="./dist/main.js"></script>
<script>
/*L.design({
	nav : {
		active : true,
		menu : '400px',
		id : 'idmenu'
	},
});*/
L.init({
	responsive: true,
	run: 'development',
	route: true,
	headers: {
		Authorization : 'as'
	},
	form: true
});
L.store = 'asd';
L.design().nav('idmenu', {
	menu : 600
})
L.src('./css/__background.css').link();
L.src('./css/__helper.css').link();
L.src('./css/__required.css').link();
L.src('./css/__icon.css').link();
L.html('.col', 'KOns');
L.src('.cy{background-color: red;}').style();
L.dom().id('form').val('asd');
</script>
</body>
</html>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
