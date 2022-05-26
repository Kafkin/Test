export default {
  template: `
    <div class="product-container">
      <img :src="'./assets/img/' + product.img + '.png'" alt="product.title" class="product-img">
      <div class="product-inf-container">
        <a class="product-name" @click="currentPage = 'product'">{{ product.title }}</a>
        <p class="product-inf">{{ product.body }}</p>
        <p class="product-price">{{ product.price }} $</p>
        <button class="btn-black" @click="$emit('add', product)">add to cart</button>
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