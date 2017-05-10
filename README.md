# Sly javascript slider

[Link to demo](https://kovalenkovpu.github.io/sly/)

## About Sly

Javascript slider

* ES2015
* HTML & CSS
* It's 3-images slider of fixed width and height
* Non-adaptive for different viewports


## Installing and using

1. No dependencies needed;
2. Structure: `index.html` file for preview, `carousel.js` with js code, `carousel.css` for styles;
3. All you need is to insert a little `html` code into your html-file, include js-file and write a couple of js-code lines into your `body` tag;
3. You can add as many `li` as you need inserting image inside `li` tag;
4. You can changes timings (p.4 below).

### To include slider into your code follow:
1. You need to insert follwoing html code into your page:

```
<div class="slider">
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
</div>
```

2. Make sure you've made available slider js file at the end of the `body` tag:
```javascript
<script src="carousel.js"></script>
```

3. You have to include plain js code in your html after `carousel.js` file:
```javascript
<script>
	"use strict";
	//import
	let Carousel = window.Carousel;

	let slider = document.querySelector(".slider");
	
	new Carousel(slider, 500, 2000);
</script>
```

4. You can change 500 and 2000 timings here `new Carousel(slider, 500, 2000)` to alter the time slider needs for manual slides change (500ms) or automatic slides change (2000ms).

## License

Open-sourced software, it's free to use.