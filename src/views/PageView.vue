<template>
  salom
</template>
<script>
import {setItem} from "../helpers/persistaneStorage";

export default {
  name: "PageView",
  mounted() {
    const username = this.$route.params.user;
    console.log(username)
    console.log('hello')
    this.$store.dispatch("alreadyExist", username)
        .then(()=>{
          setItem('current-user', username)
          return this.$router.push({name: 'about'})
        })
        .catch(()=>{
          return this.$router.push({name: 'not-found'})
        })

  }
}
</script>

<style scoped>

</style>