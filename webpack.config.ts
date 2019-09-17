import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { env, match } from '@webpack-blocks/core';
import { css, file } from '@webpack-blocks/assets';
import postcss from '@webpack-blocks/postcss';
import eslint from '@webpack-blocks/eslint';
import {
	addPlugins,
	createConfig,
	entryPoint,
	optimization,
	resolve,
	setEnv,
	setMode,
	setOutput,
	sourceMaps,
} from '@webpack-blocks/webpack';
import devServer from '@webpack-blocks/dev-server';
import sass from '@webpack-blocks/sass';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { extractCss } from './build/plugins/extract-css';
import { html } from './build/plugins/html';
import paths from './build/paths';
import { transpile } from './build/plugins/transpile';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const isDev = process.env.NODE_ENV === 'dev';

const webpackConfig = createConfig([
	setMode(isDev ? 'development' : 'production'),
	entryPoint(path.resolve(paths.src, 'index.tsx')),
	setOutput({
		filename: `vdtn359.[name]${isDev ? '' : '.[chunkhash]'}.js`,
		path: paths.dist,
	}),
	resolve({
		alias: {
			'@root': paths.root,
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	}),
	addPlugins([new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()]),
	optimization({
		runtimeChunk: {
			name: 'manifest',
		},
		splitChunks: {
			chunks: 'all',
		},
	}),
	transpile({
		cwd: paths.root,
		cacheDirectory: true,
	}),
	match(['*.gif', '*.jpg', '*.jpeg', '*.svg', '*.png', '*.webp'], [file()]),
	setEnv({
		NODE_ENV: process.env.NODE_ENV,
	}),
	html({
		template: path.resolve(paths.root, 'index.html'),
		favicon: path.resolve(paths.root, 'favicon.ico'),
	}),
	env('dev', [
		devServer({
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			stats: 'minimal',
			overlay: true,
			compress: true,
		}),
		sourceMaps(),
		match(
			['*.css', '!*node_modules*'],
			[
				css({
					sourceMap: true,
					styleLoader: {
						sourceMap: true,
					},
				}),
			]
		),
		match(
			['*.scss', '!*node_modules*'],
			[
				css({
					sourceMap: true,
					styleLoader: {
						sourceMap: true,
					},
				}),
				sass({
					sourceMap: true,
				}),
			]
		),
	]),
	env(
		['prod'],
		[
			sourceMaps('nosources-source-map'),
			match(
				['*.css', '!*node_modules*'],
				[
					extractCss({
						filename: '[name].[contenthash:8].css',
					}),
					css({
						styleLoader: false,
						sourceMap: false,
					}),
					postcss({
						config: {
							path: paths.root,
						},
						sourceMap: false,
					}),
				]
			),
			match(
				['*.scss', '!*node_modules*'],
				[
					extractCss({
						filename: '[name].[contenthash:8].css',
					}),
					css({
						styleLoader: false,
						sourceMap: false,
					}),
					postcss({
						config: {
							path: paths.root,
						},
						sourceMap: false,
					}),
					sass({
						sourceMap: false,
					}),
				]
			),
		]
	),
	eslint({
		emitWarning: true,
	}),
]);

export default webpackConfig;
