<template>
  <li class="contact-item">

    <div class="icon-box">
      <ion-icon :name="icon"></ion-icon>
    </div>

    <div class="contact-info">
      <p class="contact-title">{{ title }}</p>

      <a :href="'tel:'+{href}" class="contact-link">{{ data }}</a>
    </div>

  </li>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    title: {
      type: String,
      required: true
    },
    href:{
      type:String,
      required: true
    },
    icon:{
      type:String,
      required: true
    },
    data:{
      type:String,
      required: true
    },
  }
}
</script>


<style>

</style>