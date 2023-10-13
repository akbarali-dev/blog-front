<template>
  <section class="testimonials">

    <h3 class="h3 testimonials-title">Testimonials</h3>

    <ul class="testimonials-list has-scrollbar">

      <li class="testimonials-item" v-for="item in testimonialsItems" :key="item" @click="openModal(item)">
        <div class="content-card" data-testimonials-item>

          <figure class="testimonials-avatar-box">
            <img :src="item.avatar" :alt="item.title" width="60" data-testimonials-avatar>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>{{ item.title }}</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              {{ item.text }}
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
                     :createdAt="modalCreatedAt" :image="modalImg"
                     @close="closeModal" :class="{ active: modalVisible }"/>

</template>

<script>
import {TestimonialsModal} from '../components'

export default {
  components: {TestimonialsModal},
  name: "TestimonialsView",
  data() {
    return {
      testimonialsItems: [
        {
          title: "Daniel lewis",
          avatar: "john-doe.jpg",
          text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n" +
              "                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. " +
              "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n" +
              "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n" +
              "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n" +
              "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n" +
              "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a\n" +
              "                lot of experience\n" +
              "                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt\n" +
              "                consectetur adipiscing\n"
          ,
          created_at: "14 June, 2020"
        },
        {
          title: "Jane Smith",
          avatar: "jane-smith.jpg",
          text: "Outstanding service and exceptional quality of work. I highly recommend them!",
          created_at: "14 June, 2019"
        },
        {
          title: "Bob Johnson",
          avatar: "bob-johnson.jpg",
          text: "Working with this team has been a pleasure. They deliver results on time and within budget.",
          created_at: "14 June, 2022"
        },
      ],
      modalVisible: false,
      modalImg: {src: '', alt: ''},
      modalTitle: '',
      modalText: '',
      modalCreatedAt: ''
    };
  },
  methods: {
    openModal(item) {
      this.modalImg.src = item.avatar;
      this.modalImg.alt = item.title;
      this.modalTitle = item.title;
      this.modalText = item.text;
      this.modalCreatedAt = item.created_at;
      this.modalVisible = true;
    },
    closeModal(visible) {
      this.modalVisible = visible;
    },
  },
}
</script>


<style>

</style>