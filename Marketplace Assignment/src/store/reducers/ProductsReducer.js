const initState = {
    products: [
        {id: 1, name: 'Custom Cake', image: '1.jpg', price: 4.4, discount: 2, discountPrice: 4.4  - 2 / 100 * 4.4, quantity: 1, desc: "Custom your unique cake for a special occasion! Birthday, Anniversary or more need a cake to complete it. With cake size up to 26 cm, 5 people can have it."},
        {id: 2, name: 'Donuts', image: '2.jpg', price: 7.5, discount: 2, discountPrice: 7.5  - 2 / 100 * 7.5, quantity: 1, desc: "Box sprinkle and colorfull donut, just for you! One, two donut can get you enough. Here we are preapare 6 donut for you!"},
        {id: 3, name: 'Garden Cupcakes', image: '3.jpg', price: 8.7, discount: 3, discountPrice: 8.7  - 3 / 100 * 8.7, quantity: 1, desc: "Blooming cupcakes for your beautiful day! "},
        {id: 4, name: 'Berry Cupcake', image: '4.jpg', price: 8.7, discount: 2, discountPrice: 8.7 - 2 / 100 * 8.7, quantity: 1, desc: "A little sour berry meet sweet cupcakes. Who doesn't like this fresh sweet taste?"},
        {id: 5, name: 'Boucket Cookies', image: '5.jpg', price: 5.5, discount: 2, discountPrice: 5.5  - 2 / 100 * 5.5, quantity: 1, desc: "A bucket cookies for your companion. Snack that will make your tummy full while doing your activities"},
        {id: 6, name: 'Cinnamon Rolls', image: '6.jpg', price: 6, discount: 3, discountPrice: 6  - 3 / 100 * 6, quantity: 1, desc: "Roll and rolling around. Cinnamon roll will make your tastebud tickled"},
        {id: 7, name: 'Fudgy Brownies', image: '7.jpg', price: 4, discount: 2, discountPrice: 4  - 2 / 100 * 4, quantity: 1, desc: "Fudgy brownies with the sweetest choco will help you get back in mood!"},
        {id: 8, name: 'Cheese Cakes', image: '8.jpg', price: 7.2, discount: 3, discountPrice: 7.2  - 7 / 100 * 7.2, quantity: 1, desc: "Say cheese everyday! This cheese cake will make you smile wider."},     
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;