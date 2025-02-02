const productDetails = {
    props: {
        details:{
            type: Array,
            required: true
        }
    },
    template: 
    `
    <div class="product-details">
        <ul>
            <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
    </div>
    `
};
