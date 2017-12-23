const express = require('express')
const LoadSVG = require('./modules/LoadSVG')
const url = require('url');

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/code', async function (req, res) {
  res.set({"Content-Type":"text/plain"});
  const processedSVG = await LoadSVG(req.url)
  res.send(processedSVG);
})

app.get('/download', async function (req, res) {
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;

  const processedSVG = await LoadSVG(req.url)
  res.set({"Content-Disposition":`attachment; filename="${query.text.replace(/\s/g,'_')}.svg"`});
  res.send(processedSVG);

})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Listening to port: ' + port);
});