#!/usr/bin/env node

// 添加 gulp 的 cmd 执行配置参数

// 配置本地文件的工作目录到项目的根目录
process.argv.push('--cwd')
process.argv.push(process.cwd())

// 添加 gulpfile.js 所在的路径
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))   // require 意为找到某个模块，resolve 为找到这个模块对应的路径，.. 代表上层目录下的 package.json 内的 main 中的路径 ../lib/index.js

require('gulp/bin/gulp')