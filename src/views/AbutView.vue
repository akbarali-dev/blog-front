<template>

  <article class="about  active" data-page="about">

    <Header>About me</Header>
    <Loader v-if="isLoading"/>
    <template v-else-if=" data">

      <AboutText>
        {{ data.about }}
      </AboutText>


      <!--
        - service
      -->
      <CurrentProgressView/>


      <!--
        - testimonials
      -->
      <TestimonialsView/>


      <!--
        - clients
      -->

      <ClientsView/>
    </template>

  </article>


</template>

<script>

import {mapState} from 'vuex'
import {AboutText, Header, Test} from "../components";


import {ClientsView, TestimonialsView, CurrentProgressView} from '.'

export default {
  name: "AbutView",
  components: {TestimonialsView, CurrentProgressView, Header, AboutText, ClientsView, Test},
  computed: {
    ...mapState({
      data: state => state.abouts.data,
      isLoading: state => state.abouts.isLoading,
      sender: state => state.user.sender
    }),


  },
  mounted() {
    this.$store.dispatch('abouts')
    setTimeout(() => {
      this.$store.commit('senderFailure');
    }, 5000);

  }
}
</script>


