<template>
  <div class="hidden-element">
    <!-- Your content goes here -->
    <p style="color: white">This element becomes visible after 5 seconds.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectVisible: false,
      selectedValue: 'Select an option',
      selectItems: ['Option 1', 'Option 2', 'Option 3'], // Define your select options here
      filterBtns: ['All', 'Category 1', 'Category 2'], // Define your filter buttons here
      selectedFilter: 'All',
    };
  },
  methods: {
    toggleSelect() {
      this.selectVisible = !this.selectVisible;
    },
    selectItem(item) {
      this.selectedValue = item;
      this.selectVisible = false;
      this.activeFilter = item.toLowerCase();
    },
    filterItems(filter) {
      this.selectedFilter = filter;
    },
  },
  computed: {
    activeFilter() {
      return this.selectedFilter.toLowerCase();
    },
  },
};
</script>
<style scoped>
 .hidden-element {
      visibility: hidden;
      animation: fadeIn 5s forwards;
      animation-delay: 1s; /* Delay the animation for 5 seconds */
    }

    @keyframes fadeIn {
      to {
        visibility: visible;
        opacity: 1;
      }
    }
</style>

