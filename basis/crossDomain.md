# 跨域
- jsonp（仅能实现get请求）
```
<script>
    var script = document.createElement('script');
    script.type='text/javascript';
    script.src='http://xxx?callback=cb';
    document.head.appendChild(script);
    function cb(res){console.log(res);}
</script>
```
- iframe + document.domain
- iframe + location.hash
- iframe + window.name
- postMessage
- CORS 跨资源共享
- nginx 代理
- nodejs 中间代理
- WebSocket 协议跨域
