<template>
  <div>
    <Top :text="text" />
    <CardChild :cardFormData="cardFormData" />
    <CardForm :cardFormData="cardFormData" v-on:childToParent="onChildClick" />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import CardChild from "@/components/CardChild.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: {
    Top,
    CardForm,
    CardChild,
  },

  data() {
    return {
      cardFormData: {
        Number: "",
        Name: "",
        Valid: "",
        CCV: "",
        Vendor: "",
      },
    };
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick(value) {
      this.cardFormData = value;
      //this.fromChild = value
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
}
</style>
