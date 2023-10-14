<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-grow loaderColor"  role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Loader',
}
</script>
<style>
.loaderColor {
  color: var(--orange-yellow-crayola);
  width: 15rem;
  height: 15rem;
}
</style>
