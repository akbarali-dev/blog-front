<template>
  <article class="resume active" data-page="resume">

    <Header>Resume</Header>


    <!--Education-->
    <template v-if="data &&data.education">
      <EducationAndExperienceView :data="data.education" :isEducation="true"/>
    </template>
    <!--Experience-->
    <template v-if="data && data.experience">
      <EducationAndExperienceView :data="data.experience" :isEducation="false"/>
      <!--      <h1>{{data.experience}}</h1>-->
    </template>
    <!--Skills-->
    <template v-if="data && data.technology">
      <SkillsView :technology="data.technology"/>
    </template>
  </article>


</template>

<script>
import {Header} from "../components";
import EducationAndExperienceView from "./EducationAndExperienceView.vue"
import SkillsView from "./SkillsView.vue"
import {mapState} from "vuex";
import {baseUrl} from "../contstants";

export default {
  name: "ResumeView",
  components: {Header, EducationAndExperienceView, SkillsView},

  computed: {
    ...mapState({
      data: state => state.resume.data,
      isLoading: state => state.resume.isLoading

    }),
  },
  mounted() {
    this.$store.dispatch('resume')
  }
}
</script>


