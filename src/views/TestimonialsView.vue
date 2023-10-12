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

  <div class="modal-container" :class="{ active: modalVisible }" data-modal-container>

    <div class="overlay" data-overlay></div>

    <section class="testimonials-modal">

      <button class="modal-close-btn" @click="closeModal" data-modal-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
          <img :src="modalImg.src" :alt="modalImg.alt" width="80" data-modal-img>
        </figure>

        <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.63091 0.144315L11.1066 1.03792C11.3675 1.19594 11.4272 1.54856 11.2349 1.78536C9.08005 4.43892 7.12216 7.31629 7.12195 10.8825C10.0635 10.8825 13.0949 13.3058 13.0949 16.4084C13.0949 20.7423 9.61052 23.4414 6.12633 22.939C2.64214 22.4367 0.58078 19.9249 0.153573 16.9107C-0.826125 9.99852 2.98637 3.77393 8.59945 0.151692C8.91222 -0.0501455 9.3125 -0.0485027 9.63091 0.144315ZM30.5361 0.144315L32.0117 1.03792C32.2727 1.19594 32.3323 1.54856 32.14 1.78536C29.9852 4.43892 28.0273 7.31629 28.0271 10.8825C30.9687 10.8825 34 13.3058 34 16.4084C34 20.7423 30.5157 23.4414 27.0315 22.939C23.5473 22.4367 21.4859 19.9249 21.0587 16.9107C20.079 9.99852 23.8915 3.77393 29.5046 0.151692C29.8174 -0.0501455 30.2177 -0.0485027 30.5361 0.144315Z"
                fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="1.92667" y1="4.65138e-07" x2="19.7024" y2="29.0178"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.259336" stop-color="#FFDB6E"/>
              <stop offset="1" stop-color="#FFBC5E"/>
            </linearGradient>
          </defs>
        </svg>


      </div>

      <div class="modal-content">

        <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

        <time datetime="2021-06-14">14 June, 2021</time>

        <div data-modal-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
            lot of experience
            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
            consectetur adipiscing
            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
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
              "                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        },
        {
          title: "Jane Smith",
          avatar: "jane-smith.jpg",
          text: "Outstanding service and exceptional quality of work. I highly recommend them!",
        },
        {
          title: "Bob Johnson",
          avatar: "bob-johnson.jpg",
          text: "Working with this team has been a pleasure. They deliver results on time and within budget.",
        },
      ],
      modalVisible: false,
      modalImg: {src: '', alt: ''},
      modalTitle: '',
      modalText: '',
    };
  },
  methods: {
    openModal(item) {
      this.modalImg.src = item.avatar;
      this.modalImg.alt = item.title;
      this.modalTitle = item.title;
      this.modalText = item.text;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
}
</script>


<style>

</style>