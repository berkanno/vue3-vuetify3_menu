<template>
  <v-row>
    <v-col cols="3">
      <v-btn class="ml-12" color="indigo-darken-4" elevation="8">
        <router-link to="/" class="routerlink">
          <v-icon icon="mdi-arrow-left" id="go-to-top"></v-icon>
        </router-link>
      </v-btn>
    </v-col>
  </v-row>

  <v-container class="mt-4">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        xl="1"
        v-for="(item, i) in menuİnf"
        :key="item"
      >
        <v-card max-height="100%" flat>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img :src="item.recipe.image" max-width="100%">
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out v-card--reveal text-h2"
                    style="height: 20%; background-color: aqua; color: black"
                  >
                    <v-icon
                      icon="mdi-details"
                      @click="($event) => onClick(i)"
                      size="30"
                      title="Details"
                    ></v-icon>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          <v-row>
            <v-card-text
              class="text-subtitle-2 d-flex justify-center text-deep-purple-darken-4 text-md-center"
              >{{ item.recipe.label }}</v-card-text
            >
          </v-row>
        </v-card>
      </v-col>
      <v-dialog v-model="showDialog" max-width="50%" height="400">
        <v-container>
          <v-card width="100%" height="100%">
            <v-img
              src="https://cdn.pixabay.com/photo/2016/09/21/22/59/food-1685942__480.jpg"
              width="100%"
              cover
            >
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

              <v-row justify="end">
                <v-card
                  class="d-inline-flex mt-16 mr-10 .d-none"
                  width="300"
                  color="blue-grey-darken-2"
                  max-height="300"
                >
                  <v-card-text class="text-overline text-white text-sm-left">
                    <ul
                      v-for="value in selectDetails"
                      :key="value"
                      style="list-style-type: none"
                    >
                      <li>
                        {{ value }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-img>
          </v-card>
        </v-container>
      </v-dialog>
    </v-row>
  </v-container>
  <v-card>
    <v-row justify="end">
      <v-col cols="2">
        <v-btn color="indigo-darken-4" flat>
          <v-row justify="center">
            <a href="#go-to-top" class="routerlink">
              <v-icon icon="mdi-arrow-up"></v-icon>
            </a>
          </v-row>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      menuİnf: [],
      selectDetails: "",

      showDialog: false,
    };
  },
  methods: {
    onClick(i) {
      console.log(i);
      this.selectDetails = this.menuİnf[i].recipe.ingredientLines;
      this.showDialog = true;
    },
    closeWindow() {
      this.showDialog = false;
    },
  },
  mounted() {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5b31234f&app_key=2381d9ca3c66cd815d5f49c76458a396&diet=balanced&cuisineType=British&mealType=Snack&field=label&field=image&field=source&field=ingredientLines&field=ingredients"
      )
      .then((response) => {
        this.menuİnf = response.data.hits.splice(0, 18);
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
  text-align: center;
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
