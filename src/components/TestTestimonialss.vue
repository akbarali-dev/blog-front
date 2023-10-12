<template>
  <div>
    <!-- Testimonials items -->
    <div v-for="(item, index) in testimonialsItems" :key="index" @click="openModal(item)">
      <img :src="item.avatar" :alt="item.title" data-testimonials-avatar/>
      <h3 data-testimonials-title>{{ item.title }}</h3>
      <p data-testimonials-text>{{ item.text }}</p>
    </div>

    <!-- Modal container -->
    <div :class="{ active: modalVisible }" data-modal-container>
      <button @click="closeModal" data-modal-close-btn>Close</button>
      <img :src="modalImg.src" :alt="modalImg.alt" data-modal-img/>
      <h3 data-modal-title>{{ modalTitle }}</h3>
      <p data-modal-text>{{ modalText }}</p>
    </div>

    <!-- Overlay -->
    <div :class="{ active: modalVisible }" @click="closeModal" data-overlay></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonialsItems: [
        {
          title: "John Doe",
          avatar: "john-doe.jpg",
          text: "I had a great experience working with this team. They are highly skilled and professional.",
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
};
</script>