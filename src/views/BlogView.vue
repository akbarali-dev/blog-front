<template>
  <article class="blog active" data-page="blog">

    <Header>Blog</Header>
    <Loader v-if="isLoading"/>

    <section class="blog-posts">
      <template v-if="blogs">
        <Blog :blogs="blogs"/>
      </template>
    </section>

  </article>

</template>

<script>
import Header from "../components/Header.vue";
import Blog from "../components/Blog.vue"
import {mapState} from "vuex";

export default {
  name: "BlogView",
  components: {Header, Blog},
  computed: {
    ...mapState({
      blogs: state => state.blog.data,
      isLoading: state => state.blog.isLoading

    }),
  },
  mounted() {
    this.$store.dispatch('blog')
  }
}
</script>

<style scoped>

</style>