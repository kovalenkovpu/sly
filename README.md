# Sly javascript slider

[Link to demo](https://kovalenkovpu.github.io/sly/)

## About Sly

Javascript slider

* ES2015
* HTML & CSS


## Installing and using

1. No dependencies needed

### To include slider into your code follow:
1. You need to insert follwoing html code into your page:

`<div class="slider">
	<button class="arrow arrow--left"></button>
    
	<ul class="slider-body">
		<li><img src="http://placehold.it/130x130/fff"></li>
		<li><img src="http://placehold.it/130x130/e86666"></li>
		<li><img src="http://placehold.it/130x130/9ae2fd"></li>
		<li><img src="http://placehold.it/130x130/003b6f"></li>
		<li><img src="http://placehold.it/130x130/6fc7b3"></li>
		<li><img src="http://placehold.it/130x130/c63116"></li>
		<li><img src="http://placehold.it/130x130/b02c14"></li>
		<li><img src="http://placehold.it/130x130/5b6c7f"></li>
		<li><img src="http://placehold.it/130x130/e86666"></li>
		<li><img src="http://placehold.it/130x130/ded630"></li>
	</ul>
    
    <ul class="slider-toggles"></ul>
    <button class="arrow arrow--right"></button>
</div>`

2. Make sure you've made available slider js file at the end of the `body` tag:
`<script src="carousel.js"></script>`

3. You have to include plain js code in your html after `carousel.js` file:
`
<script>
	"use strict";
	//import
	let Carousel = window.Carousel;

	let slider = document.querySelector(".slider");
	
	new Carousel(slider, 500, 2000);
</script>
`
## License

Open-sourced software, it's free to use.