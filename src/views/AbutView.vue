<template>
  <article class="about  active" data-page="about">

    <Header>About me {{data}}</Header>
    <AboutText>
      I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
      I enjoy
      turning complex problems into simple, beautiful and intuitive designs.
      My job is to build your website so that it is functional and user-friendly but at the same time attractive.
      Moreover, I
      add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
      across your
      message and identity in the most creative way. I created web design for many famous brand companies.
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

  </article>


</template>

<script>

import {mapState} from 'vuex'
import {AboutText,Header} from "../components";


import {ClientsView, TestimonialsView, CurrentProgressView} from '.'

export default {
  name: "AbutView",
  components: {TestimonialsView, CurrentProgressView, Header, AboutText, ClientsView},
  computed:{
    ...mapState({
      data:state => state.abouts.data
    })
  },
  mounted(){
    console.log("MOUNTED")
    this.$store.dispatch('abouts')
  }
}
</script>


