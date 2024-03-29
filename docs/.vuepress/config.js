import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'caperxi 的博客',
  description: '小白的前端之旅',
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base:'/caperxi/',
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  head: [
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2202523461822100',crossorigin:"anonymous" }]
  ],
  theme: defaultTheme({
    home: '/',
    navbar: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '干货',
        link: '/dryGoods/',
      },
      {
        text: '小程序',
        link: '/applet/',
      },
      {
        text: '错误记录',
        link: '/buglog/',
      },
    ],
    sidebar: {
      '/dryGoods/': [
        {
          text: "shell 脚本查找文件中关键字",
          link: "/dryGoods/fist"
        }
      ],
      '/applet/': ['/applet/'],
      '/buglog/': ['/buglog/'],
    }
  }),
})