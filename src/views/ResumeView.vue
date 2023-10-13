<template>
  <article class="resume active" data-page="resume">

    <Header>Resume</Header>


    <!--Education-->
    <EducationAndExperienceView :isEducation="true"/>

      <!--Experience-->
    <EducationAndExperienceView :isEducation="false"/>

    <!--Skills-->
    <SkillsView/>
  </article>


</template>

<script>
import {Header} from "../components";
import EducationAndExperienceView from "./EducationAndExperienceView.vue"
import SkillsView from "./SkillsView.vue"

export default {
  name: "ResumeView",
  components: {Header, EducationAndExperienceView, SkillsView}
}
</script>


