# [Social share for mobile](https://github.com/corejing/socshare-mobile)

用于移动端的社会化分享插件，支持微信、微博、QQ好友、QQ空间、腾讯微博、豆瓣等社交网站

## 特性

- 无需依赖第三方类库
- 支持`微信`,`QQ`,`微博`的原生应用分享
- 支持AMD、CMD加载（使用UMD规范）
- 图标和样式打包在js里，无需额外请求

## 安装

手动下载压缩包或者 git clone 本项目。
   
```html
  <script src="dist/socshare-mobile.js"></script>
```
   
## 使用

### 示例

```html
<script src="dist/socshare-mobile.js"></script>
<button onclick="share()">弹出分享<button/>
<script>
  function share(){
    socshare.show({
      link: '',
      title: '',
      description: '',
      imageUrl: '',
      sites: ['wechat', 'wechat_timeline', 'weibo', 'qq', 'qzone']
    });
  }
</script>
```

### 函数

```js
show              // 弹出分享窗口
hide              // 隐藏
```

### 配置

```js
link              // 网址 默认使用 window.location.href
title             // 标题 默认读取 document.title
description       // 摘要 默认读取meta标签的content <meta name="description" content="" />
imageUrl          // 图片 默认读取网页中第一个img标签的src
sites             // 启用的站点 ['wechat', 'wechat_timeline', 'weibo', 'qq', 'qzone']
```
