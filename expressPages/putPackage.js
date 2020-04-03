const memoryCache = require('memory-cache/memory-cache')

const handlePutPackage = (req, res) => {
    memoryCache.put('x', '3');
    res.send('This page adds the value x=3 to the cache by referencing the local memory-cache package.');
}

module.exports = handlePutPackage;