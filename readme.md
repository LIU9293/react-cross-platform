# React Cross Platform

本模版的目标是在同一个Codebase中开发下面三个平台的App

- Web
- React Native
- 微信小程序（或者其他小程序）

## Core Concept

我们希望可以快速进行多端的开发，同时保持每个平台特有的功能，比如Web上我妈可以使用css animation，React Native上我们希望使用很多原生的能力，在小程序上又有不同的Animation的方式。本模版希望将所有的业务逻辑抽象统一，同时保持各个平台可以使用原生的方式编译

- Web，直接使用Vite进行编译
- React native，直接使用expo的生态
- 小程序，使用Taro进行编译（Taro V4, Vite）

我们针对不同的build tool，改变其对应的配置（babel config, vite config），使每个平台的编译器优先编译带有平台后缀的文件(x.web.tsx, x.mini.tsx, x.native.tsx)

## 为什么不直接用Expo/Taro

Expo，Taro都是为了跨平台开发而诞生的框架，但是他们对每个平台的支持程度不一，本项目不希望在开发过程中有任何因为编译工具限制而进行的妥协，同时我们通过file system尽可能将不同的业务流程逻辑分离，让该合并的代码基本合并

## Styling system

使用Tailwind，react native中依赖 [Nativewind](https://www.nativewind.dev/v4/overview)，小程序中依赖 [weapp-tailwindcss](https://weapp-tw.icebreaker.top/).

## Known issues

- Taro V4 beta目前不支持Vite5，所以使用了Vite4

## Future

[ ] Dark mode
[ ] i18n
[ ] Build for desktop with react native?