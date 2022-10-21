######  html原生跳转

- 1、使用'<a href="网址">文本</a>'; 使用a标签点击跳转
```
<a href="http://www.github.com">github</a>

```

- 2、使用"<meta http-equiv="refresh" content="秒数;url=网址">";
- 代码实例 : 
```
<meta http-equiv="refresh" content="5;url=https://www.github.com">

```

- 3、使用window.location.href = '网址'; 直接跳转

```
  // 以下方式直接跳转  
    window.location.href = 'https://www.github.com/';
  
   // 五秒以后再跳转
    setTimeout("javascript:location.href='https://www.feiniaomy.com'", 5000);   
```
