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
      <v-col cols="4" v-for="(item, i) in menuİnf" :key="item">
        <v-card flat class="py-8">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img :src="item.recipe.image" max-width="100%">
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out v-card--reveal text-h2"
                    style="
                      height: 20%;
                      background-color: aliceblue;
                      color: aqua;
                    "
                  >
                    <v-icon
                      icon="mdi-eye"
                      @click="($event) => onClick(i)"
                      size="60"
                    ></v-icon>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          <v-row>
            <v-card-text class="ttl">{{ item.recipe.label }}</v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-dialog v-model="showDialog" max-width="500">
        <v-img width="100%" cover :src="selectİmage">
          <v-col>
            <v-row justify="end">
              <v-icon
                icon="mdi-close"
                color="red"
                size="30"
                @click="($event) => closeWindow()"
              ></v-icon>
            </v-row>
          </v-col>
        </v-img>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      menuİnf: [],
      selectİmage: "",
      showDialog: false,
    };
  },
  methods: {
    onClick(i) {
      console.log(i);
      this.selectİmage = this.menuİnf[i].recipe.image;
      this.showDialog = true;
    },
    closeWindow() {
      this.showDialog = false;
    },
  },
  mounted() {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5b31234f&app_key=2381d9ca3c66cd815d5f49c76458a396&diet=balanced&health=egg-free&cuisineType=British&mealType=Snack&imageSize=REGULAR&field=label&field=image&field=source&field=totalTime"
      )
      .then((response) => {
        this.menuİnf = response.data.hits;
      })
      .catch((e) => {
        console.log("hata:", e);
      });
  },
};
</script>
<style scoped>
.ttl {
  color: rgb(59, 59, 255);
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  font-size: x-large;
  margin: 10px;
  text-align: center;
}
.routerlink {
  text-decoration: none;
  color: aliceblue;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
