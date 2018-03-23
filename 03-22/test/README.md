用户注册、登录

接口：
/user?act=res&user=aaa&pass=123456
        {"ok": false, "msg": "原因"}

/user?act=login&user=aaa&pass=123456
        {"ok": true, "msg": "原因"}


对文件的访问分两种
1.文件
http://localhost:8888/1.html
http://localhost:8888/2.text
http://localhost:8888/3.jpg

2.接口
http://localhost:8888/user?name=...



留言板

数据结构：
    {
        "id": 0
        "content": "xxxx",
        "good": 0,
        "bad": 0,
        "date": yyyy-MM-dd hh:mm:ss
    }

接口：
/getList?current=1

/add
data:{content}

修改只是针对赞或踩的
/update/{id}
data:{type}

/delete/{id}

//存在问题
1.server2.js中res.write()不能返回Array，转成json也不行，前台不能处理


模块化