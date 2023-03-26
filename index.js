const receivesAFunction  = (fn) => fn()
const returnsANamedFunction = () =>{
    const fn = () =>   console.log('this')
    return fn
}
const returnsAnAnonymousFunction = () => function () {console.log('this')}