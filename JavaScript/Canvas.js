var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var ctx = canvas.getContext('2d');


ctx.fillRect(200, 200, 100, 100);
ctx.clearPath;
ctx.fillRect(700, 500, 250, -400);
ctx.stroke();

ctx.clearPath;
ctx.arc(200,100,60,0,Math.PI *2, false);
ctx.strokeStyle = "green";
ctx.stroke();

function draw() {

var ctx = document.getElementById("canvas".getContext("2d");)

//Create Radial Gradients
var radgrad = ctx.createRadialGradient(45,45,10,52,50,300);
//radgrad.addColorStop(0,"orchid");
//radgrad.addColorStop(0.45, "lime");
//radgrad.addColorStop(.9, "slate");
//ctx.arc(300,200,79,0,Math.PI * 2,false);
//ctx.fillStyle = gradient;
//ctx.strokeStyle = "black";
//ctx.stroke;
background-image:radial-gradient(red,green,blue);
}