const reviewForm = {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommended">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        
        <input class="button" type="submit" value="Submit">
    </form>`,

    setup(props, {emit}) {
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommended: ''
        })


        function onSubmit(){
            console.log('form', form)
            if(form.name === '' || form.review === '' || form.rating === null || form.recommended === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                recommended: form.recommended

            }
            emit('review-submitted',productReview)
            form.name = ''
            form.review = ''
            form.rating = null
            form.recommended = ''
        }
        return{
            ...toRefs(form),
            onSubmit
        }
    }
}

    
