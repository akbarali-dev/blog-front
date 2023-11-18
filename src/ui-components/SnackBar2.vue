<template>
    <figure class="notification">
      <div class="notification__body">
        <slot></slot>
      </div>
      <div class="notification__progress"></div>
    </figure>
</template>

<script>
export default {
  name: "SnackBar2"
}
</script>


<style scoped>
.notification {
  //position: absolute;
  bottom: 200px;
  right: 200px;
  width: 200px;
  height: 30px;
  border-radius: 6px;
  background-color: #313e2c;
  color: #aaec8a;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: fade-in 3s linear;
}
.notification__body {
  //display: flex;
  //height: 26px;
  //width: 26px;
  margin-right: 40px;

   //display: flex;
  color: #EEEBFD;
  gap: 40px;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  flex-grow: 2;

}




.notification__progress {
  position: absolute;
  left: 4px;
  bottom: 4px;
  width: calc(100% - 8px);
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(
      to right,
      #313e2c,
      #f3df04
  );
  border-radius: inherit;
  animation: progress 2.5s 0.3s linear;
}


@keyframes fade-in {
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  95% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progress {
  to {
    transform: scaleX(1);
  }
}
</style>