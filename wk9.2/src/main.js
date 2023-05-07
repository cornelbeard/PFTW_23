import { createApp } from "vue";
import App from "./App.vue";
import AnimalCard from "./components/AnimalCard.vue";

createApp(App).component("animal-card", AnimalCard).mount("#app");
