<template>
  <div class="card" :class="cardFormData.Vendor">
    <img id="chip" src="../assets/chip-dark.svg" />
    <div id="logo" :class="cardFormData.Vendor"></div>

    <div id="number">
      {{ this.cardFormData.Number }}
    </div>

    <p id="cardholder" class="holder">CARDHOLDER NAME</p>

    <div id="name">
      {{ this.cardFormData.Name }}
    </div>

    <p id="validthru" class="holder">VALID THRU</p>

    <div id="valid">
      {{ this.cardFormData.Valid }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardFormData"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bitcoin {
  background: #daa520;
  color: #855F00;
}
.bitcoin > #logo {
  background: url("../assets/vendor-bitcoin.svg");
  background-repeat: no-repeat;
  display: block;
}
.blockchain {
  background: #f66981;
  color: #FDBFCA;
}
.blockchain > #logo {
  background: url("../assets/vendor-blockchain.svg");
  background-repeat: no-repeat;
  display: block;
}
.ninja {
  background: #313131;
  color: #9C9B9B;
}
.ninja > #logo {
  background: url("../assets/vendor-ninja.svg");
  background-repeat: no-repeat;
  display: block;
}
.evilcorp > #logo {
  background: url("../assets/vendor-evil.svg");
  background-repeat: no-repeat;
  display: block;
}
.evilcorp {
  background: #d2691e;
  color: #FFAF76;
}
.card {
  display: grid;
  width: 400px;
  height: 205px;
  /* background: lightblue; */
  margin: 0 auto;
  /* color: black; */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  grid-template-columns: 40% 40% 20%;
  grid-template-areas:
    "chip . logo"
    "chip . logo"
    "number number number"
    "cardholder . validthru"
    "holdername . valid";
}

#chip {
  grid-area: chip;
}
#logo {
  grid-area: logo;
  margin-left: 25px;
}

#number {
  margin-top: 10px;
  font-size: 20px;
  grid-area: number;
}
#name {
  grid-area: holdername;
  font-size: 21px;
}
#cardholder {
  grid-area: cardholder;
}
#validthru {
  grid-area: validthru;
}
#valid {
  grid-area: valid;
}
.holder {
  font-size: 11px;
}
</style>
