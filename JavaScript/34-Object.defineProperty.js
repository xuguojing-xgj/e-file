const myTarget = {}

const proxy = new Proxy(myTarget, {
    defineProperty(target, property, descriptor) {
        console.log('target', target);
        console.log('property', property);
        console.log('descriptor', descriptor);
        console.log('defineProperty()');
        return Reflect.defineProperty(...arguments)
    }
})

Object.defineProperty(proxy, 'foo', { value: 'bar' })
console.log(myTarget.foo);