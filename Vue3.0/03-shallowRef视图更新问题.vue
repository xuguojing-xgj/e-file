<!--  shallowRef -->
<template>
<div>
    <p></p>
</div>
</template>

<script setup lang="ts">
// shallowRef 视图不更新问题 配合triggerRef 使用可已进行试图更新
// 但是 单独使用 shallowRef 再使用ref 更改值 shallowRef 值也会被改变
// 原因 :  ref 再使用的时候 触发了 triggerRefValue 所有会 更改掉 shallowRef 的值

//  源码 ↓
// class RefImpl<T> {
//   private _value: T
//   private _rawValue: T

//   public dep?: Dep = undefined
//   public readonly __v_isRef = true

//   constructor(value: T, public readonly __v_isShallow: boolean) {
//     this._rawValue = __v_isShallow ? value : toRaw(value)
//     this._value = __v_isShallow ? value : toReactive(value)
//   }

//   get value() {
//     trackRefValue(this)
//     return this._value
//   }

//   set value(newVal) {
//     const useDirectValue =
//       this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
//     newVal = useDirectValue ? newVal : toRaw(newVal)
//     if (hasChanged(newVal, this._rawValue)) {
//       this._rawValue = newVal
//       this._value = useDirectValue ? newVal : toReactive(newVal)
//       triggerRefValue(this, newVal)
//     }
//   }
// }

// export function triggerRef(ref: Ref) {
//   triggerRefValue(ref, __DEV__ ? ref.value : void 0)
// }
</script>

<style>
</style>