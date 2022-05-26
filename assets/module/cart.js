export default {
  template: `
    <div class="product-container">
      <img :src="'./assets/img/' + product.img + '.png'" alt="product.title" class="product-img">
      <div class="product-inf-container">
        <a class="product-name" @click="currentPage = 'product'">{{ product.title }}</a>
        <p class="product-inf">{{ product.body }}</p>
        <span class="ups">
          <p class="product-price product-price_ups">Amount: {{ product.amount }}</p>
          <p class="product-price product-price_ups">Price: {{ product.amount * product.price }} $</p>
        </span>
        <span class="ups">
          <button class="btn-black" @click="product.amount++">+</button>
          <button class="btn-black" @click="product.amount - 1 === 0 ? $emit('clear', product) : product.amount--">-</button>
        </span>
      </div>
    </div>
  `,

  data(){
    return{

    }
  },

  props:{
    product:{
      type: Object
    }
  }
}