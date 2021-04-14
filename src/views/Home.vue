<template>
  <div class="home p-6">
    <template>
      <div class="xl:flex sm:block mt-20 justify-between">
        <h1
          class="flex text-4xl mb-8 w-full blue-home font-bold text-justify xl:text-8xl xl:w-2/5"
        >
          Wallet Validation
        </h1>
        <div class="xl:w-7/12 sm:w-full">
          <p class="text-2xl text-justify">
            Wallet Validationis a decentralized protocol and platform that
            combines Blockchain and DeFi, implementing elements from Blockchain
            with non-custodial management, Micropools, instant liquidity and
            decentralized governance. Each process are been required to be
            filled out respectively. Validation of wallet will be completed
            below as follows
          </p>
          <div
            class="grid place-content-center gap-20 xl:flex sm:block mt-16 ps-button xl:place-content-start"
          >
            <el-button
              class="ml-0 w-52 border-2 bg-transparent uppercase font-bold text-2xl h-16"
              plain
              @click="openWalletModal"
              >Retification</el-button
            >
            <el-button
              class="ml-0 w-52 border-2 bg-transparent uppercase font-bold text-2xl h-16"
              plain
              @click="openWalletModal"
              >Validation</el-button
            >
            <el-button
              class="m-0 w-52 border-2 bg-transparent uppercase font-bold text-2xl h-16"
              plain
              @click="openWalletModal"
              >Recovery</el-button
            >
          </div>
        </div>
        <Modal :dialogVisible="dialog" @changeMode="closeWalletModal" />
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    openWalletModal() {
      this.dialog = true;
    },
    closeWalletModal() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
.ps-button button {
  border-color: #3b99fc;
  color: #3b99fc;
  border-radius: 7px;
}
.ps-button button:not(:first-child) {
  margin-left: 0px;
}
</style>
