<template>
  <article class="contact active" data-page="contact">

    <Header>Contact</Header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy"></iframe>
      </figure>
    </section>

    <section class="contact-form">

      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form>

        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" @input="checkFormValidation" placeholder="Full name"
                 required data-form-input v-model="full_name">

          <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input v-model="email">
        </div>

        <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input v-model="description"></textarea>

        <button  class="form-btn" type="submit" :disabled="!isFormValid" >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>

      </form>

    </section>

  </article>


</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "ContactView",
  components: {Header},
  data() {
    return {
      full_name: '',
      email: '',
      description: ''
    }
  },
  computed: {
    isFormValid() {
      return this.full_name !== '' && this.email !== '' && this.description !== '' && /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
    },
  },
  methods: {
    checkFormValidation() {
      // The computed property is used to check form validation
    },
    submitForm() {
      if (this.isFormValid) {

      }
    },
  },
}
</script>


