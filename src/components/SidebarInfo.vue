<template>

  <div v-if="contact" class="sidebar_info_more"
       :class="{activet : visible }"
  >
    <div class="separator"></div>
    <ul class="contacts-list">
      <li class="contact-item">
        <div class="icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope"
               viewBox="0 0 16 16">
            <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>

        </div>

        <div class="contact-info">
          <p class="contact-title">Email</p>

          <a :href="`mailto:${contact.contact.email}`" :title="contact.contact.email" class="contact-link">{{contact.contact.email}}</a>
        </div>

      </li>

      <li class="contact-item">

        <div class="icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone"
               viewBox="0 0 16 16">
            <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>

        <div class="contact-info">
          <p class="contact-title">Phone</p>

          <a :href="`tel:${contact.contact.phone}`" class="contact-link">{{contact.contact.phone}}</a>
        </div>

      </li>

      <li class="contact-item">

        <div class="icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3"
               viewBox="0 0 16 16">
            <path
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>

        <div class="contact-info">
          <p class="contact-title">Birthday</p>

          <time datetime="1982-06-23">{{contact.contact.birth_date}}</time>
        </div>

      </li>

      <li class="contact-item">

        <div class="icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
               viewBox="0 0 16 16">
            <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>

        <div class="contact-info">
          <p class="contact-title">Location</p>

          <address>{{contact.location.name}}</address>
        </div>

      </li>

    </ul>

    <div class="separator"></div>

    <ul class="social-list">

      <li v-for="social in contact.socialNetwork" :key="social" class="social-item">

        <a :href="social.link" class="social-link">
          <div v-html="social.icon.code"></div>
        </a>
      </li>



    </ul>

  </div>
</template>

<script>
import {mapState} from "vuex";
import {baseUrl} from "../contstants";

export default {
  name: "SidebarInfo",
  props: ['visible'],
  computed: {
    ...mapState({
      contact: state => state.abouts.contact,
      isLoading: state => state.abouts.isLoading

    }),

  },

}
</script>


<style scoped>

 .sidebar_info_more {
    opacity: 1;
    visibility: visible;
    transition: top 5s;
   animation: fadeIn 5s forwards;
  }

 .sidebar.active .sidebar_info_more {
  opacity: 1;
   transition: top 5s;
  visibility: visible;
}


.sidebar {
  width: 200px;
  height: 100%;
  background-color: #333;
  position: fixed;
  top: -100%;
  left: 0;
  transition: top 5s;
}



</style>