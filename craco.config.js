const path = require('path');
const resolve = (pathName) => path.resolve(__dirname, pathName);
const CracoLessPlugin = require('craco-less');
module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
        },

    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },

    ],
    babel: {
        // 用来支持装饰器语法
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
        ]

    }
}