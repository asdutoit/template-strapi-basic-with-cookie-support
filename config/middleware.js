// module.exports = () => ({
//   settings: {
//     cors: {
//       enabled: true,
//       origin: ["http://localhost:1337", "http://localhost:3001"],
//       headers: [
//         "Content-Type",
//         "Authorization",
//         "X-Frame-Options",
//         "access-control-allow-origin",
//       ],
//     },
//   },
// });

module.exports = ({ env }) => ({
  load: {
    before: [
      "cookieGetter",
      "responseTime",
      "logger",
      "cors",
      "responses",
      "gzip",
    ],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ["parser", "router", "cookieSetter"],
  },
  settings: {
    cors: {
      origin: [
        // env("CLIENT_URL", "http://localhost:3001"),
        process.env.PRODUCTION_URL_CLIENT,
        process.env.PRODUCTION_URL_API,
      ],
    },
    cookieGetter: {
      enabled: true,
    },
    cookieSetter: {
      enabled: true,
    },
  },
});
