<script>
import AccountSideBar from "../components/Account/AccountSideBar.vue";
import AppHeader from "../components/Shared/AppHeader.vue";
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios
      .get("/bookmark?_expand=category&_expand=user")
      .then((bookmark_list_response) => {
        console.log(bookmark_list_response);
        this.bookmarkList = bookmark_list_response?.data || [];
      });
  },
  components: {
    AppHeader,
    AccountSideBar,
  },
};
</script>

<template>
  <app-header />
  <div class="flex flex-row">
    <account-side-bar />
    <component :is="$route.meta.componentName" :items="bookmarkList" />
    {{ $log($route) }}
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>There aren't any bookmark</div> -->
  </div>
</template>


<style>
</style>