<script>
import Sidebar from "../components/Home/SideBar.vue";
export default {
  methods: {
    uptadeBookmarkList(categoryId) {
      this.$appAxios
        .get(`/bookmark?_expand=category&_expand=user&categoryId=${categoryId}`)
        .then((bookmark_list_response) => {
          console.log(bookmark_list_response);
          this.bookmarkList = bookmark_list_response?.data || [];
        });
    },
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  components: {
    Sidebar,
  },
  created() {
    this.$appAxios
      .get("/bookmark?_expand=category&_expand=user")
      .then((bookmark_list_response) => {
        console.log(bookmark_list_response);
        this.bookmarkList = bookmark_list_response?.data || [];
      });
  },
};
</script>

<template >
  <app-header />
  <div class="flex flex-row">
    <sidebar @category-changed="uptadeBookmarkList" />
    <app-bookmark-list :items="bookmarkList" />
  </div>
</template>

<style>
</style>