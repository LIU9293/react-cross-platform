// this file is used to configure mini-app only

export default defineAppConfig({
  pages: [
    'app-mini/index/index',
    'app-mini/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  darkmode: true
})