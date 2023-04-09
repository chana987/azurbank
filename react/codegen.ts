import { CodegenConfig } from '@graphql-codegen/cli';
import { config as process } from 'dotenv';

const config: CodegenConfig = {
	overwrite: true,
	schema: process()?.parsed?.GRAPHQL_API,
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