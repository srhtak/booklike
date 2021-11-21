<script>
import Sidebar from "../components/Home/SideBar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<template >
  <app-header />
  <div class="flex flex-row">
    <sidebar />
    <app-bookmark-list />
  </div>
</template>

<style>
</style>