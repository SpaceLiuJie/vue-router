import router from './router/index/js';

router.beforeEach((to, form, next) => {

    console.log('g before eachh');
    next()
})
router.beforeResolve((to, form, next) => {
    console.log('g before resolve');
    next()
})

router.afterEach((to, form, next) => {
    console.log('g after eacg');
    next()
})