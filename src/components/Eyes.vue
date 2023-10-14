<template>
  <div class="wrap">
    <div class="eye-shape">
      <div class="number">10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eyes"
}
</script>


<style >

.wrap {
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  transform: rotate(45deg);
  margin: 0;
}

.eye-shape {
  width: 50px;
  height: 50px;
  background-color: hsla(240, 1%, 17%, 0.75);
  border-radius: 100% 0px;
  position: relative;
  border: 2px solid  var(--orange-yellow-crayola); /* Added yellow border */
}

.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 15px;
  color: white;
}

</style>