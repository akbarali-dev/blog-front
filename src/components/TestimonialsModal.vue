<template>
  <div class="modal-container" data-modal-container>

    <div class="overlay" data-overlay></div>

    <section class="testimonials-modal">

      <button class="modal-close-btn" @click="$emit('close', false)" data-modal-close-btn>
        <!--        <ion-icon name="close-outline"></ion-icon>-->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
             viewBox="0 0 16 16">
          <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
          <img :src="image.src" :alt="title" width="80" data-modal-img>
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

        <h4 class="h3 modal-title" data-modal-title>{{ title }}</h4>

        <time datetime="2021-06-14">{{ createdAt }}</time>

        <div data-modal-text>
          <p>
            {{ text }}
          </p>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "TestimonialsModal",
  props: ['text', 'title', 'createdAt', 'image'],
  data() {
    return {
      modalVisible: false
    }
  },
  methods: {
    closeModal() {
      this.modalVisible = false;
    },
  }
}
</script>


<style>

</style>