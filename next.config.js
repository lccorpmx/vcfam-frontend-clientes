// next.config.js
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
 dest: 'public', 
 register: true,
 skipWaiting: true,
 runtimeCaching
});

module.exports = withPWA({
  // other configs
  reactStrictMode: false,
  images: {
    domains: ['nauwkxuflsoekewokoyj.supabase.co'],
  },
});
