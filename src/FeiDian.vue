<template>
  <div>
      <h1>
          沸点页面
      </h1>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to,from,next){
    console.log('before router leave  feidian');
    next()
  },
  destroyed(){
    console.log('feidian  销毁了');
  }
}
</script>

<style>

</style>