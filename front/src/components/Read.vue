<template>
  <div id="tbl_wrap">
    <table>
      <thead>
        <tr>
          <th>글쓴이</th>
          <th>제목</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in data" :key="index" @click="detail(index)">
          <td>{{d.writer}}</td>
          <td>{{d.title}}</td>
          <td>{{d.content}}</td>
        </tr>
      </tbody>
    </table>
    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import data from "@/data";

export default {
  data() {
    return {
      data
    };
  },
  methods: {
    write() {
      this.$router.push({
        name: "Create"
      });
    },
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: index
        }
      });
    }
  }
};
</script>

<style>
</style>