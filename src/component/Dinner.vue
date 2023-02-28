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
  <v-container class="mt-4 px-16">
    <v-row justify="center">
      <v-col cols="4" v-for="item in menuİnf.hits" :key="item">
        <v-card flat class="py-8">
          <v-img :src="item.recipe.image" max-width="100%"></v-img>
          <v-row>
            <v-card-text class="ttl">{{ item.recipe.label }}</v-card-text>
          </v-row>
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
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5b31234f&app_key=2381d9ca3c66cd815d5f49c76458a396&diet=balanced&health=egg-free&cuisineType=British&mealType=Dinner&imageSize=REGULAR&field=label&field=image&field=source&field=totalTime"
      )
      .then((response) => {
        this.menuİnf = response.data;
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
  margin: 10px;
  text-align: center;
}
.routerlink {
  text-decoration: none;
  color: aliceblue;
}
</style>
