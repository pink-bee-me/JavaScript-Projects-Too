var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');


c.fillRect(200, 200, 100, 100);
c.fillRect(300, 200, 100, 400);
c.stroke();

c.clearPath;
c.arc(200,100,60,0,Math.PI *2, false);
c.strokeStyle = "green";
c.stroke();