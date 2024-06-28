const{ createApp,ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('abc')
        return{
            product,
            description
        }
        
      
    }

}).mount('#app')