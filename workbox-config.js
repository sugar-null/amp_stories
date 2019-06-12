module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{svg,jpg,json,png,html}"
  ],
  "swDest": "sw.js",
  // 以下を手動で追加
  "runtimeCaching": [{
    urlPattern: new RegExp('^https://cdn.ampproject.org'),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
  }]
};