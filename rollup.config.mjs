import path from 'path';
import { fileURLToPath } from 'url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import copy from "rollup-plugin-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// bundle all the files in the src folder
export default {
    input: path.resolve(__dirname, 'src/index.js'),
    output: {
        file: path.resolve(__dirname, 'dist/bundle.js'),
        format: 'iife', // Immediately Invoked Function Expression
        name: 'AssistanceWidget', // Global variable name for the bundle
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader', // Add this rule for HTML files
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    //mode: 'development',
    plugins: [
        resolve(), // Resolves node_modules imports
        commonjs(), // Converts CommonJS modules to ES6
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
        }),
        html({ include: '**/*.html' }),
        copy({
            targets: [
                // Need to copy the files over for usage
                { src: "src/assets", dest: "dist" },
            ],
        }), 
        postcss({
            extract: true, // Extracts CSS into a separate file
            minimize: true, // Minifies the CSS
            sourceMap: true, // Generates source maps for debugging
            use: ['sass'], // Use the Sass preprocessor for SCSS files
        })
    ]
};