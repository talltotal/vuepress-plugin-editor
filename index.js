const express = require('express')
const path = require('path')
const fs = require('fs')

module.exports = (options, ctx) =>  {
    const filePath = path.resolve(ctx.sourceDir, '.vuepress/public/editorData')

    fs.mkdir(filePath, { recursive: true }, (err) => {
        if (err) throw err;
    })

    return {
        name: '@talltotal/vuepress-plugin-ppt',

        enhanceAppFiles: [
            ctx.isProd ? path.resolve(__dirname, 'enhanceAppFileProd.js') : path.resolve(__dirname, 'enhanceAppFile.js')
        ],
    
        beforeDevServer (app) {
            app.use(express.json())
            app.post('/api/updateEditor', function (req, res) {
                var name = req.body.name
                var data = req.body.data
                if (!name) {
                    return res.status(400).end()
                }
                fs.writeFile(
                    path.resolve(filePath, `./${name}.htm`),
                    data,
                    function () {
                        res.end()
                    }
                )
            })
        }
    }
}