<template>
  <div>
    <h1>
      <span>{{ text[0] }}</span>
      {{ text[1] }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  text-transform: uppercase;
  color: rgb(82, 80, 80);
}
span {
  color: #00ce89;
}
p {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  color: rgb(70, 69, 69);
}
</style>