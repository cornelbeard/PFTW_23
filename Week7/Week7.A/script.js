const { createApp } = Vue;

createApp({
  data() {
    return {
      sneakers: [
        {
          name: "Nike Air Max 90",
          brand: "Nike",
          year: 1990,
          price: 120,
          description: "The Nike Air Max 90 was originally known as the Air Max III until 2000 when it was retroed and changed its name to the year of its release. With its chunky midsole and unmistakable colorway, it is a must-have for any sneaker collector."
        },
        {
          name: "Adidas Ultra Boost",
          brand: "Adidas",
          year: 2015,
          price: 180,
          description: "The Adidas Ultra Boost is known for its comfort and style. It features a Primeknit upper and Boost cushioning technology, which makes it one of the most comfortable sneakers ever made."
        },
        {
          name: "Air Jordan 1",
          brand: "Nike",
          year: 1985,
          price: 160,
          description: "The Air Jordan 1 was designed for Michael Jordan in 1984 and released in 1985. It is one of the most iconic sneakers in history and paved the way for the Jordan brand."
        },
        {
          name: "Converse Chuck Taylor All-Star",
          brand: "Converse",
          year: 1917,
          price: 50,
          description: "The Converse Chuck Taylor All-Star is one of the most iconic sneakers of all time. Originally designed for basketball players, it has since become a staple of streetwear culture."
        },
        {
          name: "Yeezy Boost 350",
          brand: "Adidas",
          year: 2015,
          price: 220,
          description: "The Yeezy Boost 350 is one of the most popular sneakers in the world. Designed by Kanye West, it features a Primeknit upper and Boost cushioning technology."
        }
      ]
    };
  },
  methods: {
    toggleSale(sneaker) {
      sneaker.onSale = !sneaker.onSale;
    }
  }
}).mount("#app");
