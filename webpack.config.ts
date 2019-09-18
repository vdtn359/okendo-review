import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { env, match } from '@webpack-blocks/core';
import { file } from '@webpack-blocks/assets';
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
import { cssModules } from './build/plugins/css-loader';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = createConfig([
	setMode(isDev ? 'development' : 'production'),
	entryPoint(path.resolve(paths.src, 'index.tsx')),
	setOutput({
		filename: `vdtn359.[name]${isDev ? '' : '.[chunkhash]'}.js`,
		path: paths.dist,
	}),
	resolve({
		alias: {
			'@app': paths.src,
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
	env('development', [
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
				cssModules({
					sourceMap: true,
					styleLoader: {},
				}),
			]
		),
		match(
			['*.scss', '!*node_modules*'],
			[
				cssModules({
					sourceMap: true,
					styleLoader: {},
				}),
				sass({
					sourceMap: true,
				}),
			]
		),
	]),
	env('production', [
		sourceMaps('nosources-source-map'),
		match(
			['*.css', '!*node_modules*'],
			[
				extractCss({
					filename: '[name].[contenthash:8].css',
				}),
				cssModules({
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
				cssModules({
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
	]),
	eslint({
		emitWarning: true,
	}),
]);

export default webpackConfig;
