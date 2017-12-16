const express = require('express');
const TextToSVG = require('./modules/TextToSVG');
const url = require('url');

const app = express();

app.get('/', (req, res) => {
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;

  const {text,fonturl, x, y, fontsize, fill} = query;
  // loadSvg(query)
  res.send(query)
})

app.listen("8080")

function loadSvg(query) {
  const { text, fonturl, x, y, fontSize, fill} = query
  
  TextToSVG.load(fonturl, function (err, textToSVG) {
    const attributes = { fill };
    const options = { x, y, fontSize, anchor: 'top', attributes };

    const svg = textToSVG.getSVG(`${text} `, options);
    return svg
    // Send back the file here
    // fs.writeFile("bin/test.svg", svg, 'utf8', function (err) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("The file was saved!");
    // });
  });
}


// DECODING URL
var uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
var uri_enc = encodeURIComponent(uri);
var uri_dec = decodeURIComponent(uri_enc);
var res = uri_enc + "<br>" + uri_dec;