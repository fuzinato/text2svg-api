const TextToSVG = require('./TextToSVG');
const url = require('url');

function LoadSVG(requrl) {
  const url_parts = url.parse(requrl, true);
  const query = url_parts.query;

  let { text, fontUrl, x, y, width, height, fontSize, fill } = query
  text = text || "Hello World"
  fontUrl = fontUrl || "http://fonts.gstatic.com/s/abeezee/v11/mE5BOuZKGln_Ex0uYKpIaw.ttf"
  fill = fill || "#f00";

  return new Promise((resolve, reject) => {

    TextToSVG.load(fontUrl, function (err, textToSVG) {
      const attributes = { fill };
      const options = { x, y, width, height, fontSize, anchor: 'top', attributes };

      const svg = textToSVG.getSVG(`${text} `, options);
      resolve(svg)
    });
  })
}

module.exports = LoadSVG;
