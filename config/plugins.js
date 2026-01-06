module.exports = () => ({
  // CKEditor plugin
  ckeditor: {
    enabled: true,
  },
  // SEO plugin
  seo: {
    enabled: true,
  },
  // Comments plugin
  comments: {
    enabled: true,
  },
  // Webtools plugin
  webtools: {
    enabled: true,
  },
  // Sentry plugin
  sentry: {
    enabled: true,
    // Add your Sentry DSN here when ready
    // dsn: process.env.SENTRY_DSN || '',
  },
  // Navigation plugin
  navigation: {
    enabled: true,
  },
});
