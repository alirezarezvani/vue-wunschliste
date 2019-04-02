<template>
  <div id="app">
    <h1>Wunschliste!</h1>
    <h2>Damit Du auch nichts mehr vergisst ...</h2>
    <TodoList/>
  </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoList
  }
};
</script>
<style lang="scss">
@import "./variables.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 325px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}
body {
  background: $vue-background;
}
h1 {
  text-align: center;
  line-height: 30px;
}
h2 {
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  padding-top: -40px;
}
li {
  padding-top: 30px;
  line-height: 1.6;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
}
ul {
  line-height: 1.4;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
}
</style>