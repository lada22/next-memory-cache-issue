const memoryCache = require('memory-cache/memory-cache')

const handleReadPackage = (req, res) => {
    console.log(memoryCache.get('x'));
    res.send('This page reads the the value x from the cache by referencing the local memory-cache package.');
}

module.exports = handleReadPackage;