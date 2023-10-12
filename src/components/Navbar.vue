<template>
  <nav class="navbar">

    <ul class="navbar-list">

      <li class="navbar-item">
<!--        <button class="navbar-link  active" data-nav-link>About</button>-->
        <RouterLink :to="{name:'about'}" class="navbar-link  active">About</RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'resume'}" class="navbar-link ">Resume</RouterLink>
      </li>

      <li class="navbar-item">

        <RouterLink :to="{name:'portfolio'}" class="navbar-link">Portfolio</RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'blog'}" class="navbar-link">Blog</RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink :to="{name:'contact'}" class="navbar-link">Contact</RouterLink>
      </li>

    </ul>

  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>


