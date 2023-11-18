<template>

  <article class="portfolio active" data-page="portfolio">

    <Header>Portfolio</Header>
    <Loader v-if="isLoading"/>

    <!--<Test/>-->
    <section class="projects">


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


