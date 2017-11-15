//Create a new mock canvas context. Pass in your desired width and height for your svg document.
var ctx = new C2S(300,100);

//draw your canvas like you would normally
ctx.fillStyle="red";
ctx.font="48px Pacifico";
ctx.fillText('Hello world', 10, 50);
//etc...

//serialize your SVG
var mySerializedSVG = ctx.getSerializedSvg(); //true here, if you need to convert named to numbered entities.

//If you really need to you can access the shadow inline SVG created by calling:
var svg = ctx.getSvg();
document.body.appendChild(svg)
console.log(svg)
