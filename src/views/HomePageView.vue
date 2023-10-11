<template>
<main>
  <SideBar/>
  <MainContentView/>
</main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import MainContentView from "./MainContentView.vue";

export default {
  name: "HomePageView",
  components: {MainContentView, SideBar}
}
</script>


<style>

</style>