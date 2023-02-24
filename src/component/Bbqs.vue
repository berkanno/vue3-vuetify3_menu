<template>
  <v-row>
    <v-col cols="4">
      <v-btn class="mx-16 px-5" color="blue-darken-4" elevation="8">
        <router-link to="/" class="routerlink">
          <v-icon icon="mdi-arrow-left"></v-icon>
        </router-link>
      </v-btn>
    </v-col>
  </v-row>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-col cols="4" v-for="item in menuİnf" :key="item">
        <v-card elevation="16">
          <v-img :src="item.img"></v-img>
          <v-card-title class="ttl">{{ item.name }}</v-card-title>
          <v-card-title class="ttl">{{ item.price }}$</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      menuİnf: [],
    };
  },
  mounted() {
    axios
      .get("https://free-food-menus-api-production.up.railway.app/bbqs")
      .then((response) => {
        this.menuİnf = response.data.splice(7, 30);
      })
      .catch((e) => {
        console.log("hata:", e);
      });
  },
};
</script>
<style scoped>
.ttl {
  color: blue;
  font-family: "Times New Roman", Times, serif;
  font-weight: 900;
  font-size: x-large;
}
.routerlink {
  text-decoration: none;
  color: aliceblue;
}
</style>
