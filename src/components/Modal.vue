<template>
  <div class="ps-modal">
    <el-dialog
      title="Choose your wallet"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="80%"
    >
      <div class="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <a
          class="flex items-center px-4 py-2.5 justify-between rounded-2xl border-gray-500 border-2"
          href="/import-wallets"
          v-for="item in wallets"
          :key="item.id"
        >
          <h3 class="font-bold">{{ item.name }}</h3>
          <img
            class="w-8 h-8 object-contain"
            :src="item.img"
            :alt="item.name"
          />
        </a>
        <a
          class="flex items-center px-4 py-2.5 justify-between rounded-2xl border-gray-500 border-2"
          href="/import-wallets"
        >
          <h3 class="font-bold">Others</h3>
        </a>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallets: [
        {
          id: 1,
          name: "Safepal",
          img:
            "https://icodrops.com/wp-content/uploads/2021/02/SafePal_logo.jpg"
        },
        {
          id: 2,
          name: "Atomic Wallet",
          img:
            "https://atomicwallet.io/wp-content/uploads/2020/09/atomic_wallet_logo_dark_rounded_2.png"
        },
        {
          id: 3,
          name: "Coinomi",
          img:
            "https://play-lh.googleusercontent.com/yFBkqYSxBhWgBzTFrX1ynohOZ4VtRwu3f_IHHKkjJt8gHz0OQAw5-XkNH3eGaan9snar"
        },
        {
          id: 4,
          name: "MetaMask",
          img:
            "https://cdn.freebiesupply.com/logos/large/2x/metamask-logo-svg-vector.svg"
        },
        {
          id: 5,
          name: "TrustWallet",
          img:
            "https://play-lh.googleusercontent.com/-3uTwEsZDk2NEgRblDEfIIY7T-xAZfJPN5JzVKz7s94Ds8KrKCrSVHvkEuneJlUBekc"
        },
        {
          id: 6,
          name: "WalletConnect",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAjVBMVEX///87mfw2l/wzlvz6/f/3+/8slPzw9//z+f/r9f8/nPzn8v87mvzy+P8pk/zm8f9LofxFnvycyP282v5YpvzP5P6Qw/2oz/1ysv211/54tv3B3f5Ro/x+uf1dqPyHvv3a6//T5/6r1P6Mv/2hy/1krf1ir/1us/zE4f6pzf2XxP11uf2Iwv0ej/yZy/6jMon7AAAMsUlEQVR4nO2dZ3ujvBKGzQgwYGyKMcUl4ILjOFn//593wGkuFA2osHve59Neu8lquBmEkB6NRiPpMrenVbKLLpeP9P319T39uFyiXbI6bU3ZkUmUqqrm6pIevVkhXddJKSh0/UPxF+Vfu8f0sDKLH5UdrUhpxnS7S3NlNiuBKA0qYBWYlPxjl02N/wdGxthZhUdlppNGLs+Q7ON55YwN2fFzlGZmq7BImpaUqWU0U47+yjE12dfBQ1NnG71aM0TSVDEiM2sZbZ1/LIm0bOXnit4la56zSC+SaOH8Oz3RZBEdMX1NOyKdvCb/xntfy+apqzNk800oCOfZ355C5sk/KiwT50bEjt8WY9lX2ENZkq5Z9Dc1AgLBPnFkX2VHZYfYItzYfIl4y+hvBOSUcPhlzo+AeHE0kX21SE0OuRA4X4Dy6G/qg7Qotzj2OVWA4kT2RVNrHnsi4VwBgRufZF83lbLYUwTD+ZS3+QuesIskOFdAO9lX36JTIAvNp/JMNoEGjTfSEudLoISD/dCYu9xHge18yMtWNodKmam8TudWYPnDmw5SVy+ihoFtAhIP7VN+fLAGAqcUWSdDSiA1S4eSOp8C+zyc71RtleuygTwI9OViIA+YefDkv7GeRIJkEEsaTjio5+pHYB0G8JGxWA7twfoWKHvpHdB8cN3OjfSl5CHibgAD5QbpudRZjmhIo50qkWAuk47sy28VuNKmEQ+e7IunELjRP0EHlE/rE5R/YPkfewcZdHyPzUUUTEonmOIF+XGZpstjHnhKaQ1r80ZRSwYfv3+vXLqa9PUx9ZOFMx5Pp4ahFTKM6XQ8dhbJJT26xQ/0ZwSeL5rO2e4XNYA+U16jTFNrnYPlv2hZ9Aqzvg4GsATzCXtNfZVGrwINbWPZ4Uj6+abE8tHCHhkPCvFS9Gh2kVqkxy0B5SzsA74XHdvbdBvJqqd3r/sTDbaw9/uuY68Miu0u5z2mGYwk7jyYgBdB3xdZ3Ok7CxTrZZ/1bXybBna3h4y8Mbh2Cq3cTr5bL/eZzC8457zTEj4Jxcw/zzs8W8Rd7phZJZ0o7jAkJXsxs2P47AEl3jGd2RxHOf4JE/RwZUdkZJD7zO1b2fkF1wNCsGAdQ7U0H3PnQA/OXObsTnvMVBzYwtZOsw39+AOsdMVpQGbM6eMowhA370zPh7xEHM3rk7c1XQKBLZBO8e6g4wOwPHEdy2urmOZbTDAdSj5g8V/KzfbtHSEoqWhn72TTGhYJkin/QMyorYcu6IjfnTJusfMUD9ZWyEeydjo284FUxmqp0eiUE5nQzqbpI4Okcsws2nvDXbMFfeFc1ZTJs1SaU+O9dgHZOggNSg3r6YiM40Hvs8qYwBa+9rarfpP++RAdyJ0q+YAn6PPmVqeqeYTZRXwgd/p4HpaBK8U34jxNJIAum07B57FXhLWk3VWTJz5SlkfvpYb2Ax1pO4Qf+NjRENyF6uXWpwGBxJ15TvDLB7xoEN7CkXb4ndqEXOq+RecFhkanGD8fvrMaYsm7Op2cfL0eBkOn4BN98oFYutfxc5UJ1tGQbPEFn+IFD0vpdEo+QMh6NyQ6BZ9d7rqC55xqlJ03+/mw6BT983a+GkjND80UMM30n/5TN6nzQ5RIeFSMJIpk7MQyk+gwpx5iz+O15blxInpMnixdz3OXoo3aWhK7nrWOV3Q/Hq1JaZ0FV/CezHJwWba7FvslqZUW26JdsqYySP3alS1f5MjT/2lXqJHU8H8+GWkMvrd2ZXHr0ndGYJFGW8O3Me0ebp0zoJwF8VHvbNJg+YL6PeN8O10FbfnzYOYGIih/HkwfoIjJH+N8P9nZYvD176e2Cs3OAoagqv+4UAUgIn+m56elFruej3quWC6ahdzXGA2/YsKa8H8vjMPnhYQib2vuS42taXbmzGdaQefKh3Pejs+Vyyx29X0x6kxfs5DrAHpcSefKh+t9MSty5yt/Kvrbcb0ljisf069bagWdJ586Olc+T+2Oq/qdHz4f3PjU0ymk+/za/aijU8XHbKJTrlRzitN8fnfc8TlzaneS1tO58rlrt4VOyYfLHHsLHW58JpsmOtfx8E27ZvsWm9mGAx8zbK0RoPPo99rolOOu33bNPcUeBX3DfCbZTCkqKOh75nycDUW78N2uuadyv5JNxjZKkybK8r4w5pNt6K73k49JWy4OlhnLKCnpMOeTLWk92dd2U3rrPUs+E/rKLfqSYb+XvVJfrp6ORifMzo2Y2e4IZ4lol7Djs40RG0LIaYQJE5jxcWLUrh5m668FHYTIZoTcnMWGj4OK8touEz6LI2obGARYPErOgE+Gy52rWPDZ5rh2wR0hf4MFnwydO6XirD8dZJNwHCVtA8in3+nLJ0Pfkc92+/LB5k7xqTAfjZCbDss9Wr34ZC1bIOrb7VdteIu/0Lz4NS3AQiVBDz7bvHO1MdInb7cBtl0IrtOGU3TSkXVnX3cPOr34LCj3Df4K8q/J3PERHWdXPr3oFO0eO/LB01GOP1Ni5it2V3hHPgv08//Ybrf8WWCHL6C83nzoTZZoPm4HPot+uXNtN+/SLp7O/WfMBLH3+ut/wPPpnTulOvA5oenYj5N/zgZbGQNcSkMMUzrluALJZ4UtuAHW89Sfk6Lzx0PxOaHfrDUiAaoSD55O5bZuZ4+tYYnis2JFp+SDaRddL8aqLtQ7CfF8qI1uK/ybtV5kTc1nji5lY4U1k0sd+NBWJJ13KYnU1C4lnwTdbi2dcmEFXSOWjg9jOiUfqrxNXOx/bDUtHI3DJ4NPm2gqtuLvYauo8naHpmM323UKPtgraefDgQ4VnwhLB+ywxTRjtC0nP6uND/4eUrbbctwUng6FlVK7oMu6NfNBR8mqXWyJQ4ALhSFNPaCL43sNcfKj01yp+g39RtcpKzcc/mADtWrjRN9DlGr5qG/od/CM+mi4CMuntiIp72rydXkbod8wfxA1VXcz7HcKVG4a519rvzJv1Tds/wn0uVMqwZZHBvL21K+pEXoUhR8BVPDRDvjokTVREmyYBZ+Ht6KKznBQXtHzlgWfh7w1Dvjq4OiKMQl6/kc/3I2pNHzuKGFZRxwr637L+hT95gWrQz0d/HfSHR8jQueBfS5/8Yymat9uWu9Ax6XfCfgrdb7uwQdPB7yvcjIX9PyV8stnjKez7kKn5INeIPwxak8PeDrfozL10IHP95pUk026+neDbnQ68pl2pOP+9rBqhF9ZOBifdNCOgc50rqdpolftyw0qU1RN3muU69v+VYuwz/Unn3G7Efjx9176FLztwEcPs+xpe1abyPq+3LW2w869guJn2R6dO73odOJD8GOX52MOtQQ7cw/KMhabO1c+JzQf9IQICZ5PZ9DmeEcFOtAXBvWAF2g+SFXR6cQHKcCuJ0rhQ2reHSpnPozolL4qjnxIUPf8qwxXDp8F7A4mz9DjH/oog/rnXz3xbDdjRafgg/6+oI2y2Sd04tcuQzpVFSXZRNnmgkE7c2jbZbw7zWR0EuB9lF7r87/l0y7zPWJaz9PuqqK0s/Z2Mx7tcqggoDFfJ/eoMtxhfXIuuFzqKxhs3+/UGT5h+3zBC6eqKWPsnoTGKOl7R7bvhZxb7QATs1esWRAgdtg4zMY/oMQ8D6XBLyTUhJmj9h85jJ5rUF651rylONyEKkwcnbKSLpNmnwy5rIU3QFeFid+7htxdKYlOF4PvU5RKl52hDu3+6gY6Imre9uUDSrd6Chl6Y4MMOsXzte8zUOtKp6xe0IcPWHtBlcgne/zycH865caGHnxsUXS6GKB/6fTJcKfl0KsGNdiV2auDAZoBnR58Gu3K7DUOu/Q//Q/tmnTiAxb/6oL3MvAGaCan0Jkd+LTbldlLC9ELxQqLU+jaDt2rajeUcGaFGiIrLigpkyg1JB8x9UUrhFrwL+gwilLFvd/1kE2zeF3ol/wBNuzabTwq8UEyTzCLaPkAMD2jL6XGM0PYldlrR2cCBWB8Rl9Klz9AUHZl9trRhAnA/Pn/oOMj/AjHR1EZfDmc7/h06F7FXeliyGWtpHUhoaGCdg/5bd814A2AzkhtMUC31qfvKr85b7vZldmr2QDduOmqnxoNvl3tyuzVZPC9NeQyb7fB4NvHkMta6qquPAZZ8zz9Ut3V5W1/UyVL1fEhAd9ziOoMrGRQdOoMvs+GXNaq5jOs3ClVlT/kpcpyylZVBtbh0akyQBd0BESpzR/vCxO7MnOpDwZfUc//Y94yM+Sy1h0fcb3jvcF3sHTK0onwS0dchqs3haWgT8lJ3vox+JJA6D384cPYkMtaTnCdYNVF38PtV7svgzhYt0E778/ME38ksRF5sz+0taikaiLpDjocFkL/B0o96UF9Kh36AAAAAElFTkSuQmCC"
        },
        {
          id: 7,
          name: "Coinbase Wallet",
          img:
            "https://play-lh.googleusercontent.com/dt49Bn5iCPBlSwsjxQJIZ2y92v-MWNNa1a1L4AOYIiUs-sOQW5vyFw9c64DbfZOrzw"
        },
        {
          id: 22,
          name: "Ledger",
          img:
            "https://cdn.shopify.com/s/files/1/2974/4858/files/good_square_200x.png?v=1533838574"
        },
        {
          id: 8,
          name: "TokenPocket",
          img:
            "https://play-lh.googleusercontent.com/6QUYsp-eQdOWP3e9XzKD4NwvCSH5BK3C3LgNb8YaKKpDBNcxDnMOFFN2xO9ArDYYpIT2"
        },
        {
          id: 9,
          name: "Trezor",
          img:
            "https://img.favpng.com/20/4/22/trezor-cryptocurrency-wallet-logo-bitcoin-png-favpng-XLYZ1nLhwqKs2RV9v4xnBE4Eq.jpg"
        },
        {
          id: 10,
          name: "Fortmatic",
          img:
            "https://gblobscdn.gitbook.com/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?alt=media"
        },
        {
          id: 11,
          name: "Portis",
          img:
            "data:image/png;base64,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"
        },
        {
          id: 12,
          name: "Squarelink",
          img: "https://avatars.githubusercontent.com/u/36418916?s=280&v=4"
        },
        {
          id: 13,
          name: "Torus",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAY1BMVEX///86lv81lP8pkP/6/f/G3/9hqf/3+/8wkv9Nn/+DuP/y+f9prf+Ov/+01P+qz//d7P+Lvf8+mv/H3/9Sov/t9f/n8f/Q4/+bx//U5/9NoP96tf9Ypf9xsf9jqv+lzP++2v9ory8/AAACqElEQVR4nO3a63KiQBBAYRy8DCCoEBUjGt//KYOWtbUpBbp2bbbHPV/lJ4GcADPIGEUAAAAAAAAAAAAAAAAAfio2+aBNKpZPuw+126/qPK9X1a5no5dLYz/Iiflk0XGcdT2f3A8Vu2ZzGC/QTV7peeB01lz/Tb+2ct5/Fl3/igAD10v3cBTnm+pdAmvvn23q4nSMk6geuDjGXRv7+Tb8wKx5evruheU69MDs3NPXXqbJLvDAU29fW/ihfR/qBq4G+tqrdBNy4HoyvHd/CTjwJNl5ovvgphm475wgfhevgg08Dt6BV65RHWcUAyV34K1wFmjg8BB6D0wDDTwLd+1KzWFGLzArpbt2mg9seoFr4RXajqOXIAMr0SRx5b+CDCzEZ9DnQQZKB9H2HtR8HjURqDlPcIn+ceDs3QeZt58m3n6ijxrxo5rmxwnFwC/pw/ZRsU8z8CD8Hd2XFpofeJeyfX9moQbKJgpfa/bpvnSaS3auOsQoBx4eV5Ue+EK1T/nFbz384ld1CFUPnM6HXt2X2gtMymsT24/+xZdSfS1be/ls1/fA5rz+Wr36Aui2+yr1if7y4AhL2Is0fn6MeKm+ODhKYBRVT25E50vl+WHEwCgryh9n0Tk/qUdYn78FCr7m89eBreqYuNg7f/3x5eky2ped6vNyUCMP7FmRzg5FnZ5OaV7sRzp5YrJ1vtu1Nx/za2gvI399RKBNBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxbx84zeT+9d8KAAAAAAAAAAAAAACA/8U3xf9DR8tejEgAAAAASUVORK5CYII="
        },
        {
          id: 14,
          name: "Authereum",
          img:
            "https://pbs.twimg.com/profile_images/1136781248758571008/TOIXMgdS_400x400.png"
        },
        {
          id: 15,
          name: "VeChain",
          img: "https://cryptologos.cc/logos/vechain-vet-logo.png"
        },
        {
          id: 16,
          name: "Scatter Wallet",
          img:
            "https://play-lh.googleusercontent.com/U-Hh2El-rXw5bkMhc78F5oBYPzfAQEcN_rG0A6M1ac7l4rEhGl5B2iSY_N1VSQr3o6k"
        },
        {
          id: 17,
          name: "Math Wallet",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN04hBJLqwxe0dndDvoSMn4JJeyklXMEQ-ag&usqp=CAU"
        },
        {
          id: 18,
          name: "Tomo Chain",
          img: "https://cryptologos.cc/logos/tomochain-tomo-logo.png"
        },
        {
          id: 18,
          name: "Binance Smart Chain",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUzMzPwuQv1vQkrLjQuMDPXpxLyuwonLDQjKTQ8OTEwMjLirw/uuAtxXilIQS85NzJqWSpBPTBfUS1VSy42NTLoswxaTi0gKDXJnRXTpBJMRC/BlxeJbyUXIzVuXCo+OzFjVCx1YSm/zwp8AAAFKUlEQVR4nO2d63baMBCEARtjTBqSBpoAbdO+/0vWNja+aaV1aoO0O9/fJOd4oh3t6r5YAAAAAAAAAAAAAAAAAAAAAAAAAF8jS7NHf8K8xIfLIX70R8xJtF+v1vvo0Z8xH/F2vVqu1luxrRgvcoHLXOJCqMQ4KwUWEjOREqNtJbCQuBXoxXh/E1hI3ItrxVuILoUGanToCCwkHkQFasuDjURJXoz7LVi1ophA7XlQnhcNISorUGNK4FJIAUeEqJxArWpRWmLoNSrpQSle7JRqlMSQCzirByV4MXK3YNWKgQaqJU0MvBhkKxpLNUpiiAUcy4ONxPC86EwTg0ANzItsD7YkBtWKo0K0lhhSoI7oZNoSw+luRnqwkRiKFxmlGiUxjALuCx5sJIbgRWapRrai94E6Ok30JfqeNBwDXo5Ev4fE/+HBRqLPXmSkicT5H/A5aTDSRHL8mSROib4mDUaIJk/ff31jSPQzUAeLLyaBPzaL9DdDoo/LNhwPLt82+W+mLyu3RP+8yCi28xDdlL+bcgLVtzKc58FN9dssiX55kVGqlR6sSV84PapHgcoo1ToCmRL9KeDGheiVoAKVUYsmy57AQiKjR/WjRuWkiae3vkBuoHrgxfEerGGlfg+8+P4x2oM1HC9+vN9Zz5D4+Wj/TKIFC5ytmByfH9+Gi+h5Z2vFqlQz4yjgVrtnD3yYSzzv6M8kQ/SKNVCT3dkLgbnEVzJQDWmiiyVpJMdXTwQWEolANaaJLmTSWO38EUgGqqWTaSC6G39C9Ere3Qw/0+HBGqMXE086mQaDF5kCjRJ98mDNwIsMD9YMvOiXB2t6XmS3YEGvFX3zYE0nUEcJ7El8fIjGkbmUygM1uQkkelHqb1s9akKFaBTfqYSLP09/zJ9/K+DIUi06n4gAvBVwZKmW/j193kViMeClWqhKGmSI5l5dUR6rApVME3kr32dIXE5ZkP1k6UWyVCv7W7KfLAs40oNlf3uPiY1qRG8VYZVv6UhyEXb59xj130b0lkBcUz+p6x46EL85Qnj+UX9rVo3sTOKM6AmbcSTZmUTETHdrHDlvoHYWX1hldetvX1sFAZkQzHSK8zmXbXqzaqOSeq9uHZXUexXPfF4cLL6MkDgYXo0ozAaF+VzLNoaZbXZxbRgis4trwxB5Hi8aF1+YrWic5mAGqnH0OMeyDTHxy5JoHB4zB7nEVNX0SYNcfGH0qIRAlkRyRnXqQLUsvji9SE5TMbxoWduYtka1Lr44JgwtU41OL1rXp6ZMGo59MlYvWqeLHUnDsa4x3b6bzLUJIS/gqM+Mz9Yp/yJQz9RnRq49G3lenOYakfTiPLt0JL/y5PzbE/HfyT7dK1OXdBKF8ttQvg8V9KUK8qGCmkZBXapgbKFgfGgc47NnaoIY4yuYp1Ew16ZgvlTBnLeCdQsFa08K1g8VrAErWMenELQXw4z4/TTi90SJ39cmfm+i+P2l4vcIi9/nLX6vvvjzFvLPzCg49yT+7Jr884cKzpAqOAes4Cy3gvP4Cu5UUHAvhoK7TRTcT6PgjiEF90QpuOtLwX1tCu7cU3BvooK7LxXcX6rgDloF9wgruAtawX3eCu5kV3CvvoK3ERS8b6HgjRIF78woeCtIwXtPCt7sUvDumoK38xS8f6jgDUsF75AqeEtWwXvACt50VvAut4K31TtelObBmlugSgzRK1WNKqEWpSgLOCmlmpli1B/wiJ5DfLhIqmRMZOlEl3UAAAAAAAAAAAAAAAAAAAAAAABQyD/e7GIiVzdsQQAAAABJRU5ErkJggg=="
        },
        {
          id: 20,
          name: "Guarda Wallet",
          img:
            "https://play-lh.googleusercontent.com/7DVRyaZnvFjerpRePCH_d0WfY2v8JyE5tcUW4H7UviWPzvBJMeuRQqHcb24tyBFZQQ"
        },
        {
          id: 21,
          name: "Exodus",
          img:
            "https://pbs.twimg.com/profile_images/1065424169628688384/BO7X29fe_400x400.jpg"
        }
      ]
    };
  },
  props: ["dialogVisible"],
  methods: {
    handleClose() {
      this.$emit("changeMode");
    }
  }
};
</script>

<style>
.el-dialog__title {
  font-weight: 600;
}

.el-dialog__header {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #eee;
}
</style>
