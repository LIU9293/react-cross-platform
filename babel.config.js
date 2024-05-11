module.exports = function (api) {
  api.cache(true)

  if (!!process.env.TARO_ENV) {
    return {
      presets: [
        ["taro", { framework: 'react', ts: true, compiler: 'vite' }]  
      ]
    }
  }

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ]
  }
}