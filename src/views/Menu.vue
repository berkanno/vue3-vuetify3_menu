<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4" v-for="item in menuNameList" :key="item">
        <v-card>
          <router-link class="routerlnk" :to="{ path: '/' + item.title }">
            <v-img :src="item.img"></v-img>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import bbqs from "@/image/bbqs.png";
import breads from "@/image/breads.png";
import burgers from "@/image/burgers.png";
import chocolates from "@/image/chocolates.png";
import desserts from "@/image/desserts.png";
import drinks from "@/image/drinks.png";
import friedChicken from "@/image/fried-chicken.png";
import iceCream from "@/image/ice-cream.png";
import pizzas from "@/image/pizzas.png";
import porks from "@/image/porks.png";
import sandwiches from "@/image/sandwiches.png";
import sausages from "@/image/sausages.png";
import steaks from "@/image/steaks.png";

export default {
  data() {
    return {
      menuNameList: [
        { id: 0, title: "bbqs", img: bbqs },
        { id: 1, title: "breads", img: breads },
        { id: 2, title: "burgers", img: burgers },
        { id: 3, title: "chocolates", img: chocolates },
        { id: 4, title: "desserts", img: desserts },
        { id: 5, title: "drinks", img: drinks },
        { id: 6, title: "fried-chicken", img: friedChicken },
        { id: 7, title: "ice-cream", img: iceCream },
        { id: 9, title: "pizzas", img: pizzas },
        { id: 10, title: "porks", img: porks },
        { id: 11, title: "sandwiches", img: sandwiches },
        { id: 12, title: "sausages", img: sausages },
        { id: 13, title: "steaks", img: steaks },
      ],
    };
  },
};
</script>
<style scoped>
.routerlnk {
  text-decoration: none;
  text-align: center;
  color: blue;
}
</style>
