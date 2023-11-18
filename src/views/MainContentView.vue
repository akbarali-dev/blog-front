<template>
<!--  <SnackBar v-if="sender">Send message</SnackBar>-->

  <div class="main-content">
    <SnackBar2 v-if="sender">Xabar yuborildi</SnackBar2>
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
import {mapState} from "vuex";

export default {
  name: "MainContentView",
  components: {ResumeView, AbutView, Navbar},
  computed: {
    ...mapState({
      sender: state => state.user.sender
    }),


  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('senderFailure');
    }, 5000);
  }
}
</script>


