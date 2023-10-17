<template>
  <div class="modal-container" data-modal-container>

    <div class="overlay" :class="{active:isActive}" data-overlay></div>

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

        <img src="public/images/logos/icon-quote.svg" alt="quote icon">


      </div>

      <div class="modal-content">

        <h4 class="h3 modal-title" data-modal-title>{{ title }}</h4>

        <time datetime="2021-06-14">{{ new Date(createdAt).toLocaleDateString('us') }}</time>

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
  props: ['text', 'title', 'createdAt', 'image', 'isActive'],
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