import HtmlWebpackPlugin from "html-webpack-plugin";

export function html({template, ...options}) {
	return (context, util) =>
		util.merge({
			plugins: [
				new HtmlWebpackPlugin({
					template,
					inject: true,
					...options,
				}),
			],
		});
}
