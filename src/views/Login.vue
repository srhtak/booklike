<script>
import cryptoJS from "crypto-js";
export default {
  //Define userData
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    //get data with axios and check. then
    onSubmit() {
      const password = cryptoJS
        .HmacSHA1(this.userData.password, this.$store.getters._saltKey)
        .toString();
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          if (login_response?.data?.length > 0) {
            console.log(login_response);
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("username or password failed");
          }
        });
    },
  },
};
</script>

<template >
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
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
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link
        :to="{ name: 'Register' }"
        class="text-red-900 hover:text-black"
        >Sign Up</router-link
      >
    </span>
  </div>
</template>

<style>
</style>