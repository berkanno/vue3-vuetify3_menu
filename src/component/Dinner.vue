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

  <v-container class="mt-10">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        xl="2"
        v-for="(item, i) in menuİnf"
        :key="item"
      >
        <v-card height="100%" width="100%" flat @click="($event) => onClick(i)">
          <v-progress-linear
            indeterminate
            color="blue"
            width="100%"
            height="100%"
            class="progress-linear"
          >
            <v-img
              :src="item.recipe.image"
              width="100%"
              cover
              class="d-flex align-end"
            >
              <v-card class="text-center text-caption ddd mt-16" height="40">
                {{ item.recipe.label }}
              </v-card>
            </v-img>
          </v-progress-linear>
        </v-card>
      </v-col>
      <v-dialog v-model="showDialog" width="700" height="100%">
        <v-container>
          <v-card width="700" height="600">
            <v-img :src="selectImage" width="100%" cover>
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
                <v-card class="mt-4 mr-10 opac" width="300" max-height="100%">
                  <v-col cols="12" class="text-h6 text-center text-white">
                    {{ selectTitle }}
                  </v-col>
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
  <v-col cols="12">
    <v-card flat>
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
  </v-col>
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
      this.selectDetails = this.menuİnf[i].recipe.ingredientLines;
      this.selectTitle = this.menuİnf[i].recipe.label;
      this.selectImage = this.menuİnf[i].recipe.image;
      this.showDialog = true;
    },
    closeWindow() {
      this.showDialog = false;
    },
  },
  mounted() {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5b31234f&app_key=2381d9ca3c66cd815d5f49c76458a396&diet=balanced&cuisineType=British&mealType=Dinner&field=label&field=image&field=source&field=ingredientLines&field=ingredients"
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
.routerlink {
  text-decoration: none;
  color: aliceblue;
  text-align: center;
}
.ddd {
  background-color: rgba(0, 0, 255, 0.9);
  color: aliceblue;
}
.opac {
  background-color: rgba(61, 61, 61, 0.9);
}
</style>
