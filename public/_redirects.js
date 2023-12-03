// public/_redirects.js

module.exports = {
  // For Vercel, add a rewrite rule to serve index.html for all routes
  rules: [
    {
      source: "**",
      destination: "/index.html",
    },
  ],
};
