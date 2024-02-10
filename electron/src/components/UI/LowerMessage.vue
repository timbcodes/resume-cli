<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "LowerMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
