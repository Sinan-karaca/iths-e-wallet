<template>
  <div class="container">
    <Top :text="text" />
    <CardChild :cardFormData="card" />
    <CardStack v-on:changeActive="changedCard" />
    <div id="buttons-id">
      <button @click="changePage">Add New Card</button>
      <button class="delete" @click="deleteCard">Delete Card</button>
    </div>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import CardChild from "@/components/CardChild.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  components: { Top, CardChild, CardStack },
  data() {
    return {
      card: this.$root.$data.cards[0],
      text: ["E-", "Wallet", "Active card"],
    };
  },
  methods: {
    changedCard(value) {
      this.card = value;
    },
    changePage() {
      this.$router.push("/CardParent");
    },
    deleteCard: function() {
      if (this.$root.$data.cards.length > 1) {
        this.$root.$data.cards.splice(
          this.$root.$data.cards.indexOf(this.card),
          1
        );
        this.card = this.$root.$data.cards[0];
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}
#buttons-id {
  display: flex;
  justify-content: space-around;
}
button {
  background: white;
  color: black;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid black;
  min-width: 46%;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  margin-right: 2em;
    margin-left: 2em;
}
</style>
