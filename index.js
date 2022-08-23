/**
 * @module vuepress-plugin-editor
 */

const express = require('express')
const path = require('path')
const fs = require('fs')

/**
 * 初始化文件目录
 * @param {string} dirPath 目录路径
 */
function initDir (dirPath) {
    /**
     * 创建目录
     * @todo 增加`.gitkeep`文件？以及‘文件夹说明’，from`@talltotal/vuepress-plugin-editor`
     */
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) throw err;
    })
}

/**
 * vuepress 插件函数
 * @param {*} options 传给插件的配置参数, { editableInProd: false }
 * @param {Context} ctx 编译上下文，[点击查看详细说明](https://www.vuepress.cn/plugin/context-api.html#ctx-isprod)
 * @returns {Object} 返回给vuepress的配置，[点击查看详细说明](https://www.vuepress.cn/plugin/option-api.html)
 */
module.exports = (options, ctx) =>  {
    /**
     * 储存富文本文件的目录
     * @todo 可配置？，同时传给组件
     */
    const dirPath = path.resolve(ctx.sourceDir, '.vuepress/public/editorData')

    initDir(dirPath)

    return {
        // 插件名
        name: '@talltotal/vuepress-plugin-ppt',

        // 增强文件的绝对文件路径
        enhanceAppFiles: [
            /**
             * 通过上下文判断模式`ctx.isProd`
             * - 开发模式：编辑/上传/下载
             * - 预览模式：预览
             */
            !options?.editableInProd && ctx.isProd ? path.resolve(__dirname, 'enhanceAppFileProd.js') : path.resolve(__dirname, 'enhanceAppFile.js')
        ],
    
        // 注册富文本上传接口
        beforeDevServer (app) {
            app.use(express.json())
            app.post('/api/updateEditor', function (req, res) {
                var name = req.body.name
                var data = req.body.data
                if (!name) {
                    return res.status(400).end()
                }
                fs.writeFile(
                    path.resolve(dirPath, `./${name}.htm`),
                    data,
                    function () {
                        res.end()
                    }
                )
            })
        }
    }
}