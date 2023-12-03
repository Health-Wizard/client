// public/static.config.js

module.exports = {
  // For Render.com, add a rewrite rule to serve index.html for all routes
  rewrites: () => [
    {
      source: "**",
      destination: "/index.html",
    },
  ],
};
