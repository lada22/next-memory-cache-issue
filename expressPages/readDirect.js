
const memoryCache = require('../memory-cache/memory-cache')


const handleReadDirect = (req, res) => {
    console.log(memoryCache.get('x'));
    res.send('This page reads the the value x from the cache by directly referencing the code file.');
}

module.exports = handleReadDirect;