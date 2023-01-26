import { createSlice } from '@reduxjs/toolkit'
import iPhone13 from '../../assets/iphone13.jpg'
import iPhone14 from '../../assets/iphone14.jpg'
import Nova9 from '../../assets/nova9.jpg'
import P50 from '../../assets/p50.jpg'
import A13 from '../../assets/a13.jpg'
import A53 from '../../assets/a53.jpg'
import A1 from '../../assets/a1.jpg'
import S10 from '../../assets/s10.jpg'
import S22 from '../../assets/s22.jpg'

const initialState = {
    products:[
        {
            id: '1A',
            name: 'iPhone 14 Pro Max',
            actualPrice: 430,
            discountPrice: 410,
            cartedBy: [],
            watchedBy: [],
            rating: 9.5,
            img: iPhone14,
            reviews: 55,
            category: 'Phones & Accessories',
            properties: [
                ['battery','3000mAh'],
                ['camera', 'Tripple Rear Camera'],
                ['memory','3GB RAM, 256GB ROM']
            ]
        },
        {
            id: '1B',
            name: 'Hwauei Nova9',
            actualPrice: 350,
            discountPrice: 320,
            cartedBy: [],
            watchedBy: [],
            rating: 8.5,
            img: Nova9,
            reviews: 55,
            category: 'Phones & Accessories',
            properties: [
                ['battery','3000mAh'],
                ['camera', 'Tripple Rear Camera'],
                ['memory','3GB RAM, 256GB ROM']
            ]

        },
        {
            id: '1C',
            name: 'iPhone 13 Pro Max',
            actualPrice: 300,
            discountPrice: 280,
            cartedBy: [],
            watchedBy: [],
            rating: 6,
            img: iPhone13,
            reviews: 55,
            category: 'Phones & Accessories',
            properties: [
                ['battery','3000mAh'],
                ['camera', 'Tripple Rear Camera'],
                ['memory','3GB RAM, 256GB ROM']
            ]
        },
        {
            id: '1D',
            name: 'Samsung S22 Ultra',
            actualPrice: 450,
            discountPrice: 380,
            cartedBy: [],
            watchedBy: [],
            rating: 7.5,
            img: S22,
            reviews: 55,
            category: 'Phones & Accessories',
            properties: [
                ['battery','3000mAh'],
                ['camera', 'Tripple Rear Camera'],
                ['memory','3GB RAM, 256GB ROM']
            ]
        },
        {
            id: '1E',
            name: 'Huawei P50 Pro',
            actualPrice: 270,
            discountPrice: 250,
            cartedBy: [],
            watchedBy: [],
            rating: 8,
            img: P50,
            reviews: 55,
            category: 'Phones & Accessories',
            properties: [
                ['battery','3000mAh'],
                ['camera', 'Tripple Rear Camera'],
                ['memory','3GB RAM, 256GB ROM']
            ]
        }
    ],
    cart:[
      
    ],
    watchlist:[
     
    ],
    itemId: ''
}
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const {id, name, actualPrice, discountPrice, userId, img} = action.payload
            state.cart = [...state.cart, {
                id: id,
                name: name,
                actualPrice: actualPrice,
                discountPrice: discountPrice,
                cartedBy: userId,
                quantity: 1,
                img: img
            }]
            state.products = state.products.map(item => {
                if(item.id === id) {
                    item.cartedBy = [...item.cartedBy, userId]
                }
                return item
            })
        },
        removeFromCart: (state, action) => {
            const {id, userId} = action.payload
            state.cart = state.cart.filter(item => !(item.cartedBy === userId && item.id === id))
            state.products = state.products.map(item => {
                if(item.cartedBy.includes(userId) && item.id === id){
                    item.cartedBy = item.cartedBy.filter(id => id !== userId)
                }
                return item
            })
        },
        addToWatchlist: (state, action) => {
            const {id, name, actualPrice, discountPrice, userId, img} = action.payload
            state.watchlist = [...state.watchlist, {
                id: id,
                name: name,
                actualPrice: actualPrice,
                discountPrice: discountPrice,
                watchedBy: userId,
                img: img
            }]
            state.products = state.products.map(item => {
                if(item.id === id) {
                    item.watchedBy = [...item.watchedBy, userId]
                }
                return item
            })
        },
        removeFromWatchlist: (state, action) => {
            const {id, userId} = action.payload
            state.watchlist = state.watchlist.filter(item => !(item.watchedBy === userId && item.id === id))
            state.products = state.products.map(item => {
                if(item.watchedBy.includes(userId) && item.id === id){
                    item.watchedBy = item.watchedBy.filter(id => id !== userId)
                }
                return item
            })
        },
        increaseQty: (state, action) => {
            const {id, userId} = action.payload
            state.cart = state.cart.map(item => {
                if(item.id === id && item.cartedBy === userId){
                    item.quantity = item.quantity + 1
                }
                return item
            })
        },
        decreaseQty: (state, action) => {
            const {id, userId} = action.payload
            state.cart = state.cart.map(item => {
                if(item.id === id && item.cartedBy === userId){
                    if(item.quantity > 1){
                        item.quantity = item.quantity - 1
                    }else{
                        item.quantity = 1
                    }
                }
                return item
            })
        },
        singleProduct: (state, action) => {
            const { itemId } = action.payload
            state.itemId = itemId
        }

    }
})

export const { addToCart, removeFromCart, removeFromWatchlist, addToWatchlist, decreaseQty, singleProduct, increaseQty } = ProductSlice.actions

export default ProductSlice.reducer