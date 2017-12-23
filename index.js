const express = require('express')
const LoadSVG = require('./modules/LoadSVG')

const app = express()

app.get('/code', async function (req, res) {
  const processedSVG = await LoadSVG(req.url)
  res.send(processedSVG)
})

app.get('/download', async function (req, res) {
  const processedSVG = await LoadSVG(req.url)

  res.set({"Content-Disposition":"attachment; filename=\"blabla.svg\""});
  res.send(processedSVG);

})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Listening to port: ' + port);
});