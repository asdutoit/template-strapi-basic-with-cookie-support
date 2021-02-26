module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        if (
          ctx.request &&
          ctx.request.header &&
          !ctx.request.header.authorization
        ) {
          // console.log("COOKIES", ctx.cookies.get("token"));
          // console.log(
          //   "PROVIDER TOKEN",
          //   ctx.cookies.get("next-auth.session-token")
          // );
          const token = ctx.cookies.get("token");
          if (token) {
            ctx.request.header.authorization = `Bearer ${token}`;
          }
        }
        await next();
      });
    },
  };
};
