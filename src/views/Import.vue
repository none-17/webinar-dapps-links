<template>
  <div class="import">
    <!-- <a href="/">Import Wallet</a> -->
    <div class="import-container">
      <div class="ps-content">
        <el-tabs type="border-card box">
          <el-tab-pane label="MNEMONIC">
            <mnemonic-tab />
          </el-tab-pane>
          <el-tab-pane label="KEYSTORE">
            <keystore-tab />
          </el-tab-pane>
          <el-tab-pane label="PRIVATE KEY">
            <private-tab />
          </el-tab-pane>
          <el-tab-pane label="HARDWARE">
            <private-tab />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import PrivateTab from "@/components/Private";
import MnemonicTab from "@/components/Mnemonic";
import KeystoreTab from "@/components/Keystore";
export default {
  components: {
    PrivateTab,
    MnemonicTab,
    KeystoreTab
  }
};
</script>

<style lang="scss">
.import {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    display: block;
    margin-top: 5rem;
  }

  .import-container {
    background: #f9f9f9;

    .ps-content {
      display: flex;
      flex-direction: column;
      max-width: 509px;
      width: 509px;
      padding: 17px;
      @media (max-width: 480px) {
        width: 100%;
        padding: inherit;
      }
    }
  }
}

.box {
  height: 100px;
  width: 200px;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  position: relative;
  text-align: center;
}
</style>
