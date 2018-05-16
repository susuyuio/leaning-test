# 缓存机制
```
优先进行强制缓存，强缓存生效直接读取缓存信息，强缓存失效向服务器发起请求，进行协商缓存校验，协商缓存生效返回304读取缓存，协商缓存失效返回200及请求结果。
```
> ## 强缓存
- 直接读取缓存
- 网络请求，进入下一步协商缓存校验

```
Cache-Control
    public: 客户端和代理服务器均可缓存所有内容
    private: 仅客户端缓存所有内容
    no-cahce: 客户端缓存，协商缓存验证决定
    no-store: 不使用强缓存和协商缓存
    max-age=xxx: 缓存内容在xxx秒后失效

Expires
    服务器返回 缓存的到期时间
    以客户端时间与服务器时间相对比，可能产生误差
```


> ## 协商缓存
- 发起请求，缓存生效，状态码304，读取缓存
- 发起请求，缓存失效，返回结果
```
Etag/If-None-Match
    Etag 服务器响应返回 当前资源文件唯一标示
    If-None-Match 客户端请求携带上次返回的 Etag

Last-Modified/If-Modified-Since
    Last-Modified 服务器响应返回 最后修改时间
    If-Modified-Since 客户端请求携带上次返回的 Last-Modified
    服务端比较
```