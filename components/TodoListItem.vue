<template>
  <li>
    {{ todo.text }}
    <md-button class="md-icon-button md-primary" @click="$emit('remove', todo.id)">X</md-button>
  </li>
</template>
<script>
export default {
  name: "IconButtons",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>