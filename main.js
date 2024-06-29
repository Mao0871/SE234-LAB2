const{ createApp,ref,computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const inventory = ref(100)
        const onSale = ref(true)

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id:2234,color:'green', image: './assets/images/socks_green.jpg', quantity:50},
            { id:2235,color:'blue', image:'./assets/images/socks_blue.jpg', quantity:0}
        ])
        const selectedVariant = ref(0)

        const cart = ref(0)

        const title = computed(() =>{
            if(onSale){
            return brand.value+' '+product.value+' is on sale!!!!!!!!!!!!'}
        })

        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })


        function addToCart(){
            cart.value +=1
        }

        

        function updateVariant(index){
            selectedVariant.value = index;

        }
        
      
        return{
            title,
            image,
            inStock,
            inventory,
            details,
            variants,
            cart,
            addToCart,
            updateVariant,

            
        }
    }

}).mount('#app')