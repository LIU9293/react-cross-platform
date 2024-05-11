import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import devConfig from './dev'
import prodConfig from './prod'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'vite'> = {
    projectName: 'taro-test',
    date: '2024-4-27',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'react',
    compiler: {
      type: 'vite',
      vitePlugins: [
        UnifiedViteWeappTailwindcssPlugin({
          appType: 'taro'
        })
      ]
    },
    mini: {
      postcss: {
        tailwindcss: {},
        autoprefixer: {},
        pxtransform: { enable: false },
        cssModules: { enable: false }
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
