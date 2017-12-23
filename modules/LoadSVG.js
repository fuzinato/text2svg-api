const TextToSVG = require('./TextToSVG');
const url = require('url');

function LoadSVG(requrl) {
  const url_parts = url.parse(requrl, true);
  const query = url_parts.query;
  
  let { text, font, x, y, fontSize, fill } = query
  text = text || "Hello World"
  font = font || "http://fonts.gstatic.com/s/abeezee/v11/mE5BOuZKGln_Ex0uYKpIaw.ttf"
  x = x || 0;
  y = y || 0;
  fontSize = fontSize || 12;
  fill = fill || "#f00";

  return new Promise((resolve, reject )=>{

    TextToSVG.load(font, function (err, textToSVG) {
      const attributes = { fill };
      const options = { x, y, fontSize, anchor: 'top', attributes };
  
      const svg = textToSVG.getSVG(`${text} `, options);
      resolve(svg)
    });
  })
}

module.exports = LoadSVG;
