<template>
  <aside class="sidebar" data-sidebar>

    <!--      <SidebarInfoView/>-->
    <Loader v-if="isLoading"/>
    <div v-else-if="contact" class="sidebar-info">

      <figure class="avatar-box">
        <img :src="imageUrl" alt="Akbarali Asqaraliyev" width="80">
      </figure>


      <div class="info-content">
        <h1 class="name" :title="contact.contact.full_name">{{ contact.contact.full_name }}</h1>


        <p class="title">{{ contact.contact.job_name }}</p>
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
import {mapState} from "vuex";
import {baseUrl} from '../contstants'

export default {
  name: "SideBar",
  components: {SidebarInfo, ContactItem, SidebarInfoView},
  data() {
    return {
      sidebarOpen: true,
    }
  },
   mounted() {


    this.$store.dispatch('contact')
  },
  computed: {
    ...mapState({
      contact: state => state.abouts.contact,
      isLoading: state => state.abouts.isLoadingSide

    }),
    imageUrl() {

      return baseUrl+this.contact.contact.image;
    },
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