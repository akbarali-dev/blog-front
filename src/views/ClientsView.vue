<template>
  <section v-if="clients && !isLoading" class="clients">

    <h3 class="h3 clients-title">Clients</h3>

    <ul class="clients-list has-scrollbar">

      <li v-for="client in clients" :key="client" class="clients-item">
        <a href="#">
          <img :src="getImage(client.image)" alt="client logo">
        </a>
      </li>


    </ul>

  </section>
</template>

<script>
import {mapState} from "vuex";
import {baseUrl} from "../contstants";

export default {
  name: "ClientsView",
  methods:{
    getImage(path) {
      return baseUrl + path
    },
  },
  computed: {
    ...mapState({
      clients: state => state.abouts.data.clients,
      isLoading: state => state.abouts.isLoading

    }),


  },
}
</script>


<style scoped >
img {
  border-radius: 70%;
  width: 200px;
  height: 150px;
}
</style>