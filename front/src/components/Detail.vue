<template>
  <div>
    <h1>Detail</h1>
    <p>{{data.writer}}</p>
    <p>{{data.title}}</p>
    <p>{{data.content}}</p>
    <button @click="editData">수정</button>
    <button @click="deleteData">삭제</button>
  </div>
</template>

<script>
import data from "@/data";

export default {
  data() {
    const idx = this.$route.params.contentId;
    return {
      data: data[idx],
      idx: idx
    };
  },
  methods: {
    editData() {
      this.$router.push({
        name: "Create",
        params: {
          contentId: this.idx
        }
      });
    },
    deleteData() {
      data.splice(this.idx, 1);
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style>
</style>