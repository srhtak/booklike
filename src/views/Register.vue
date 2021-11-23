<script>
import cryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        fullname: null,
        password: null,
      },
    };
  },
  //DECRYPTED Password function
  // const decryptedPassword = cryptoJS.AES.decrypt(
  //   cryptedPassword,
  //   key
  // ).toString(cryptoJS.enc.Utf8);
  // console.log(decryptedPassword);
  methods: {
    onSave() {
      const password = cryptoJS
        .HmacSHA1(this.userData.password, this.$store.getters._saltKey)
        .toString();
      this.$appAxios
        .post("/users", {
          ...this.userData,
          password,
        })
        .then((register_response_data) => {
          console.log("register data=>>", register_response_data);
          this.$router.push({ name: "HomePage" });
        });
    },
  },
};
</script>

<template >
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input
      v-model="userData.fullname"
      type="text"
      placeholder="Tam Ad"
      class="input mb-3"
    />
    <input
      v-model="userData.username"
      type="text"
      placeholder="Kullanıcı Adı"
      class="input mb-3"
    />
    <input
      v-model="userData.password"
      type="password"
      placeholder="Şifre"
      class="input mb-3"
    />
    <button @click="onSave" class="default-button">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{ name: 'Login' }" class="text-red-900 hover:text-black"
        >Sign In</router-link
      >
    </span>
  </div>
</template>

<style>
</style>