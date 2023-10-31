<template>

  <article class="portfolio active" data-page="portfolio">

    <Header>Portfolio</Header>

    <!--<Test/>-->
    <section class="projects">

      <!--      <ul class="filter-list">-->

      <!--        <li class="filter-item">-->
      <!--          <button class="active" data-filter-btn>All</button>-->
      <!--        </li>-->

      <!--        <li class="filter-item">-->
      <!--          <button data-filter-btn>Web design</button>-->
      <!--        </li>-->

      <!--        <li class="filter-item">-->
      <!--          <button data-filter-btn>Applications</button>-->
      <!--        </li>-->

      <!--        <li class="filter-item">-->
      <!--          <button data-filter-btn>Web development</button>-->
      <!--        </li>-->

      <!--      </ul>-->

      <!--      <div class="filter-select-box">-->

      <!--        <button class="filter-select" data-select>-->

      <!--          <div class="select-value" data-selecct-value>Select category</div>-->

      <!--          <div class="select-icon">-->
      <!--            <ion-icon name="chevron-down"></ion-icon>-->
      <!--          </div>-->

      <!--        </button>-->

      <!--        <ul class="select-list">-->

      <!--          <li class="select-item">-->
      <!--            <button data-select-item>All</button>-->
      <!--          </li>-->

      <!--          <li class="select-item">-->
      <!--            <button data-select-item>Web design</button>-->
      <!--          </li>-->

      <!--          <li class="select-item">-->
      <!--            <button data-select-item>Applications</button>-->
      <!--          </li>-->

      <!--          <li class="select-item">-->
      <!--            <button data-select-item>Web development</button>-->
      <!--          </li>-->

      <!--        </ul>-->

      <!--      </div>-->
      <template v-if="portfolio && portfolio.portfolio">
        <Portfolio :portfolios="portfolio.portfolio"/>
      </template>
    </section>

  </article>


</template>

<script>
import Header from "../components/Header.vue";
import Test from "../components/Test.vue"
import {mapState} from "vuex";
import Portfolio from "../components/Portfolio.vue";

export default {
  name: "PortfolioView",
  components: {Portfolio, Header, Test},
  computed: {
    ...mapState({
      portfolio: state => state.portfolio.data,
      isLoading: state => state.portfolio.isLoading

    }),
  },
  mounted() {
    this.$store.dispatch('portfolio')
  }
}
</script>


