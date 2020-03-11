<template>
  <div>
    <b-table striped hover :items="items" responsive="sm">
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
      <template v-slot:cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>
      </template>
    </b-table>
  </div>
</template>

<script>
import data from "@/data";

export default {
  data() {
    return {
      fields: [
        "index",
        { key: "name", label: "Full Name" },
        "age",
        "sex",
        { key: "nameage", label: "First name and age" }
      ],
      items: [
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
        { name: { first: "Rubin", last: "Kincade" }, sex: "Male", age: 73 },
        {
          name: { first: "Shirley", last: "Partridge" },
          sex: "Female",
          age: 62
        }
      ]
    };
  }
};
</script>