const { createApp } = Vue;

createApp({
  data() {
    return {
      result: 0,
      operator: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      buffer: ''
    }
  },
  methods: {
    addNumber(num) {
      this.buffer += num;
      this.result = this.buffer;
    },
    addOperator(operator) {
      this.operator = operator;
      this.result = this.buffer;
      this.buffer = '';
    },
    calculate() {
      const num1 = parseInt(this.result);
      const num2 = parseInt(this.buffer);
      switch (this.operator) {
        case '+':
          this.result = num1 + num2;
          break;
        case '-':
          this.result = num1 - num2;
          break;
      }
      this.buffer = '';
    },
    clear() {
      this.result = 0;
      this.operator = '';
      this.buffer = '';
    }
  }
}).mount('#app');
