import { omit } from '../../src/utils/object';

export function cssModules(options: any = {}) {
	const defaultCssOptions = {
		localsConvention: 'camelCase',
		modules: {
			localIdentName:
				String(process.env.NODE_ENV) === 'production' ? '[hash:base64:10]' : '[name]--[local]--[hash:base64:5]',
		},
	};

	const cssOptions = Object.assign(defaultCssOptions, omit(options, 'styleLoader'));
	const loaders = [{ loader: 'css-loader', options: cssOptions }];

	if (options.styleLoader !== false) {
		loaders.unshift({ loader: 'style-loader', options: options.styleLoader || {} });
	}

	return (context, util) =>
		util.addLoader(
			Object.assign(
				{
					use: loaders,
				},
				context.match
			)
		);
}
