const TextToSVG = require('text-to-svg');
const fs = require('fs')
const textToSVG = TextToSVG.loadSync('BerkshireSwash-Regular.ttf');
 
const attributes = {fill: 'red'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
 
const svg = textToSVG.getSVG('Berkshire Swash ', options);

fs.writeFile("test.svg", svg, 'utf8', function (err) {
  if (err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});

console.log(svg);