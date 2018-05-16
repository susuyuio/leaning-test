# 跨域

- jsonp
```
- 仅能实现get请求

<script>
    var script = document.createElement('script');
    script.type='text/javascript';
    script.src='http://xxx?callback=cb';
    document.head.appendChild(script);
    function cb(res){console.log(res);}
</script>
```


- iframe + document.domain
```
- 仅限主域相同，子域不同的跨域应用场景。
- 实现原理：两个页面都通过js强制设置document.domain为基础主域

//父窗口
<iframe src="http://child.domain.com/b.html"></iframe>
<script>
    document.domain = 'domain.com';
    var user = 'admin';
</script>
//子窗口
<script>
    document.domain = 'domain.com';
    console.log(window.parent.user);
</script>
```


- iframe + location.hash
```
实现原理：a、b通信，通过中间c来实现。其中，不同域之间用iframe的location.hash，相同域之间用js直接访问。
```


- iframe + window.name
```
window.name在不同的页面（甚至不同域名）加载后依旧存在，切长度可达2MB
```


- postMessage
- CORS 跨资源共享
```
普通跨域请求：只服务端设置Access-Control-Allow-Origin即可。
带cookie请求：前后端都需要设置字段，所带cookie为跨域请求接口所在域的cookie，非当前页。

//前端
xhr.withCredentials = true;
```
- nginx 代理
- nodejs 中间代理
- WebSocket 协议跨域
