<template>
  <div class="main-content">
    <Navbar/>
    <AbutView/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AbutView from "./AbutView.vue";

export default {
  name: "MainContentView",
  components: {AbutView, Navbar}
}
</script>


<style>
main {
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 25px;
}

.main-content {
  min-width: 75%;
  width: 75%;
  margin: 0;
}
</style>