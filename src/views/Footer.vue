<template>
  <v-footer color="light-blue-darken-4" class="mt-4">
    <v-row justify="center" class="my-3 ml-16">
      <v-col cols="4" v-for="item in informations" :key="item">
        <v-row justify="center"></v-row>
        <v-card flat class="pl-7 ml-15" color="light-blue-darken-4">
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.value }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card> </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      informations: [
        { title: "Phone (Asia)", value: "(0216) 453 66 55" },
        { title: "Phone (Europe)", value: "(0212) 342 33 21" },
        { title: "Email", value: "lezzetDuragı@gmail.com" },
      ],
    };
  },
};
</script>
