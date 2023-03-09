import { buildConfig, Config } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Stocks from './collections/Stocks';
import Transactions from './collections/Transactions';
import Dividends from './collections/Dividends';
import { seed } from './seed';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Stocks,
    Transactions,
    Dividends,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  localization: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
});
