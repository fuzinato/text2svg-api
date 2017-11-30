const TextToSVG = require('./modules/TextToSVG');
const fs = require('fs')
const text = 'Permanent Marker'
const fontUrl = 'http://fonts.gstatic.com/s/permanentmarker/v7/9vYsg5VgPHKK8SXYbf3sMol14xj5tdg9OHF8w4E7StQ.ttf'

TextToSVG.load(fontUrl, function(err, textToSVG) {
  const attributes = {fill: 'red'};
  const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
   
  const svg = textToSVG.getSVG(`${text} `, options);
  
  fs.writeFile("bin/test.svg", svg, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
  console.log(svg);
});
