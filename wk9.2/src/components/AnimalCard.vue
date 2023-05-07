<template>
  <div class="animal-card">
    <img :src="animal.image" :alt="animal.commonName" class="animal-image" />
    <div class="animal-info">
      <h3>{{ animal.commonName }}</h3>
      <p><strong>Binomial name:</strong> {{ animal.binomialName }}</p>
      <p><strong>Order:</strong> {{ animal.order }}</p>
      <p><strong>Family:</strong> {{ animal.family }}</p>
      <p><strong>Genus:</strong> {{ animal.genus }}</p>
      <p><strong>Species:</strong> {{ animal.species }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalCard",
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
};
</script>
