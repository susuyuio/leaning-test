# 客户端检测

# 能力检测
- 在可能的情况下，要尽量使用typeof进行能力检测
```
// IE8及之前版本检测createElement会出现错误
function hasCreateElement(){
    // IE8及之前版本document.createElement === 'object'
    return typeof document.createElement === 'function';
}
```
```
var xhr = new ActiveXObject("Microsoft.XMLHttp");
if(xhr.open){   // IE执行出错
    // typeof xhr.open === 'unknow'
}
```
```
// 包装检测函数
function isHostMethod(object, property){
    var t = object[property];
    return t === 'function' || (!!(t==='object'&&object[property])) || t === 'unknow';
}
```

# 怪癖检测
- 检测浏览器存在什么缺陷
