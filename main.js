/**
@author Josh Gibbs
*/

var ctx, width, height, sizex = 25, sizey = 25, x=0, y=0, down = false, squaresx, squaresy;
var color=[];

window.onresize = setup;

window.onload = function (){
	ctx = document.getElementById("canvas").getContext("2d");
	squaresx = Math.ceil(window.innerWidth/sizex);
	squaresy = Math.ceil(window.innerHeight/sizey);
	for(var w = 0; w < squaresx; w++){
		color[w] = [];
		for(var h = 0; h < squaresy; h++){
			color[w][h] = '222';
		};
	};
	setup();
};



function move(){

	if(!down){color[x][y] = '222';}; //if up then old square is gray
	fill(x,y);

	x = Math.floor(window.event.pageX / sizex);
	y = Math.floor(window.event.pageY / sizey);

	if(down){
		color[x][y] = 'F90';
	} else {
		color[x][y] = 'FFF';
	};
	stroke(x,y);
};



function setup(){
	width = window.innerWidth;
	height = window.innerHeight;
	ctx.canvas.width = width;
	ctx.canvas.height = height;
	sizex = width / squaresx;
	sizey = height / squaresy;
	draw();
};

function draw() {
	for(var w = 0; w < squaresx; w++){
		for(var h = 0; h < squaresy; h++){
			fill(w,h);
		};
	};
};

function stroke(x,y){
	if (!color[x][y]) {
		ctx.strokeStyle = '222';
	} else {
		ctx.strokeStyle = color[x][y];
	};
	ctx.strokeRect(x*sizex,y*sizey,sizex-1,sizey-1);
};

function fill(x,y){
	if (!color[x][y]) {
		ctx.fillStyle = '222';
	} else {
		ctx.fillStyle = color[x][y];
	};
	ctx.fillRect(x*sizex,y*sizey,sizex-1,sizey-1);
};