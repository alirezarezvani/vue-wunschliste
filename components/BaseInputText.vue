<template>
  <input type="text" class="input" :value="value" v-on="listeners">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../variables.scss";
.input {
  background: $vue-background-2;
  width: 100%;
  padding: 10px 10px;
  border: 1px solid $vue-blue;
  font-family: Roboto;
}
</style>
