<template>
  <hello-window
    v-if="this.userExist == false"
    :userApi="userApi"
    v-model:userExist="userExist"
  ></hello-window>
  <user-account
    v-else-if="this.userExist == true"
    :userApi="userApi"
  ></user-account>
</template>

<script>
import "./reset.css";
import HelloWindow from "./components/HelloWindow.vue";
import userApiServer from "./components/API/UserApiServer.js";
import UserAccount from "./components/UserAccount.vue";

export default {
  components: { HelloWindow, UserAccount },

  data() {
    return {
      userApi: {},

      userExist: false,
    };
  },
  mounted() {
    this.userApiCall();
  },
  methods: {
    async userApiCall() {
      this.userApi = await userApiServer;
      // console.log(this.userApi);
    },
  },
};
</script>

<style scoped></style>
