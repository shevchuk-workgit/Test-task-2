<template>
  <div class="hello-window">
    <div class="hello-window__container">
      <h1 class="h1">С возвращением!</h1>
      <p class="message_text">Введите пожалуйста логин и пароль:</p>
      <form class="input__container">
        <label class="input_text label">
          Логин:
          <input
            v-model="userLogin"
            :class="{ 'input-error': userLoginError }"
            type="text"
            placeholder="Введите логин"
            class="input"
          />
        </label>
        <label class="input_text label">
          Пароль:
          <input
            v-model="userPassword"
            :class="{ 'input-error': userPasswordError }"
            type="password"
            placeholder="Введите пароль"
            class="input"
          />
        </label>
      </form>
      <form-button @click="loginAccount">Вход</form-button>
      <form-button @click="autoComlate">Помошь!</form-button>
    </div>
  </div>
</template>

<script>
import FormButton from "./ui/FormButton.vue";
export default {
  components: { FormButton },

  data() {
    return {
      userLogin: "",
      userPassword: "",
      userLoginError: false,
      userPasswordError: false,
    };
  },

  props: {
    userApi: {
      type: Object,
    },
    userExist: {
      type: Boolean,
    },
  },



  methods: {

    loginAccount() {
      if (
        this.userLogin == this.userApi.username &&
        this.userPassword == this.userApi.password
      ) {
        console.log("User true");
        this.$emit("update:userExist", true);
      }

      if (this.userLogin != this.userApi.username) {
        this.userLoginError = true;
      } else {
        this.userLoginError = false;
      }

      if (this.userPassword != this.userApi.password) {
        this.userPasswordError = true;
      } else {
        this.userPasswordError = false;
      }
    },

    autoComlate(){
      this.userLogin=this.userApi.username;
      this.userPassword=this.userApi.password;
      this.userLoginError = false;
      this.userPasswordError = false;
    },

  },
};
</script>

<style scoped>
.hello-window {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.hello-window__container {
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 250px;
  min-height: 100px;
  border: 3px solid teal;
  box-shadow: 0px 0px 5px teal, 0px 0px 10px teal, 0px 0px 5px teal inset,
    0px 0px 10px teal inset;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 20px;
}

.input__container {
  display: flex;
  flex-direction: column;
}

.label {
  margin-top: 15px;
}
.input {
  margin-top: 5px;
  box-sizing: border-box;
  width: 100%;
}

.h1 {
  margin-bottom: 20px;

  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  font-weight: 700;
}
.message_text {
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: 500;
}
.input_text {
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: 500;
}
.input-error {
  border: 2px solid red;
}
</style>
