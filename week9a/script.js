const app = Vue.createApp({
  data() {
    return {
      collectionTitle: 'Sneaker Collection',
      collection: [
        {
          name: 'Air Jordan 1',
          description: 'Original Air Jordan sneaker, released in 1985.',
          price: 150,
          image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Fair-jordan-1-chicago-reimagined-snkrs-restock-000.jpg?w=960&cbr=1&q=90&fit=max'
        },
        {
          name: 'Nike Air Max 90',
          description: 'Classic Nike running shoe, first released in 1990.',
          price: 120,
          image: 'https://sneakernews.com/wp-content/uploads/2022/03/Nike-Air-Max-90-DJ9991-100-4.jpg'
        },
        {
          name: 'Adidas Superstar',
          description: 'Iconic Adidas sneaker, first released in 1969.',
          price: 80,
          image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/62d03b3943d54b659ad8ada8003ffa6a_9366/Superstar_Shoes_White_GZ3742_09_standard.jpg'
        }
      ],
      newItem: {
        name: '',
        description: '',
        price: '',
        image: ''
      }
    }
  },
  methods: {
    addItem() {
      this.collection.push({
        name: this.newItem.name,
        description: this.newItem.description,
        price: this.newItem.price,
        image: this.newItem.image
      })
      this.newItem.name = ''
      this.newItem.description = ''
      this.newItem.price = ''
      this.newItem.image = ''
    },
    deleteItem(index) {
      this.collection.splice(index, 1)
    }
  }
})

app.mount('#app')
