######  html原生跳转

- 1、使用a标签点击跳转 代码实例: 
```
   <a  href="网址">文本</a> ; 
<a href="http://www.github.com">github</a>
```
- 2、使用meta标签 代码实例 : 
```
   <meta http-equiv="refresh" content="秒数;url=网址">;
<meta http-equiv="refresh" content="5;url=https://www.github.com">
```

- 3、使用 window.location.href = '网址'; 直接跳转

```
  // 以下方式直接跳转  
    window.location.href = 'https://www.github.com/';
  
   // 五秒以后再跳转
    setTimeout("javascript:location.href='https://www.feiniaomy.com'", 5000);   
    
   // 打开新的页签
   window.open() 接收三个参数
   1- strUrl：要打开的页面或资源的url地址。
   2- strWindowName：窗口的名字，用于后续对该窗口的引用，不是窗口的标题。
   3- strWindowFeatures：窗口的描述参数，如尺寸、位置、是否启用工具栏等。
   window.open('第一个参数链接地址url', '名字', '窗口大小尺寸')
```


原文链接: https://m.php.cn/article/481668.html
window.open 原文链接: https://blog.csdn.net/qq_41694291/article/details/107877447
