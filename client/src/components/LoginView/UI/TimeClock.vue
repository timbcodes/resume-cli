<template>
  <div>
    {{ currentTime }}
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "TimeDisplay",
  setup() {
    const currentTime = ref(new Date().toLocaleTimeString());

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString();
    };

    let intervalId;

    onMounted(() => {
      intervalId = setInterval(updateTime, 1000); // Update time every second
    });

    onUnmounted(() => {
      clearInterval(intervalId); // Clear the interval when the component is unmounted
    });

    return { currentTime };
  },
};
</script>

<style>
/* Add your styling here */
</style>
