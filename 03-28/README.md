模板引擎
jade---破坏式、侵入式、强依赖
ejs----温和、非侵入式、弱依赖

----------------------------------------------------------------

html
        <html></html>

----------------------------------------------------------------

1.根据缩进，规定层级
2.属性放在()中，逗号分割
3.内容空个格，直接往后堆

属性
<script src="a.js"></script>
script(src="a.js")

内容
<a href="http://www.baidu.com/">百度</a>
<a>(href="http://www.baidu.com/") 百度

----------------------------------------------------------------

特殊属性
style
1.普通属性写法
    style="width: 200px; height: 200px; background: red;"
2.用json
    style={width: '200px', height: '200px', background: 'red'}
class
1.普通属性写法
    class="aaa left-swrap active"
2用arr.
    class=['aaa', 'left-swrap', 'active']

----------------------------------------------------------------

模板引擎：生成页面
