## 内容
>计算属性
>观察者
>存储器

## 计算属性
获得关于某vue属性进行计算后的结果值，当vue属性值发生变化的时候，这个结果也跟着变化
跟vue函数的区别，函数好像不能根据vue属性改变而改变？？？？？？
语法：
compute:{
    getname:function(){

    }
}
## 观察者
监测vue属性值的变化
语法：
watch{

}

## 存储器
获得和设置变量的值
在设置中对变量进行需要的处理，验证有效性，转换等操作
compute{
    propName{
        get:functionF(){}
        set:function(){}
    }
}