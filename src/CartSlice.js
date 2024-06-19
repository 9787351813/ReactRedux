import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9-600x600.jpg",
            "images": [
                "https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9-600x600.jpg",
            ],
            "quantity": 1
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
            "images": [
                "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
            ],
            "quantity": 1
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i5.walmartimages.com/asr/80aad70e-23d9-4bac-b938-2a64c5e7a563.2e769bfe8c5e1dc83053b6edb4d053ff.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
            "images": [
                "https://i5.walmartimages.com/asr/80aad70e-23d9-4bac-b938-2a64c5e7a563.2e769bfe8c5e1dc83053b6edb4d053ff.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
            ],
            "quantity": 1
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://gumlet.assettype.com/digitalterminal/import/uploads/news/1617775291s_oppo.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
            "images": [
                "https://gumlet.assettype.com/digitalterminal/import/uploads/news/1617775291s_oppo.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
            ],
            "quantity": 1
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i1.wp.com/mobilecryptotech.com/wp-content/uploads/2019/03/IMG_20190316_215658.jpg?fit=1920%2C1920&ssl=1",
            "images": [
                "https://i1.wp.com/mobilecryptotech.com/wp-content/uploads/2019/03/IMG_20190316_215658.jpg?fit=1920%2C1920&ssl=1",
            ],
            "quantity": 1
        }
    ],
    totalQuantity: 5,
    totalAmount: 3476
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity(state, action) {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                product.quantity++;
                state.totalQuantity++;
                state.totalAmount += product.price;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.quantity > 0) {
                product.quantity--;
                state.totalQuantity--;
                state.totalAmount -= product.price;
            }
        }
    }
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
