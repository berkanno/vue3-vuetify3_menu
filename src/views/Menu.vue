<template>
  <v-row justify="center" class="mt-16">
    <v-col cols="8">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            v-for="item in menuNameList"
            :key="item"
          >
            <v-card flat width="100%">
              <router-link class="routerlnk" :to="{ path: '/' + item.title }">
                <v-img :src="item.img" width="100%" class="d-flex align-end">
                  <v-card class="transp text-white" flat>
                    
                    {{ item.title }}
                  </v-card>
                </v-img>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menuNameList: [
        {
          id: 0,
          title: "Dinner",
          img: "https://cdn.pixabay.com/photo/2015/05/31/11/18/table-setting-791149__340.jpg",
        },
        {
          id: 0,
          title: "Lunch",
          img: "https://cdn.pixabay.com/photo/2016/11/22/18/58/bowl-1850039__340.jpg",
        },
        {
          id: 0,
          title: "Snack",
          img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
        },

        {
          id: 2,
          title: "Breakfast",
          img: "https://media.istockphoto.com/id/938158500/tr/foto%C4%9Fraf/kahvalt%C4%B1-masas%C4%B1.jpg?b=1&s=170667a&w=0&k=20&c=HdhtsRDquD5ZT5XoY_RaGy1FDwERoPg-P3NxHMT1Obc=",
        },
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
.transp {
  background-color: rgba(0, 0, 255, 0.9);
}
</style>
