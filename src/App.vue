<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'App',
  components: {

  },
  data: () => {
    return {
      res: {}
    }
  },
  mounted() { 
    // storage.setItem('a', 1)

  //   this.axios.get('/user/login').then((res) => {
  //     this.res = res
  //   }).then((e) => {
  //     console.log(e)
  //   })
  }

}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';




</style>
