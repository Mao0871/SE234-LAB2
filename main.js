const{ createApp,ref,computed } = Vue

const app = createApp({
    setup(){
        // const cart = ref([])貌似对象化这个玩意是唯一解
        const cart = ref({})
        const premium = ref(true)
        
        function updateCart(id){
            if (cart.value[id]) {
                cart.value[id] += 1 // 如果产品已在购物车中，增加其数量
              } else {
                cart.value[id] = 1 // 如果产品不在购物车中，添加并设置数量为1
              }
        }
        function updateCart2(id){
            if (cart.value[id]) {
                cart.value[id] -= 1 // 如果产品已在购物车中，增加其数量
              } else {
                cart.value[id] = 0 // 如果产品不在购物车中，添加并设置数量为1
              }
        }

        return{
            cart,
            premium,
            updateCart,
            updateCart2
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails);


app.mount('#app');