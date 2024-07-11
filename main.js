const{ createApp,ref,computed,reactive,toRefs } = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true)
        
        function updateCart(id){
          return cart.value.push(id)
          
      }
       

        return{
            cart,
            premium,
            updateCart,
        }
    }
})
//lab2 1.9
//lab2 1.9b

app.component('product-display', productDisplay)
app.component('product-details', productDetails)

app.component('review-form',reviewForm)
app.component('review-list',reviewList)




app.mount('#app');