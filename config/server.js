module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Built-in MCP server (Strapi >= 5.49). Endpoint: <server url>/mcp, auth with an Admin API token.
  // Set MCP_ENABLED=false in the environment to turn it off without a code change.
  mcp: {
    enabled: env.bool('MCP_ENABLED', true),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
