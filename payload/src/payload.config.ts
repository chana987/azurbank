import { buildConfig, Config } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Stocks from './collections/Stocks';
import { seed } from './seed';
import Dividends from './collections/Dividends';

require("dotenv").config?.();
const allowed = process.env.ALLOWED_ORIGIN?.split(",");

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  cors: '*',
  admin: {
    user: Users.slug,
  },
  collections: [
    Dividends,
    Stocks,
    Users,
  ],
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disablePlaygroundInProduction: false,
  },
  routes: {
    api: '/api',
    admin: '/admin',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
});
