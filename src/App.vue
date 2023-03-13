<template>
  <v-app class="mb-0">
    <app-toolbar />
    <router-view class="mt-16"></router-view>
    <app-footer />
  </v-app>
</template>

<script>
import appToolbar from '@/views/Toolbar.vue';
import appFooter from '@/views/Footer.vue';
export default {
  components: {
    appToolbar,
    appFooter,
  }
}
</script>
