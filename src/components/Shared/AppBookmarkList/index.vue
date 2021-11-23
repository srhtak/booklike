<script>
import BookmarkListItem from "./BookmarkListItem.vue";
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    BookmarkListItem,
  },
};
</script>

<template>
  <div class="w-full">
    <div
      class="
        p-2
        grid
        2xl:grid-cols-8
        xl:grid-cols-6
        lg:grid-cols-5
        md:grid-cols-4
        sm:grid-cols-2
        gap-4
      "
    >
      <bookmark-list-item v-for="item in items" :key="item" :item="item" />
    </div>
  </div>
  <!--!Bookmark Items -->
</template>

<style>
</style>