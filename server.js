const express = require('express')
const next = require('next')
const handlePutDirect = require('./expressPages/putDirect');
const handleReadDirect = require('./expressPages/readDirect');
const handlePutPackage = require('./expressPages/putPackage');
const handleReadPackage = require('./expressPages/readPackage');

// const cache = require('./cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/exp-put-direct', (req, res) => handlePutDirect(req, res))
  server.get('/exp-read-direct', (req, res) => handleReadDirect(req, res))
  server.get('/exp-put-package', (req, res) => handlePutPackage(req, res))
  server.get('/exp-read-package', (req, res) => handleReadPackage(req, res))

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
