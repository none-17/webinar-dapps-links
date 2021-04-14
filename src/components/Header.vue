<template>
  <div class="header">
    <a class="flex items-center" href="/">
      <img class="w-1/12" src="../assets/wallweticon.jpeg" alt="wallet-logo" />
      <h2 class="font-semibold text-3xl blue-home">WalletValidation</h2>
    </a>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  margin: 20px 2px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
