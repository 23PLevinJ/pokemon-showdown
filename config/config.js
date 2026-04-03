poexports.port = process.env.PORT || 10000;
exports.bindaddress = '0.0.0.0';

// Trust reverse proxies like Render
exports.proxyip = ['127.0.0.1'];

// Disable built-in SSL (Render handles HTTPS)
exports.ssl = null;
exports.server = 'wss://ubiquitous-space-meme-v67676rgrw535p-8000.app.github.dev';
