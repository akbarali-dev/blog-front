<template>
  <section class="skill">

    <h3 class="h3 skills-title">My skills</h3>

    <ul class="skills-list content-card">

      <li class="skills-item" v-for="t in technology" :key="t">

        <nav class="accordion-container ">
          <div :class="{ 'main-item--open': test }" @click="toggleMainItem">

            <div class="title-wrapper">
              <h5 class="h5">{{ t.name }}</h5>
              <data :value="t.discount">{{ t.discount }}%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" :style="{width: getDiscount(t.discount)}"></div>
            </div>
          </div>


          <ul class="skills-list content-card skills-title">
            <li v-for="s in t.skills" :key="s" class="skills-item">
              <div class="title-wrapper">
                
                <h5 class="h5">{{ s.name }}</h5>
                <data :value="s.discount">{{ s.discount }}%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" :style="{width: getDiscount(s.discount)}"></div>
              </div>
            </li>
          </ul>
        </nav>


      </li>

    </ul>


  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SkillsView",
  data() {
    return {
      test: false
    }
  },
  computed: {
    style() {
      return {'width: ': 10 + '%'}
    }
  },
  props: {
    technology: {
      type: Array,
      required: true
    }
  },
  methods: {
    getDiscount(d) {
      return d + '%'
    },
    toggleMainItem() {
      this.test = !this.test;
    },
  }
}
</script>


<style scoped>

:root {
  --primary-violet: #6238E2;
  --background-violet-light: #EEEBFD;
  --gray: #D5D4D5;
  --background: var(--orange-yellow-crayola);
}

html {
  font-size: 16px;
}
.lll{
  border: 1px solid var(--jet);
}

body {
  background: var(--background);
  height: 100vh;
  display: flex;
  padding-top: 260px;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

.accordion-container {
  color: #EEEBFD;
  margin: 0 auto;
  min-width: 0px;
  overflow: hidden;
  border-radius: 10px;

}

.main-item {

  border-radius: 8px;
  padding: 12px;
  display: flex;
  cursor: pointer;
  color: #EEEBFD;
  background: var(--eerie-black-2);
  align-items: center;
  justify-content: start;
  gap: 8px;
  transition: all ease-in-out 0.1s;

}

.main-item:hover {

  background-color: var(--background-violet-light);
  color: var(--primary-violet);
}

.main-item svg {
  color: var(--background);
  transition: all ease-in-out 0.25s;
}

.main-item:hover svg {
  color: var(--primary-violet);
}

.main-item--open {
  border-radius: 8px 8px 0px 0px;
  transition: all 200ms;
  color: white;
}

.main-item--open:hover {
  color: white;
}

.main-item--open svg {
  color: white;
}

.main-item--open:hover svg {
  color: white;
}

.accordion-container > ul {
  max-height: 0px;
  background-color: var(--background);
  list-style-type: none;
  padding-left: 14px;
  opacity: 0;
  visibility: hidden;
  transition: all ease-in-out 0.2s;
}

.main-item--open + ul {
  visibility: visible;
  max-height: 400px;
  opacity: 1;
  border-radius: 0px 0px 8px 8px;
//display: flex; //align-items: center; //flex-direction: column; //background: var(--jet);
}

.accordion-container > ul > li {
  height: 48px;
//display: flex; //width: 100%; align-items: center;
}

.accordion-container > ul > li:hover {
  cursor: pointer;
}

</style>