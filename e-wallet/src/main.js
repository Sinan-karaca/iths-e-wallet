import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => {
    return {
      cards: [
        {
          Number: "1111 1111 1111 1111",
          Name: "Sinan Karaca",
          Valid: "11/21",
          CCV: "015",
          Vendor: "bitcoin",
        },
        {
          Number: "2222 2222 2222 2222",
          Name: "Sinan Karaca",
          Valid: "10/22",
          CCV: "245",
          Vendor: "ninja",
        },
        {
          Number: "3333 3333 3333 3333",
          Name: "Sinan Karaca",
          Valid: "09/23",
          CCV: "367",
          Vendor: "blockchain",
        },
        {
          Number: "4444 4444 4444 4444",
          Name: "Sinan Karaca",
          Valid: "03/21",
          CCV: "932",
          Vendor: "evilcorp",
        },
      ],
    };
  },
  render: (h) => h(App),
}).$mount("#app");
