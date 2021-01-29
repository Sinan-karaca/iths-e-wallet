<template>
  <div class="card-stack">
    <li v-for="card in cards" :key="card.Number">
      <CardChild v-on:wasClicked="setActive" :cardFormData="card" />
    </li>
  </div>
</template>

<script>
import CardChild from "@/components/CardChild.vue";
export default {
  components: { CardChild },
  data() {
    return {
      cards: this.$root.$data.cards,
    };
  },
  methods: {
    setActive(e) {
      this.$emit("changeActive", e);
      console.log("" + e);
    },
  },
};
</script>

<style>
.card-stack {
  margin-top: 200px;
}
.card {
  filter: drop-shadow(10px 10px 4px #959597);
}
li > .card {
  margin-top: -200px;
  position: sticky;
  filter: drop-shadow(10px 10px 4px #959597);
}
li {
  list-style-type: none;
}
</style>
