<template>
    <div class="card active">
        <div class= "top">
            <div>
                <img  src="../assets/chip-dark.svg"/>
                <img class= "vendor-img" src="../assets/vendor-bitcoin.svg"/>
            </div>
            <h3> {{card.number}} </h3>
        </div>
        <div class="bottom">
          <p>
            <span>
              Cardholder Name
            </span><br/>
            {{card.name}}
          </p>

    </div>
    </div>
</template>


<script>
export default {
  props: ["card"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 205px;
    background: lightblue;
    margin: 0 auto;
    color: black;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.top {
  display: flex;
  justify-content: space-between;
}
img {
  display: inline-block;
  
}
.vendor-img {
  margin-left: 280px;
  margin-bottom: 40px;
}


</style>
