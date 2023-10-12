<template>
  <div class="main-content">
    <!--#NAVBAR-->
    <Navbar/>
    <RouterView/>
    <!--#ABOUT-->
    <!--#RESUME-->
    <!--#PORTFOLIO-->
    <!--#BLOG-->
    <!--#CONTACT-->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AbutView from "./AbutView.vue";
import ResumeView from "./ResumeView.vue";

export default {
  name: "MainContentView",
  components: {ResumeView, AbutView, Navbar}
}
</script>


