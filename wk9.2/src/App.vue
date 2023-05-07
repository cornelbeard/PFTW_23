<template>
  <div>
    <animal-card v-for="(camelid, index) in camelids" :key="index" :animal="camelid"></animal-card>
  </div>
</template>

<script setup>
const camelids = [
  {
    commonName: "Lama",
    binomialName: "Lama glama",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Lama",
    species: "L. glama",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
  },
  {
    commonName: "Alpaca",
    binomialName: "Vicugna pacos",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Vicugna",
    species: "V. pacos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
  },
];
</script>

<style>
  .animal-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px;
  }

  .animal-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .animal-info {
    text-align: center;
  }
</style>
