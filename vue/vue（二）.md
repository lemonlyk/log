# vue模板语法
## 内容
> 语法
> 事件
> 抽奖程序编写
>

## 模板语法
> {{vue属性}}                   #文本
> v-html="vue属性"              #原始HTML
> v-once                        #只显示一次
> v-bind:元素属性="vue属性"      #绑定属性
> v-if                          #判断是否可见
> v-for                         #循环
> v-on                          #事件监听
值可以是表达式，不能是多条语句

v-bind 缩写
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>

v-on 缩写
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>

## 抽奖程序编写
思路，构建html框架，在bootstrap上可用的组件，设置页面信息与vue属性的关联关系，编写js代码，更新各vue属性