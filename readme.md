## A cross platform frontend app

- [x] Rendering component on all platforms
  - web (with .web.tsx)
  - react native (with .native.tsx)
  - taro (with .mini.tsx)

- [ ] Auth 
  - 小程序微信授权，openid
  - 其他平台手机号登录

- [ ] Fonts / Icons
  - Only import SVG file from local or url, not using tags because miniapp does not support.
  - Preload fontawesome icon for all platforms
  - Add custom fonts?

- [ ] Translation
  - Do we need to use 3rd party package?
  - If not, can we make i18n function type safe?
  
- [ ] Theme, handle dark/light theme in all platforms


## Auth 

- 小程序
  1. 掉auth接口，拿到openid / unionid，去注册或者登录用户。
  2. 根据实际业务需要，去检查用户有没有授权头像/昵称/手机号等内容
  3. 把Token存在内存就行了，小程序不需要持久存

- Web/RN
  1. 发短信验证码，注册用户或者登录用户
  2. 根据业务需要，去检查用户有没有授权头像/昵称
  3. 把Token存在localstorage或者expo的storage，需要持久话