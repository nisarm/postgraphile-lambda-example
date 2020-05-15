exports.options = {
  dynamicJson: true,
  cors: true,
  graphiql: false,
  graphqlRoute: "/graphql",
  externalUrlBase: `/${process.env.AWS_STAGE}`,
  pgDefaultRole: "app_user",
  // If consuming JWT:
  // jwtSecret: process.env.JWT_SECRET || String(Math.random()),
  // If generating JWT:
  // jwtPgTypeIdentifier: process.env.JWT_PG_TYPE_IDENTIFIER,

  /* If you want to enable GraphiQL, you must use `externalUrlBase` so PostGraphile
   * knows where to tell the browser to find the assets.  Doing this is
   * strongly discouraged, you should use an external GraphQL client instead.

    graphiql: true,
    enhanceGraphiql: true,
    // graphqlRoute: '/',
    graphiqlRoute: "/graphiql",  
   */

  appendPlugins: [
    require("@graphile-contrib/pg-simplify-inflector"),
    require("postgraphile-plugin-connection-filter"),
    // require("postgraphile/plugins").TagsFilePlugin,
    require("postgraphile-plugin-nested-mutations"),
  ],
  
};
