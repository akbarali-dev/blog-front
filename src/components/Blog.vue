<template>
  <ul  class="blog-posts-list">
    <li v-for="blog in blogs" :key="blog" class="blog-post-item">
      <a href="#">

        <figure class="blog-banner-box">
          <img :src="getImage(blog.image)" alt="Design conferences in 2022" loading="lazy">
        </figure>

        <div class="blog-content">

          <div class="blog-meta">
            <p class="blog-category">Programming</p>

<!--            <span class="dot"></span>-->


            <time datetime="2022-02-23">
              {{ new Date(blog.created_at).toLocaleString('us') }}</time>
          </div>

          <h3 class="h3 blog-item-title">{{blog.title}}</h3>

          <p class="blog-text">
            {{blog.description}}
          </p>

        </div>

      </a>
    </li>



  </ul>
</template>

<script>
import {baseUrl} from "../contstants";

export default {
  name: "Blog",
    methods: {
    getImage(path) {
      return baseUrl + path
    },
  },
  props:{
    blogs:{
      type:Array,
      required:true
    }
  }
}
</script>


<style>
a:hover {
  color: #212121;
  margin-right: 1px;

}
</style>