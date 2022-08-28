<template>
    <div></div>
</template>

<script setup lang="ts">
// import { reactive , shallowReactive, readonly, isReactive} from 'vue'

// const msg = reactive() // 接收复杂类型 [] {}


/**
 * 源码 ↓
 */
// export function reactive(target: object) {
//   if trying to observe a readonly proxy, return the readonly version.
//   如果尝试观察只读代理，请返回只读版本。
//   if (isReadonly(target)) {
//     return target
//   }
//   return createReactiveObject(
//     target, // 传入的 reactive 数据 
//     false, // 是否只读
//     mutableHandlers, // 用于 Object Array 类型创建 Proxy
//     mutableCollectionHandlers, // 用于 Set Map WeakSet 类型创建 Proxy 
//     reactiveMap // WeakMap
//   )
// }
/**
 * function createReactiveObject() {
 *   // 判断 如果我们传入的不是 复杂数据类型 则会报错
    if (!isObject(target)) {
        if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
        }
    return target
    }
 * }
 */
</script>

<style>
</style>