<template>
<section v-if="data" class="service">

      <h3 class="h3 service-title">What i'm doing</h3>

      <ul class="service-list">
        <li  v-for="progres in data.currentProgress" :key="progres" class="service-item">

          <div class="service-icon-box">
            <div v-html="progres.icon"></div>

          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{{progres.name}}</h4>

            <p class="service-item-text">
              {{progres.description}}
            </p>
          </div>

        </li>



      </ul>

    </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CurrentProgressView",
    computed: {
    ...mapState({
      data: state => state.abouts.data,
      isLoading: state => state.abouts.isLoading

    }),

  },
}
</script>

.size{
  font-size: 0.73em
}
<style>

</style>