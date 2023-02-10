 const config = {
  nest: { port: 3000 },
  cors: { enabled: true },
  graphql: {
    playgroundEnabled: true,
    graphiql: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
};

export default () => config;
