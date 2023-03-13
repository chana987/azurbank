import { CodegenConfig } from '@graphql-codegen/cli';
import { config as process } from 'dotenv';

const config: CodegenConfig = {
	schema: process()?.parsed?.GRAPHQL_API || 'http://localhost:3000/api/graphql',
	documents: [ 'src/**/*.tsx' ],
	generates: {
		'./src/__generated__/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;