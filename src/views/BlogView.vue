<template>
  <article class="blog active" data-page="blog">

    <Header>Blog</Header>

    <section class="blog-posts">

      <ul class="blog-posts-list">
        <Blog v-for="i in 5"/>
      </ul>

    </section>

  </article>

</template>

<script>
import Header from "../components/Header.vue";
import Blog from "../components/Blog.vue"

export default {
  name: "BlogView",
  components: {Header, Blog}
}
</script>

<style scoped>

</style>