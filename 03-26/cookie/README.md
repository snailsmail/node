cookie
    1.读取 cookie-parser（相关插件）req.cookies
    2.发送

    cookie的加密方法：req.secret='xxxxx'; res.cookie(name, value, {signed: true});

session(基于cookie实现的)
    cookie-session(相关插件)

    res.cookie(name, value, {path: '/a', maxAge: 30*24*3600*1000})
    path中的路径，在用localhost:8888/a,必需这样请求，kookie才能发送到浏览器
    maxAge设置的是三十天后过期，一天24小时，3600分钟，单位为毫秒