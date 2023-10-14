<template>
  <nav class="navbar">

    <ul class="navbar-list">

      <li class="navbar-item">
        <!--        <button class="navbar-link  active" data-nav-link>About</button>-->
        <RouterLink :to="{name:'about'}" @click="activeAbout" :class="{active: about}" class="navbar-link  ">About
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'resume'}" @click="activeResume" :class="{active: resume}" class="navbar-link ">Resume
        </RouterLink>
      </li>

      <li class="navbar-item">

        <RouterLink :to="{name:'portfolio'}" @click="activePortfolio" :class="{active: portfolio}" class="navbar-link">
          Portfolio
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'blog'}" @click="activeBlog" :class="{active: blog}" class="navbar-link">Blog
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'contact'}" @click="activeContact" :class="{active: contact}" class="navbar-link">
          Contact
        </RouterLink>
      </li>


    </ul>

  </nav>
</template>

<script>
import Eyes from "./Eyes.vue";

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
  computed: {
    currentRouteName() {
      return this.$router;
    }
  },
  methods: {
    allUnActive() {
      this.about = false
      this.resume = false
      this.portfolio = false
      this.blog = false
      this.contact = false
    },
    activeAbout() {
      console.log(this.currentRouteName);
      this.allUnActive()
      this.about = true
    },
    activeResume() {
      this.allUnActive()
      this.resume = true
    },
    activePortfolio() {
      this.allUnActive()
      this.portfolio = true
    },
    activeBlog() {
      this.allUnActive()
      this.blog = true
    },
    activeContact() {
      this.allUnActive()
      this.contact = true
    }
  }
}
</script>


