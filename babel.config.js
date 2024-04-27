module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      // ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      // "nativewind/babel",
      ["taro", { framework: 'react', ts: true, compiler: 'vite' }]
    ]
  }
}