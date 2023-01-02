## 内容
浏览器
沙箱环境（js标准库、内置库、虚拟化的html--DOM对象、window对象）-----可被使用
传统更新数据方式
>html虚拟化DOM
>JS调用虚拟化的DOM，通过提供的标准API调用，或通过jquery提供的API调用
>更新数据需要操作DOM
>学习API成本高

Vue方式
>事先构建好了Vue对象与Dom的关系
>更新时直接操作Vue对象就可以了，不用考虑DOM

Nodejs
可以写服务器，webapp，脚本
提供JS标准库，Nodejs API，第三方库
第三方库目前知道的，fs，Jsonfile，express，axios，可以做什么
>fs，Jsonfile    可以实现扫描json文件生成脚本
>fs，Jsonfile，express    显示json文件内容的webapp
>fs，Jsonfile，axios    扫描json文件实现上传功能

JS标准库
实现数据格式的操作
哪里找，mozilla dev、w3c、犀牛书

语法
>一个对象
>两个函数（同步、异步）
>三个结构（顺序、条件、循环）
>n种数据结构

重中之重
思维->实现的功能
大家学习任何数据格式的时候都要有主动的思路，根据自己的需求主动去找实现方式，而不是根据现在已经会的东西去调整需求，出来一个对付的结果