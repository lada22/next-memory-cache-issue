const memoryCache = require('../memory-cache/memory-cache')


const handlePutDirect = (req, res) => {
    memoryCache.put('x', '3');
    res.send('This page adds the value x=3 to the cache by directly referencing the code file.');
}

module.exports = handlePutDirect;