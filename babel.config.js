module.exports = function(api) {
	api.cache(true);
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					modules: false,
					useBuiltIns: 'usage',
					corejs: 3,
				},
			],
			'@babel/preset-react',
			'@babel/typescript',
		],
		plugins: [
			'@babel/plugin-proposal-object-rest-spread',
			'babel-plugin-transform-typescript-metadata',
			['@babel/plugin-proposal-class-properties', { loose: true }],
			['@babel/plugin-proposal-decorators', { legacy: true }],
		],
	};
};
