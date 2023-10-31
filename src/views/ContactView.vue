<template>
  <article class="contact active" data-page="contact">

    <Header>Contact</Header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.66968298671!2d69.1969665331789!3d41.282568073028806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1697565567114!5m2!1sru!2s"
            width="400" height="300" loading="lazy">
        </iframe>
      </figure>
    </section>

    <section class="contact-form">

      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form>

        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" @input="checkFormValidation" placeholder="Full name"
                 required data-form-input v-model="full_name">

          <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input
                 v-model="email">
        </div>

        <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input
                  v-model="description"></textarea>

        <button class="form-btn" type="submit" @click="submitHandler" :disabled="!isFormValid">
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>

      </form>

    </section>

  </article>


</template>

<script>
import Header from "../components/Header.vue";
import {mapState} from "vuex";

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
    ...mapState({
      contact: state => state.abouts.contact,
    }),
  },

  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        user: this.contact.contact.id,
        full_name: this.full_name,
        email: this.email,
        description: this.description,
      }
      console.log(data)
      this.$store
          .dispatch('sendMessage', data)
          .then(
              this.$router.push({name: 'about'})
          )
          .catch(err => console.log('ERROR', err))
    },

    submitForm() {
      if (this.isFormValid) {

      }
    },
  },
}
</script>


