<template>
  <article class="portfolio active" data-page="portfolio">
    <Header>ERROR!</Header>
    <section class="projects">
      <div class="error">404</div>
      <p>Mavjud bo'lmagan sahifa</p>
      <button class="form-btn" type="submit" @click="submitHandler" >
          <span>Bosh sahifa</span>
        </button>
    </section>
  </article>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "PageNotFound",
  components: {Header},
  methods:{
    submitHandler(e){
      e.preventDefault()
      this.$router.push({name: 'about'})
    }
  }

}
</script>


<style scoped>
p{
  color: white;
  text-align: center;
}
.form-btn {
  margin-top: 50px;
  position: relative;

  width: 95%;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  font-size: var(--fs-6);
  text-transform: capitalize;
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);
}

.form-btn::before {
  content: "";
  position: relative;

  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}



.form-btn:hover {
  background: var(--bg-gradient-yellow-1);
}

.form-btn:hover::before {
  background: var(--bg-gradient-yellow-2);
}






.error {
  text-align: center;
  font-size: 10vw;
  color: var(--vegas-gold);
  //font-size:10vw
}


</style>