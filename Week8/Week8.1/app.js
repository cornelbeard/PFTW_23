const { createApp } = Vue;

createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      country: "",
      colors: [],
      status: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted!");
    },
  },
}).mount("#app");
