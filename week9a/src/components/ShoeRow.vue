<template>
    <div>
      <div>
        <label>Name: </label>
        <input type="text" v-model="shoe.name" />
      </div>
      <div>
        <label>Brand: </label>
        <input type="text" v-model="shoe.brand" />
      </div>
      <div>
        <label>Color: </label>
        <input type="text" v-model="shoe.color" />
      </div>
      <div>
        <label>Size: </label>
        <input type="text" v-model="shoe.size" />
      </div>
      <div>
        <label>Condition: </label>
        <input type="text" v-model="shoe.condition" />
      </div>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShoeRow",
    props: {
      shoe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  