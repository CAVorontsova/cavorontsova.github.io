var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var present = document.querySelector('.present');
present.onclick = function () {
	return present.classList.toggle('open');
};(function () {
	'use strict';

	var canvas = document.querySelector('canvas');
	var context = canvas.getContext('2d');
	
	width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

/*
// création d'un tableau
particle = [];
particleCount = 0,
gravity = 0.3,
    colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548'
    ];



			for( var i = 0; i < 300; i++){

particle.push({
	x : width/2,
	y : height/2,
	boxW : randomRange(5,20),
	boxH : randomRange(5,20),
	size : randomRange(2,8),
	
	spikeran:randomRange(3,5),
	
	velX :randomRange(-8,8),
	velY :randomRange(-50,-10),
	
	angle :convertToRadians(randomRange(0,360)),
	color:colors[Math.floor(Math.random() * colors.length)],
	anglespin:randomRange(-0.2,0.2),
	
	draw : function(){
	
	
		context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle);
		context.fillStyle=this.color;
		context.beginPath();
		// drawStar(0, 0, 5, this.boxW, this.boxH);
	context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
		context.fill();
				context.closePath();
		context.restore();
	this.angle += this.anglespin;
    this.velY*= 0.999;
	this.velY += 0.3;
  
    this.x += this.velX;
    this.y += this.velY;
		if(this.y < 0){
	this.velY *= -0.2;
		this.velX *= 0.9;
	};
	if(this.y > height){
	this.anglespin = 0;
	this.y = height;
	this.velY *= -0.2;
		this.velX *= 0.9;
	};
		if(this.x > width ||this.x< 0){

	this.velX *= -0.5;
	};
	
	
	
	},



		
	});

}
r1={
x:width/2-150,
y:height/2-150,
width:300,
height:300,
	velX :0,
	velY :-10,
 img : loadImage(""),
 alphatop:0
};


function drawScreen(){
size = 50;
			pFontName = "Lucida Sans Unicode";
			context.font = size + "pt " + pFontName;
			context.fillText("", width/2,150 );
		if(r1.alphatop < 1){
		r1.alphatop += 0.01;
		}else{
		r1.alphatop = 1;
		}
		context.globalAlpha = r1.alphatop; 
			context.drawImage(r1.img,r1.x,r1.y);
			      context.textAlign = 'center';

			
			
			if(r1.alphatop === 1){
    r1.velY*= 0.999;
	r1.velY += 0.3;
  
    r1.x += r1.velX;
    r1.y += r1.velY;}

		if(r1.y + r1.height > height){
	r1.anglespin = 0;
	r1.y = height - r1.height;
	r1.velY *= -0.8;
		r1.velX *= 0.9;
	};
	
	
			context.globalAlpha = 1; 
		for( var i = 0; i < particle.length; i++){
			particle[i].draw();

				}
				
				
}

	function loadImage(url){
		var img = document.createElement("img");
		img.src=url;
		return img;
	}

function update(){


context.clearRect(0,0,width,height);

drawScreen();

requestAnimationFrame(update);
}

update();


function randomRange(min, max){
	return min + Math.random() * (max - min );
}

function randomInt(min, max){
	return Math.floor(min + Math.random()* (max - min + 1));
}

       function convertToRadians(degree) {
            return degree*(Math.PI/180);
        }
		
		function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle=color;
    context.fill();

}
	
	
	
*/	
	
	
	
	
	
	
	
	

	/*var width = void 0,
	    height = void 0,
	    lastNow = void 0;
	var snowflakes = void 0;
	var maxSnowflakes = 100;

	function init() {
		snowflakes = [];
		resize();
		render(lastNow = performance.now());
	}

	function render(now) {
		requestAnimationFrame(render);

		var elapsed = now - lastNow;
		lastNow = now;

		ctx.clearRect(0, 0, width, height);
		if (snowflakes.length < maxSnowflakes) snowflakes.push(new Snowflake());

		ctx.fillStyle = ctx.strokeStyle = 'rgba(255, 255, 255, .5)';

		snowflakes.forEach(function (snowflake) {
			return snowflake.update(elapsed, now);
		});
	}

	function pause() {
		cancelAnimationFrame(render);
	}
	function resume() {
		lastNow = performance.now();
		requestAnimationFrame(render);
	}

	var Snowflake = function () {
		function Snowflake() {
			_classCallCheck(this, Snowflake);

			this.spawn();
		}

		_createClass(Snowflake, [{
			key: 'spawn',
			value: function spawn() {
				var anyY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

				this.x = rand(0, width);
				this.y = anyY === true ? rand(-50, height + 50) : rand(-50, -10);
				this.xVel = rand(-.05, .05);
				this.yVel = rand(.02, .1);
				this.angle = rand(0, Math.PI * 2);
				this.angleVel = rand(-.001, .001);
				this.size = rand(7, 12);
				this.sizeOsc = rand(.01, .5);
			}
		}, {
			key: 'update',
			value: function update(elapsed, now) {
				var xForce = rand(-.001, .001);

				if (Math.abs(this.xVel + xForce) < .075) {
					this.xVel += xForce;
				}

				this.x += this.xVel * elapsed;
				this.y += this.yVel * elapsed;
				this.angle += this.xVel * 0.05 * elapsed; //this.angleVel * elapsed

				if (this.y - this.size > height || this.x + this.size < 0 || this.x - this.size > width) {
					this.spawn();
				}

				this.render();
			}
		}, {
			key: 'render',
			value: function render() {
				ctx.save();
				var x = this.x,
				    y = this.y,
				    angle = this.angle,
				    size = this.size;

				ctx.beginPath();
				ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.restore();
			}
		}]);

		return Snowflake;
	}();

	// Utils


	var rand = function rand(min, max) {
		return min + Math.random() * (max - min);
	};

	function resize() {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
		maxSnowflakes = Math.max(width / 10, 100);
	}
*/
	window.addEventListener('resize', resize);
	window.addEventListener('blur', pause);
	window.addEventListener('focus', resume);
	init();
})();
