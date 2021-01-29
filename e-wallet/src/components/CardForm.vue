<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="/action_page.php">
          <div class="row">
            <div class="col-50">
              <label for="Cardnmr"> Card Number</label>
              <input
                v-model="cardFormData.Number"
                v-on:keyup="emitToParent"
                type="text"
                id="fname"
                placeholder="xxxx"
              />
              <label for="name"> Cardholder Name</label>
              <input
                v-model="cardFormData.Name"
                v-on:keyup="emitToParent"
                type="text"
                placeholder="Sinan Karaca"
              />
              <div class="row-2">
                <div class="col-50">
                  <label for="valid">Valid Thru</label>
                  <input
                    v-model="cardFormData.Valid"
                    v-on:keyup="emitToParent"
                    type="text"
                    id="valid"
                    placeholder="00/00"
                  />
                </div>
                <div class="col-50">
                  <label for="ccv">CCV</label>
                  <input
                    v-model="cardFormData.CCV"
                    v-on:keyup="emitToParent"
                    type="text"
                    id="ccv"
                    placeholder="10001"
                  />
                </div>
              </div>
              <label for="vendor"> Vendor</label>
              <select v-model="cardFormData.Vendor" v-on:change="emitToParent">
                <option disabled selected></option>
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninja">NINJA BANK</option>
                <option value="blockchain">BLOCK CHAIN INC</option>
                <option value="evilcorp">EVILCORP</option>
              </select>
            </div>
          </div>
          <label>
            <!-- TA INTE BORT LABEL LOL -->
          </label>
          <input @click="saveCard" type="submit" value="ADD CARD" class="btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cardFormData: {
        Number: "",
        Id: "",
        Name: "",
        Valid: "",
        CCV: "",
        Vendor: "",
      },
    };
  },
  props: {},
  methods: {
    emitToParent() {
      this.$emit("childToParent", this.cardFormData);
    },
    saveCard: function () {

      this.$root.$data.cards.push(this.cardFormData);
      this.$router.push('/');

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}

.row {
  margin: 0 -16px;
}

.row-2 {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px 20px 15px 20px;
}

input[type="text"],
select {
  padding: 12px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: black;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  height: 3.5em;
}
a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

.home {
  display: flex;
  justify-content: center;
}
</style>
