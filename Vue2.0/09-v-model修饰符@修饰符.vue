<template>

v-model的修饰符
v-model.lazy 只有在input输入框发生一个blur时才触发
v-model.trim 将用户输入的前后的空格去掉
v-model.number 将用户输入的字符串转换成number



 v-on  事件修饰符 通过由点. 表示的指令后缀来调用修饰符。
.stop
.prevent
.capture
.self
.once 
阻止单击事件冒泡 @click.stop

提交事件不再重载页面 @submit.prevent

修饰符可以串联 @click.stop.prevent 

只有修饰符 @submit.prevent

添加事件侦听器时使用事件捕获模式  @click.capture

只当事件在该元素本身（比如不是子元素）触发时触发回调 @click.self

</template>
<script></script>
<style></style>
