# auto deploy
利用ssh，实现上传文件，和监听文件。

# install
```
npm install gdeploy-cli
``` 

# 配置
提供了deploy.config.js的配置项
```
deploy.config.js

module.exports = {
    host: 'root@xxxx', // 必填  服务器地址
    remotePath: '', //必填  远端服务器文件目录
    watch: true,  // 选填: true, false , 是否开启文件变动监听
    filePath: '', // 本地文件路径
    // dirPath: '' // 本地文件目录
}
```
