# kangaroo
Kangaroo是一个基于KOA2的Node MVC框架，目前功能还在完善中，叫脚手架可能更全面一些。期待大家的建议。



## Basic Use:
```
git clone https://github.com/Pierce-Zhu/kangaroo.git
yarn install
npm run start
```
open in browser at http://localhost:3001/

## Commit History:

#### 2018-06-06
* 新增util文件夾，新增基类BaseController（有待优化）
* 新增config文件夹
* 引入Mysql

#### 2018-06-05
* 更改service加载方式，将service挂在在app上
* 新增lib文件夹，隐藏启动配置，简化src/index.js文件

#### 2018-06-04
* 取消Router中将service作为参数传入(在routerLoader中将service作为参数传入Router时无法render的原因，是ctx.render函数结构体被破坏了，最后的几个大括号没有了。)
* 更改首页。

#### Initial version 2018-05-30
* 增加Controller和service模块
* 但是在routerLoader中将service作为参数传入Router时会导致在controller中无法正确的render页面
