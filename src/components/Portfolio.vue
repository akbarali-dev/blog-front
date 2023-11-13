<template>
  <ul class="project-list">

    <li class="project-item  active" data-filter-item data-category="web development"
        v-for="portfolio in portfolios" :key="portfolio.id"
    >
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
                 viewBox="0 0 16 16">
              <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </div>

          <img :src="getImage(portfolio.image)" alt="finance" loading="lazy">
        </figure>

        <h3 class="project-title">{{ portfolio.name }}</h3>
        <div class="test" v-for="c in portfolio.category" :key="c.id">
          <a href="#" class="portfolio-category">#{{ c.name }}</a>
        </div>

      </a>
    </li>


  </ul>
</template>

<script>
import {baseUrl} from "../contstants";

export default {
  name: "Portfolio",
  methods: {
    getImage(path) {
      return baseUrl + path
    },
  },
  props: {
    portfolios: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
.test {
  //color: #9CE6A8;
  display: inline-block;
}

a:hover {

  color: Canvas;
  margin-right: 1px;

}

a {

  color: #9CE6A8;
}

.project-title,
.portfolio-category {
  margin-left: 10px;
  word-wrap: break-word;
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.3;
}

.portfolio-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}
</style>