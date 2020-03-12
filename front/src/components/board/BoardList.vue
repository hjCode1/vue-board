<template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from "@/data";

export default {
  data() {
    let contentItems = data.Content.sort((a, b) => {
      return b.content_id - a.content_id;
      // 내림차순
    });

    let items = contentItems.map(contentItem => {
      return {
        ...contentItem,
        user_name: data.User.filter(userItem => {
          return contentItem.user_id === userItem.user_id;
        })[0].name
      };
    });

    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: "contend_id",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "user_name",
          label: "번호"
        },
        {
          key: "create_at",
          label: "번호"
        }
      ],
      items
    };
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/detail/${item.content_id}`
      });
    },
    writeContent() {
      this.$router.push({
        path: `/board/create`
      });
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style>
</style>