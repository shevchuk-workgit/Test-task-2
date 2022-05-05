<template>
  <hello-window v-if="this.userExist==false" :userApi="userApi" v-model:userExist="userExist" ></hello-window>
</template>

<script>
import "./reset.css";
import HelloWindow from "./components/HelloWindow.vue";
import userApiServer from "./components/API/UserApiServer.js";
import FormButton from "./components/ui/FormButton.vue";

export default {
  components: { HelloWindow, FormButton },

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
      console.log(this.userApi);
    },
  },
};
</script>

<style scoped></style>
