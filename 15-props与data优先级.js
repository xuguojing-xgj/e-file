// 在vue 源码中 vue\src\core\instance\state.ts 
// 优先级中 1. props 2. methods 3. data 4. computed 5. watch
// 源码如下: 

// export function initState(vm: Component) {
//     const opts = vm.$options
//     if (opts.props) initProps(vm, opts.props)
  
//     // Composition API
//     initSetup(vm)
  
//     if (opts.methods) initMethods(vm, opts.methods)
//     if (opts.data) {
//       initData(vm)
//     } else {
//       const ob = observe((vm._data = {}))
//       ob && ob.vmCount++
//     }
//     if (opts.computed) initComputed(vm, opts.computed)
//     if (opts.watch && opts.watch !== nativeWatch) {
//       initWatch(vm, opts.watch)
//     }
//   }