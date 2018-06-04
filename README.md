# kangaroo

## Commit History:
```
git clone https://github.com/Pierce-Zhu/kangaroo.git
yarn install
npm run start
```
open in browser at http://localhost:3001/

## Commit History:
#### 2018-06-04
* 先不采用在Router中将service作为参数传入(在routerLoader中将service作为参数传入Router时无法render的原因，是ctx.render函数结构体被破坏了，最后的几个大括号没有了。)
* 改了下首页。

#### Initial version 2018-05-30
* 增加Controller和service模块
* 但是在routerLoader中将service作为参数传入Router时会导致在controller中无法正确的render页面