var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var canvas = document.createElement("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

var c = canvas.getContext("2d");
c.fillStyle = "green";
c.fillRect(10, 10, 30, 30);

this.document.body.appendChild(canvas);
