<!-- hash 和 history  -->

<!-- 区别在于 url 形式 -->
hsah : 'http://xx.com/#/about'
history : 'http://xx.com/about'

在 vue-router 4.x 版本中 设置模式发生变化
const router = createRouter({
    history: createWebHashHistory(),  // hash模式
    history: createWebHistory(), // history 模式
    history: createMemoryHistory(), // menory 模式
})

<!-- 使用 -->
<router-link to="/about">Go To About </router-link>