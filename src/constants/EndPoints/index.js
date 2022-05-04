const EndPoints = {
    LOGIN:'/user/sign-in',
    CREATE_ACCOUNT:'/user/sign-up',
    VERIFY_OTP:'/user/verify-otp',
    RESEND_OTP:'/user/resend-otp',


    GET_ALL_PRODUCTS:'/get-products',
    SEARCH_PRODUCTS:'/search-products',
    GET_PRODUCT_VARIANTS:'/get-variants',
    GET_SHIPPING_ADDRESS:'/market/get-shipping-address',
    
    UPDATE_SELECTED_ADDRESS:'/market/update-selected-address',
    GET_WISH_LIST:'/market/get-wish-list',

    ADD_TO_CART:'/market/add-to-cart',
    GET_CART:'/market/get-cart',
    ADD_TO_WISHLIST:'/market/add-to-wishlist',

    CALCULATE_FREIGHT:'/freight-calculate',
    INCREASE_QUANTITY:'/market/increase-quantity',
    DECREASE_QUANTITY:'/market/decrease-quantity',



    SAVE_ADDRESS:'/market/save-address',
    GET_CITIES:'/market/get-cities',
    GET_STATE:'/market/get-state',


    // ORDER

    CHECKOUT:'/create-order',

}


export default EndPoints;