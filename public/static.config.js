// static.config.js

module.exports = {
  forceSSLOptions: {
    enable301Redirects: true,
    exclude: [
      "/static/*",
      "/robots.txt",
      "/sitemap.xml",
      "/logo.ico",
      "/.well-known/*",
    ],
  },
};
