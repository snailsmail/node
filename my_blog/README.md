博客


数据字典

1.banner(banner_table)
    id
    title       标题              varchar(32)
    sub_title   副标题             varchar(16)
    src         提片地址            varchar(64)

2.文章(article_table)
    id
    author      作者              varchar(16)
    author_src  作者头像           varchar(64)
    title       标题               varchar(32)
    post_time   发布时间(s单位)      int
    content     内容                text
    n_like      赞                  int

3.用户(user_table)
    id
    username    用户名              varchar(32)
    password    密码                varchar(32)
    src         头像地址             varchar(64)

