(function() {
  "use strict";
  
class Carousel {
  	constructor(el, delay, sliderDelay) {
  		this.el = el,
  		this.lis = this.el.querySelector(".slider-body").getElementsByTagName('li'),
  		this.left = this.el.querySelector(".arrow--left"),
  		this.right = this.el.querySelector(".arrow--right"),
  		this.delay = delay,
  		this.sliderDelay = sliderDelay,
  		this.timerId;
      
  		this._initStyles();
  		this._initEvents();
		this._arrowsCreate();
  		this._togglesCreate();
  		this.run();
    }
    
    run() {
    	this.__togglesPaint();
      
    	this.timerId = setInterval(() => {
    		if (getComputedStyle(this.lis[this.lis.length - 1]).display == "none") {
    			this._showNext();
    		} else {
    			this._initStyles();
    			this.__togglesPaint();
    		}
    	}, this.sliderDelay);
    }
    
    _initStyles() {
      	for (let i = 0; i < this.lis.length; i++) {
      		this.lis[i].querySelector("img").style.opacity = "1";
      	};
      	
      	for (let i = 0; i < 3; i++) {
      		this.lis[i].style.display = "inline-block";
      	};
      	
      	for (let i = 3; i < this.lis.length; i++) {
      		this.lis[i].style.display = "none";
      	};
      	
      	for (let i = 0; i < this.lis.length; i++) {
      		this.lis[i].querySelector("img").style.transitionDuration = this.delay + "ms";
      	};
    }
    
    _showPrevious() {
    	for (let i = 0; i < this.lis.length; i++) {
    		if (getComputedStyle(this.lis[i]).display !== "none" && i !== 0) {
    			this.__showElement(this.lis[i - 1]);
    			this.__hideElement(this.lis[i + 2]);
    			break;
    		} else if (getComputedStyle(this.lis[i]).display !== "none" && i == 0) {
    			for (let i = 0; i < this.lis.length; i++) {
    				if (i < (this.lis.length - 3)) {
    					this.__hideElement(this.lis[i]);
    				} else if (i >= (this.lis.length - 3)) {
    					this.__showElement(this.lis[i]);
    				}
    			};
    			break;
    		}
    	};
    }
    
    _showNext() {
    	for (let i = (this.lis.length - 1); i >= 0 ; i--) {
    		if (getComputedStyle(this.lis[i]).display !== "none" && i !== (this.lis.length - 1)) {
    			this.__showElement(this.lis[i + 1]);
    			this.__hideElement(this.lis[i - 2]);
    			break;
    		} else if (getComputedStyle(this.lis[i]).display !== "none" && i == (this.lis.length - 1)) {
    			for (let i = 0; i < this.lis.length; i++) {
    				if (i > 2) {
    				  	this.__hideElement(this.lis[i]);
    				} else if (i <= 2) {
    				  	this.__showElement(this.lis[i]);
    				}
    			};
    			break;
    		}
    	};
    }
    
    _initEvents() {
    	this.left.addEventListener("click", () => {
    	  	clearInterval(this.timerId);
    	  	this._showPrevious();
    	});
    	
    	this.right.addEventListener("click", () => {
    	  	clearInterval(this.timerId);
    	  	this._showNext();
    	});
    }
    
    __hideElement(elem) {
      	let img = elem.querySelector("img");
      	
      	img.style.opacity = "0";
      	
      	setTimeout(() => {
      	  	elem.style.display = "none";
      	  	this.__togglesPaint();
      	}, this.delay);
    }
    
    __showElement(elem) {
    	let img = elem.querySelector("img");
    	
    	img.style.opacity = "1";
    	
    	setTimeout(() => {
    		elem.style.display = "inline-block";
    		this.__togglesPaint();
    	}, this.delay);
    }
    
	_arrowsCreate() {
		let leftArrowSVG = `<svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"version="1.1" id="Capa_1" x="0px" 
	y="0px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g id="chevron-left"><polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153"/></g>
	</svg>`,
			rightArrowSVG = `<svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      version="1.1" id="Capa_1" x="0px" 
      y="0px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
    <g><g id="chevron-right">
	<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"/>
	</g></g>
    </svg>`;
		
		let leftArrow = this.el.querySelector(".arrow--left"),
			rightArrow = this.el.querySelector(".arrow--right");
		
		leftArrow.innerHTML += leftArrowSVG;
		rightArrow.innerHTML += rightArrowSVG;
	}
	
    _togglesCreate() {
    	let sliderToggles = this.el.querySelector(".slider-toggles");
    	
    	for (let i = 0; i < this.lis.length; i++) {
    	  	sliderToggles.innerHTML += "<li></li>";
    	}
    }
    
    __togglesPaint() {
    	let toggles = this.el.querySelector(".slider-toggles").getElementsByTagName("li");
    	
    	for (let i = 0; i < this.lis.length; i++) {
    		if (getComputedStyle(this.lis[i]).display == "inline-block") {
    		  	toggles[i].style.backgroundColor = "#913f3f";
    		} else if (getComputedStyle(this.lis[i]).display == "none") {
    		  	toggles[i].style.backgroundColor = "#fff";
    		}
    	}
    }
  };
  
  window.Carousel = Carousel;
})();