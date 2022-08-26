<!--  为组件的props 标注类型 -->
<!-- 使用 <script setup> 时 defineProps() 宏函数支持从它的参数类型中推到类型 : -->

<script setup lang="ts">
// 这被称之为“运行时声明”，因为传递给 defineProps() 的参数会作为运行时的 props 选项使用。
const props = defineProps({
    foo: { type: String, required: true },
    bar: number
})
props.foo // string
props.bar // number | undefined

// 通过泛型参数来定义 props 的类型通常更直接：
const props = defineProps<{
    foo: String,
    bar?: number
}>()
</script>
