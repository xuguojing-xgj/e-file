// component 特殊元素 的组件 :is=""  代表动态绑定的组件

// 基于组合式 api setup 使用 
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>

// 渲染 HTML 元素：
<component :is="href ? 'a' : 'span'"></component>
