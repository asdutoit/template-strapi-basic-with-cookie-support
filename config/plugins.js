module.exports = ({ env }) => ({
  // ...
  sentry: {
    dsn: env(
      "SENTRY_DSN",
      "https://1dd08ab5ab4b4f5e8e5d87eb7d84e578@o527404.ingest.sentry.io/5643644"
    ),
  },
  // ...
});
