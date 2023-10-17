<template>
  <div class="container test" v-if="info">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-4">
      <div class="col-md-6 d-flex align-items-center">
        <a @click="this.$router.push('/')" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <img src="/favicon.ico" alt="main">
        </a>
        <span class="mb-3 mb-md-0 text-muted">{{info.info}}</span>
      </div>
      <div class="col-md-4 justify-content-end d-flex">
        <Eyes :visitors="info.visitor"/>
      </div>



    </footer>
  </div>
</template>

<script>
import Eyes from "./Eyes.vue";
import {mapState} from "vuex";
import {baseUrl} from "../contstants";

export default {
  name: "Footer",
  components: {Eyes},
  mounted() {
    this.$store.dispatch('info')
  },
    computed: {
    ...mapState({
      info: state => state.footer.data,
      isLoading: state => state.footer.isLoading

    }),
  },
}
</script>


<style scoped>
img {
  max-height: 100px;
}
.test{
  margin-top: 60px;
    margin-bottom: 100px;
}
</style>