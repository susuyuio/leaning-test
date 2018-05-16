# web安全

- XSS (跨站脚本攻击)
    - 伪造会话（基于XSS实现CSRF）
    - 劫持cookie
    - 恶意代码执行
    （防御）对输入输出进行过滤，编码；cookie设置http-only禁止获取；
- CSRF (跨站请求伪造)
    1. 伪造用户身份操作：<br/>
    （原理）利用已生成用户Cookie的A站点，进入危险网站，请求A站成功。<br/>
    （防御）验证HTTP Referer字段；在请求参数或请求头中添加token验证
- SQL注入
- 