<template>
  <nav class="navbar">

    <ul class="navbar-list">

      <li class="navbar-item">
        <!--        <button class="navbar-link  active" data-nav-link>About</button>-->
        <RouterLink :to="{name:'about'}"  :class="{active: this.$route.name==='about'}" class="navbar-link  ">About
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'resume'}"  :class="{active: this.$route.name==='resume'}" class="navbar-link ">Resume
        </RouterLink>
      </li>

      <li class="navbar-item">

        <RouterLink :to="{name:'portfolio'}"  :class="{active: this.$route.name==='portfolio'}" class="navbar-link">
          Portfolio
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'blog'}"  :class="{active: this.$route.name==='blog'}" class="navbar-link">Blog
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'contact'}"  :class="{active: this.$route.name==='contact'}" class="navbar-link">
          Contact
        </RouterLink>
      </li>


    </ul>

  </nav>
</template>

<script>
import Eyes from "./Eyes.vue";

import {useRouter} from 'vue-router'

export default {
  name: "Navbar",
  components: {Eyes},
  data() {
    return {
      about: true,
      resume: false,
      portfolio: false,
      blog: false,
      contact: false,
    }
  },


}
</script>


