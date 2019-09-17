import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function extractCss({test = /\.css$/, ...options}) {
	return (context, util) =>
		util.merge({
			module: {
				rules: [
					Object.assign(
						{
							test,
							use: [
								{
									loader: MiniCssExtractPlugin.loader,
								},
							],
						},
						context.match
					),
				],
			},
			plugins: [new MiniCssExtractPlugin(options)],
		});
}
