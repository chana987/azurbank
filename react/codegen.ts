import { CodegenConfig } from '@graphql-codegen/cli';
import { config as process } from 'dotenv';

const config: CodegenConfig = {
	overwrite: true,
	schema: process()?.parsed?.GRAPHQL_API || 'http://localhost:3000/api/graphql',
	documents: 'src/graphql/*.ts',
	config: {
		preResolveTypes: true,
	},
	generates: {
		'./src/utils/globalTypes.ts': {
			plugins: [
				'typescript',
			],
		},
	},
	ignoreNoDocuments: true,
};

export default config;