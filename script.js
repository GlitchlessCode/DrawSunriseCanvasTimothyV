// Draw Sunrise Script by Timothy V

// -- Initialize Variables --

// HTML Elements
let cloudImgEl = document.getElementById("cloudImg");

let cnv = document.getElementById("sunriseCnv");

// Context

/** @type {CanvasRenderingContext2D} */
let ctx = cnv.getContext("2d");

// -- Canvas --
cnv.width = 400;
cnv.height = 400;

// - Draw -

// Style
ctx.fillStyle = "blue";

// Shape
ctx.fillRect(0, 0, 400, 400);

// Style
ctx.fillStyle = "green";

// Shape
ctx.fillRect(0, 300, 400, 100);

// Style
ctx.fillStyle = "red";

// Shape
ctx.beginPath();

ctx.arc(200, 300, 20, Math.PI, 2*Math.PI);

ctx.fill();

// Images
ctx.drawImage(cloudImgEl, 130, 110);
ctx.drawImage(cloudImgEl, 170, 90);