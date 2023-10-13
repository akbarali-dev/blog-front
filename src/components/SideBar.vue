<template>
  <aside class="sidebar" data-sidebar>

    <!--      <SidebarInfoView/>-->
    <div class="sidebar-info">

      <figure class="avatar-box">
        <img src="image/blakc and dark.png" alt="Akbarali Asqaraliyev" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Richard hanrick">Akbarali Asqaraliyev</h1>

        <p class="title">Web developer</p>
      </div>

      <button @click="toggleSidebar" class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

    </div>
    <SidebarInfo :visible="sidebarOpen"/>

  </aside>
</template>

<script>
import SidebarInfoView from "../views/SidebarInfoView.vue";
import ContactItem from "./ContactItem.vue";
import SidebarInfo from "./SidebarInfo.vue";

export default {
  name: "SideBar",
  components: {SidebarInfo, ContactItem, SidebarInfoView},
  data() {
    return {
      sidebarOpen: true,
    }

  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  }
}
</script>


<style>

</style>