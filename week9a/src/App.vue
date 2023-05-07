<template>
  <div>
    <h1>{{ title }}</h1>
    <shoe-row v-for="(shoe, index) in shoes" :key="index" :shoe="shoe" @delete="deleteShoe(index)" />
    <button @click="addShoe">Add Shoe</button>
  </div>
</template>

<script>
import ShoeRow from "./components/ShoeRow.vue";

export default {
  name: "App",
  components: {
    ShoeRow,
  },
  data() {
    return {
      title: "My Shoe Collection",
      shoes: [
        {
          name: "Nike Air Max 90",
          brand: "Nike",
          color: "Black/White",
          size: 9.5,
          condition: "New",
        },
        {
          name: "Air Jordan 1",
          brand: "Nike",
          color: "Red/Black",
          size: 10,
          condition: "Used",
        },
      ],
    };
  },
  methods: {
    addShoe() {
      this.shoes.push({
        name: "New Shoe",
        brand: "",
        color: "",
        size: "",
        condition: "",
      });
    },
    deleteShoe(index) {
      this.shoes.splice(index, 1);
    },
  },
};
</script>
