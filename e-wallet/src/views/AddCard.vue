<template>
  <div class="AddCard">
    <Top :text="text" />
    <Card :card="card" />
    <CardForm :card="card"
    @getCard="updateCard" />
  </div>
</template>
<script>
import Top from "../components/Top.vue"
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: {Top, Card, CardForm },
  data() {
    return {
      text: ["Add ", "new card", "New Card"],
      card: {
        number: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },
    };
  },
  methods: {
    updateCard(card) {
      this.card = card;
    },
  },
};
</script>

<style>
.AddCard {
  max-width: 700px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
</style>
