**交互流程[组件[数据代理]] - > [服务{发起请求，拦截器}] - > [mockjs / server {后端}] 

**** .git流程
        1.远程主分支master 
        2.dev分支
        3.自己的分支
        4.将自己的分支与dev合并，最后将dev分支与master分支合并，master分支是稳定版，不要动

**git的常用命令
        1.git init初始化本地版本库
        2.git status查看工作区和暂存区的修改
        3.git add。把工作区所有修改提交到暂存区
        4.git commit -m“对本次提交的描述”把修改从暂存区提交到本地版本库
        5.git log查看提交历史记录git refiog查看所有的历史纪录
        6.git checkout -b分支名创建并切换分支
        7.git pull：把远程代码拉取下来并和本地合并
        8.git push origin分支名把本地仓库的代码推送到远程仓库3.dva 

**用到的框架介绍
        1.什么是dva：dva首先是一个基于redux和redux-saga的数据流方案，然后为了简化开发体验，dva还额外内了了react-router和fetch，所以也可以理解为一个轻量级的应用框架
        2.怎么安装dva：通过npm安装dva-cli并确保版本是0.9.1或以上.npm install dva-cli -g 
        3.用dav怎么创建一个新的项目：指令：dva new项目名称
        4.在dev中使用antd：指令：npm install antd babel-plugin-import --save
在此项目中 
        登录注册
        图片上传修改用户头像
        权限修改
        请求接口返回数据
        对表单进行的增删改查 表单验证问题
        exacl表格的导入导出
        
    |——merage
    |    |——user
    |    |    |---user.json    //用户数据
    |    |——index
    |    |    |---home.json    //首页数据
    |    |    |---recommend1.json    //加载更多
    |    |    |---recommend2.json    //加载更多
    |    |    |---recommend3.json    //加载更多
    |    |——search
    |    |    |---search.json    //搜索结果
    |    |    |---searchKey.json    //搜索关键字
    |    |——detail
    |    |    |---352876.json    //
    |    |——reader
    |    |    |---chapter-list.json    //目录
    |    |    |---data1.json    //第一章的jsonp地址
    |    |    |---data2.json    //第二章的jsonp地址
    |    |    |---data3.json    //第三章的jsonp地址
    |    |    |---data4.json    //第四章的jsonp地址
    |    |-index.js            //数据接口
    |——build
    |    |——page
    |    |    |——search.html //搜索页
    |    |    |——text.html //文章阅读页
    |    |    |——detail.html //详情页
    |    |    |——menu.html //目录页
    |    |    |——login.html //登录页
    |    |——js
    |    |    |——common
    |    |    |    |-temp.js   //handlebars模板编译公共方法
    |    |    |    |-getUrl.js  //获取地址栏参数
    |    |    |——index
    |    |    |    |-index.js   //首页
    |    |    |——search
    |    |    |    |-index.js   //搜索页
    |    |    |——text
    |    |    |    |-index.js   //文章阅
    |    |    |——detail
    |    |    |    |-index.js   //详情页
    |    |    |——menu
    |    |    |    |-index.js   //目录页
    |    |    |——login
    |    |    |    |-index.js   //登录页
    |    |    |——lib
    |    |    |    |-require.js
    |    |    |    |-handlebars.js
    |    |    |    |-flexible.js
    |    |    |    |-jquery.js
    |    |    |    |-jquery.lazyload.js  //图片懒加载
    |    |    |    |-jquery.base64.js //解码阅读文章 
    |    |    |    |-require.text.js
    |    |    |——config.js      //require配置文件
    |    |——css
    |    |    |-index.css
    |    |    |-common.css
    |    |    |-detail.css
    |    |    |-text.css
    |    |    |-menu.css
    |    |    |-search.css
    |    |——template
    |    |    |-index.html      //首页模板
    |    |    |-bolck-list.html //本周最火和限时免费
    |    |    |-dl-list.html //女生最爱男生最爱加载更
    |    |    |-recommend-list.html //重磅推荐模板
    |    |    |-detail.html //详情页模板
    |    |-index.html           //首页
    |-gulpfile.js
