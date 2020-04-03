'use strict';

console.log('Cache init.');

const memoryCache = {};

memoryCache.put = (key, val) => { memoryCache[key] = val; }
memoryCache.get = key => memoryCache[key];

module.exports = memoryCache;