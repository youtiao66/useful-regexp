# Useful RegExp In JavaScript

JavaScript中的常用正则表达式

## 电话号码部分替换为星号

``` js
'13812341234'.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
```

## 获取css中的所有类名

获取css中的所有类名，用于复杂的页面禁用所有csslint规则，可以直接拷贝到顶部用于csslint disabled

``` js
let css = `
.a {
  position: relative;
  background: #fff;
}
.b {
  position: relative;
  background: #000;
}
`;
css.replace(/\s{[^{}]+}\s?/g, ',').replace(/\s\/\*[^\/\*\\]*\*\/\s/g, '').replace(/,$/, '');
/*
 .a,
 .b
 */
```