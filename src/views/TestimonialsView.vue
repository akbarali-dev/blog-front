<template>
  <section v-if="testimonialsItems && !isLoading" class="testimonials">

    <h3 class="h3 testimonials-title">Testimonials</h3>

    <ul class="testimonials-list has-scrollbar">

      <li class="testimonials-item" v-for="item in testimonialsItems" :key="item" @click="openModal(item)">
        <div class="content-card" data-testimonials-item>

          <figure class="testimonials-avatar-box">
            <img :src="getImage(item.image)" :alt="item.title" width="60" data-testimonials-avatar>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>{{ item.full_name }}</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p v-if="item.description.length > 100">
              {{ item.description.substring(0, 100) }} ...
            </p>
            <p v-else>
              {{ item.description }}
            </p>
          </div>

        </div>
      </li>
    </ul>

  </section>


  <!--
    - testimonials modal
  -->
  <TestimonialsModal :text="modalText" :title="modalTitle"
                     :createdAt="modalCreatedAt" :image="modalImg" :isActive="modalVisible"
                     @close="closeModal" :class="{ active: modalVisible }"/>

</template>

<script>
import {TestimonialsModal} from '../components'
import {mapState} from "vuex";
import {baseUrl} from "../contstants";

export default {
  components: {TestimonialsModal},
  name: "TestimonialsView",
  data() {
    return {

      modalVisible: false,
      modalImg: {src: '', alt: ''},
      modalTitle: '',
      modalText: '',
      modalCreatedAt: ''
    };
  },

  methods: {
     getImage(path) {
      return baseUrl + path
    },
    openModal(item) {
      this.modalImg.src = this.getImage(item.image);
      this.modalImg.alt = item.full_name;
      this.modalTitle = item.full_name;
      this.modalText = item.description;
      this.modalCreatedAt = item.created_at;
      this.modalVisible = true;
    },
    closeModal(visible) {
      this.modalVisible = visible;
    },

  },

  computed: {
    ...mapState({
      testimonialsItems: state => state.abouts.data.testimonials,
      isLoading: state => state.abouts.isLoading

    }),


  },
}
</script>


<style>

</style>