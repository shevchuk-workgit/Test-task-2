<template>
  <div class="user-account__container">
    <h1 class="h1">С возвращением! {{ userApi.first_name }}</h1>
    <div class="user-account__user-info regular-font">
      <img class="avatar" :src="userApi.avatar" alt="Загрузка..." />
      <ul>
        <li>Ваше имя: {{ userApi.first_name }}</li>
        <li>Ваша фамилия: {{ userApi.last_name }}</li>
        <li>Ваш возраст: {{ ageUser }}</li>
        <li>Ваша должность: {{ userApi.employment.title }}</li>
      </ul>
    </div>
    <div class="user-account__beer-container regular-font">
      Ваше пиво сегодня:
      <ul class="beer-ui regular-font">
        <li class="beer-li">Бренд: {{ beerApi.brand }}</li>
        <li class="beer-li">Название: {{ beerApi.name }}</li>
        <li class="beer-li">Процент алкоголя:{{ beerApi.alcohol }}</li>
      </ul>
      <form-button @click="beerApiCall" class="regular-font"
        >Показать другое.</form-button
      >
    </div>
  </div>
</template>

<script>
import FormButton from "./ui/FormButton.vue";
export default {
  components: { FormButton },
  data() {
    return {
      ageUser: this.calculateAge(),
      beerApi: {},
    };
  },
  props: {
    userApi: {
      type: Object,
    },

  },

  mounted() {
    this.beerApiCall();
  },

  methods: {
    calculateAge() {
      const nowData = new Date();
      const birthData = new Date(this.userApi.date_of_birth);
      const age = Math.floor(
        (nowData.getTime() - birthData.getTime()) /
          (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    },

    async beerApiCall() {
      this.beerApi = await fetch(
        "https://random-data-api.com/api/beer/random_beer"
      )
        .then((res) => res.json())
        .catch((error) => console.log("BEER API ERROR: ", error));
    },

  },
};
</script>

<style scoped>
.user-account__container {
  display: flex;
  flex-direction: column;

  border: 3px solid teal;
  box-shadow: 0px 0px 5px teal, 0px 0px 5px teal inset;
  border-radius: 10px;
  margin: 50px;
  padding: 50px;

  min-width: 160px;
}
.h1 {
  margin-bottom: 50px;
  align-self: center;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 36px;
  font-weight: 700;
}
.avatar {
  height: 150px;
  width: 150px;
  border: 1px solid rgb(0, 0, 118);
  border-radius: 40px;
  background-color: rgb(222, 227, 255);
  text-align: center;
  margin-right: 50px;
}
.user-account__user-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
}
.user-account__beer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid teal;
  box-shadow: 0px 0px 5px teal, 0px 0px 5px teal inset;
  border-radius: 10px;
  padding: 10px;
}
.beer-ui {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}
.beer-li {
  margin: 5px 15px;
  border: 1px solid teal;
  border-radius: 5px;
  padding: 5px;
}

.regular-font {
  font-family: "Times New Roman", Times, serif;
  font-size: 22px;
  font-weight: 500;
}
</style>
