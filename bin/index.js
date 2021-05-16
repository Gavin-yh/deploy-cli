#! /usr/bin/env node

const shell = require('shelljs')
const path = require('path')
const chokidar = require('chokidar')


// 功能：
// 1. 提供监听的配置，默认监听该项目下的所有文件夹。如果开启监听的话
// 2. 体统是否开启监听


// 提供配置项， 配置服务器和密码
const watcher = chokidar.watch(process.cwd())

watcher.on('change', (path, stats) => {
    console.log(path, stats)
})

shell.exec('')
    