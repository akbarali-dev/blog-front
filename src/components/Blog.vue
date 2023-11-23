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
            {{blog.description.substring(0, 300)}}
            <template v-if="blog.description.length>300">...</template>

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


<style scoped>
a:hover {
  color: #212121;
  margin-right: 1px;

}
h4{
  //white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}
</style>