<template>
    <figure class="notification">
      <div class="notification__body">
        <div class="notification__description">
          <div class="icon__wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                fill="none" stroke-linecap="round" stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        <slot></slot>
        </div>

      </div>
      <div class="notification__progress"></div>
    </figure>
</template>

<script>
export default {
  name: "SnackBar"
}
</script>


<style scoped>
:root {
  --background: #f3f1f9;
  --toast-background: #f3f1f9;
  --toast-success: #9CE6A8;
  --text: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Poppins, sans-serif;
}

body {
  background-color: var(--background);
  display: grid;
  place-items: center;
  font-size: 16px;
}

.notification {

  position: absolute;
  top: 0;
  right: 20px;

  bottom: 32px;
  align-items: center;
  //border-radius: 6px;
  background-color: white;
  color: var(--text);
  max-width: 320px;
  width: 50%;
  height: 7%;
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: fade-in 3s linear;
  border-radius: 12px;
}

.notification__description {
  display: flex;
  color: #EEEBFD;
  gap: 4px;
  align-items: center;
  font-size: 1rem;
  flex-grow: 2;
}

.notification__icon {
  height: 26px;
  width: 26px;
  margin-right: 4px;
}

.notification__body {
  display: flex;
  flex-direction: row;
  padding: 12px;
}

.notification__button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  font-size: 1.1rem;
  white-space: nowrap;
  margin-left: 20px;
  flex-grow: 1;
  color: var(--text);
}

.notification__button:hover {
  text-decoration: underline;
}


.notification__progress {
  position: revert;
  left: 8px;
  bottom: 4px;
  width: calc(100% - 16px);
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(
      to right,
      //var(--toast-background),
      var(--toast-success)
  );
  border-radius: inherit;
  animation: progress 2.5s 0.3s linear;
}

.icon__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--toast-success);
  margin-right: 8px;
  padding: 6px;
}

.icon__wrapper svg {
  //stroke: var(--toast-background);
  stroke-width: 3px;
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