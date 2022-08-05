<template>
  <div>
    <h1>home页面</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeEach(to, form, next) {
  //   console.log('组件内中 before each' );
  //   next()
  // },
  beforeRouteUpdate(to,from,next) {
        console.log('组件内中 before router update' );
    next()
  },
  beforeRouteEnter(to, form, next) {
        console.log('组件内中 before routear enter' );
    next()
  },
};
</script>

<style>
</style>