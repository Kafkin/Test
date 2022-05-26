import vProduct from '../assets/module/product.js'
import vCart from '../assets/module/cart.js'

const App = {
  data() {
    return {
      currentPage: "home", // home, cart, reg, log, product, forget, aboutus
      
      arrayCards: [{
        id: 0, 
        title: 'Robot Helper', 
        body: 'Youngsters aren’t the only ones who get the latest high-tech gadgets. Sometime in the next decade or two, homebound retirees could be early adopters of an important new technology: the home-help robot.',
        price: 14999,
        img: 'robot-helper',
        amount: 1
      },{
        id: 1, 
        title: 'Robot Cleaner', 
        body: 'The Smart robot vacuum cleaner allows you to do stuff you love in your free time while the robot does all cleaning of your floor. This cleaner does not make a louder noise, so you wont even notice it.',
        price: 9999,
        img: 'robot-cleaner',
        amount: 1
      },{
        id: 2, 
        title: 'Computer', 
        body: 'A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically.',
        price: 29999,
        img: 'computer',
        amount: 1
      }],

      arrayShoppingCart: []
    }
  },

  methods:{
    add(product){
      const user = this.arrayShoppingCart.find(el => el.title === product.title)
      !!user ? (() => {
        user.amount++
      })() : (() => {
        this.arrayShoppingCart.push(product)
      })()
    },

    clear(product){
      const index = this.arrayShoppingCart.findIndex(el => el.title === product.title)
      this.arrayShoppingCart.splice(index, 1)
    }
  },

  computed:{
    allPrice(){
      return this.arrayShoppingCart.reduce((total, item) => {
        return total + (item.price * item.amount)
      }, 0)
    },

    allAmount(){
      return this.arrayShoppingCart.reduce((total, item) => {
        return total + item.amount
      }, 0)
    }
  },

  components:{
    vProduct,
    vCart
  }
}
Vue.createApp(App).mount('#app')