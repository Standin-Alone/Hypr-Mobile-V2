const EndPoints = {
    LOGIN:'/user/sign-in',
    CREATE_ACCOUNT:'/user/sign-up',
    CREATE_ACCOUNT_USING_GOOGLE:'/user/sign-up-using-google',
    VERIFY_OTP:'/user/verify-otp',
    RESEND_OTP:'/user/resend-otp',
    GET_USER_INFO:'/user/get-user-info',
    CHANGE_PROFILE_PICTURE:'/user/change-profile-picture',


    GET_ALL_PRODUCTS:'/get-products',
    GET_CART_COUNT:'/market/get-cart-count',
    SEARCH_PRODUCTS:'/search-products',
    GET_PRODUCT_VARIANTS:'/get-variants',
    GET_SHIPPING_ADDRESS:'/market/get-shipping-address',
    
    UPDATE_SELECTED_ADDRESS:'/market/update-selected-address',
    GET_WISH_LIST:'/market/get-wish-list',

    ADD_TO_CART:'/market/add-to-cart',
    GET_CART:'/market/get-cart',
    ADD_TO_WISHLIST:'/market/add-to-wishlist',
    REMOVE_PRODUCT_FROM_WISHLIST:'/market/remove-product-from-wishlist',

    CALCULATE_FREIGHT:'/freight-calculate',
    INCREASE_QUANTITY:'/market/increase-quantity',
    DECREASE_QUANTITY:'/market/decrease-quantity',



    SAVE_ADDRESS:'/market/save-address',
    UPDATE_ADDRESS:'/market/update-address',
    DELETE_ADDRESS:'/market/delete-address',
    GET_CITIES:'/market/get-cities',
    GET_STATE:'/market/get-state',

    

    // ORDER

    CHECKOUT:'/create-order',
    PAY_WITH_PAYPAL:'/payment/pay-with-paypal',
    FINAL_SUCCESS_PAYMENT:'/payment/final-success-payment',
    CONFIRM_ORDER:'/confirm-order',


    // MLM
    DISSEMINATE_REWARDS:'/mlm-disseminate-rewards',



    // STRIPE
    STRIPE_CHECKOUT_SESSION:'/payment/stripe-checkout-session',

    // TRACKING
    CHECK_ORDER_STATUS:'/fetch-order',
    GET_TO_VERIFY_ORDERS:'/tracking/get-to-verify-orders',
    GET_ORDERED_PRODUCTS:'/tracking/get-ordered-products',
    GET_TRACKING_DETAILS:'/tracking-details',








    // SOCIAL

    GET_ALL_FRIENDS_POST:'/social/get-all-friends-post',
    CREATE_POST:'/social/create-post',
    HYPE_POST:'/social/hype-post',
    COMMENT:'/social/comment',
    GET_PROFILE_INFO:'/social/get-profile-info',
    GET_ALL_FRIENDS_STORIES:'/social/get-all-friends-stories',
  

    // FRIEND
    GET_ALL_FRIENDS_SUGGESTION:'/friend/get-all-friends-suggestion',
    GET_ALL_FRIENDS_REQUESTS:'/friend/get-all-friends-requests',
    SEND_FRIEND_REQUEST:'/friend/send-friend-request',
    ACCEPT_FRIEND_REQUEST:'/friend/accept-friend-request',
    DECLINE_FRIEND_REQUEST:'/friend/decline-friend-request'
}


export default EndPoints;