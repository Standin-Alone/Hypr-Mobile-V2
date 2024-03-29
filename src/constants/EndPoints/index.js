const EndPoints = {
    LOGIN:'/user/sign-in',
    CREATE_ACCOUNT:'/user/sign-up',
    CREATE_ACCOUNT_USING_GOOGLE:'/user/sign-up-using-google',
    VERIFY_OTP:'/user/verify-otp',
    RESEND_OTP:'/user/resend-otp',
    GET_USER_INFO:'/user/get-user-info',
    CHANGE_PROFILE_PICTURE:'/user/change-profile-picture',
    CHANGE_PROFILE_INFO:'/user/change-profile-info',
    SEND_FORGOT_PASSWORD_LINK:'/user/send-forgot-password-link',

    GET_ALL_CATEGORIES:'/get-categories',
    GET_ALL_PRODUCTS:'/get-products',
    GET_CART_COUNT:'/market/get-cart-count',
    GET_REVIEW_COUNT:'/market/get-review-count',
    GET_PRODUCT_REVIEWS:'/market/get-product-reviews',
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
    REMOVE_ITEM_IN_CART:'/market/remove-item-in-cart',



    SAVE_ADDRESS:'/market/save-address',
    UPDATE_ADDRESS:'/market/update-address',
    DELETE_ADDRESS:'/market/delete-address',
    GET_CITIES:'/market/get-cities',
    GET_STATE:'/market/get-state',

    

    // ORDER

    CHECKOUT:'/create-order',
    PAY_WITH_PAYPAL:'/payment/pay-with-paypal',
    PAY_WITH_REWARD:'/payment/pay-with-reward',
    FINAL_SUCCESS_PAYMENT:'/payment/final-success-payment',
    CONFIRM_ORDER:'/confirm-order',



    // MLM
    DISSEMINATE_REWARDS:'/mlm-disseminate-rewards',
    GET_MEMBERS:'/get-members',



    // STRIPE
    STRIPE_CHECKOUT_SESSION:'/payment/stripe-checkout-session',

    // TRACKING
    CHECK_ORDER_STATUS:'/fetch-order',
    UPDATE_TRACKING:'/tracking/update-tracking',
    GET_TO_VERIFY_ORDERS:'/tracking/get-to-verify-orders',
    GET_TO_REVIEW_ORDERS:'/tracking/get-to-review-orders',
    GET_ORDERED_PRODUCTS:'/tracking/get-ordered-products',
    GET_TRACKING_DETAILS:'/tracking-details',
    ORDER_RECEIVED:'/tracking/order-received',
    REVIEW_PRODUCT:'/tracking/review-product',

    // SOCIAL
    GET_ALL_FRIENDS_POST:'/social/get-all-friends-post',
    GET_ALL_MY_POST:'/social/get-all-my-post',
    CREATE_POST:'/social/create-post',
    HYPE_POST:'/social/hype-post',
    COMMENT:'/social/comment',
    GET_PROFILE_INFO:'/social/get-profile-info',
    GET_ALL_FRIENDS_STORIES:'/social/get-all-friends-stories',
    CREATE_STORY:'/social/create-story',
    BOOST:'/social/boost',
  

    // FRIEND
    GET_ALL_FRIENDS_SUGGESTION:'/friend/get-all-friends-suggestion',
    GET_ALL_FRIENDS_REQUESTS:'/friend/get-all-friends-requests',
    GET_ALL_MY_FRIENDS:'/friend/get-all-my-friends',
    SEND_FRIEND_REQUEST:'/friend/send-friend-request',
    ACCEPT_FRIEND_REQUEST:'/friend/accept-friend-request',
    DECLINE_FRIEND_REQUEST:'/friend/decline-friend-request',


    // CHAT
    SEND_MESSAGE:'/chat/send-message',
    CHECK_ROOM:'/chat/check-room',
    GET_FRIENDS_MESSAGES:'/chat/get-friends-messages',
    SEARCH_FRIEND:'/chat/search-friend',

    // MLM
    GET_REWARDS_HISTORY:'/mlm/reward-history',

    // NOTIFICATION    
    GET_NOTIFICATIONS:'/notification/get-notifications',

    // PARTNERS
    GET_PARTNERS:'/partners/get-partners',
}


export default EndPoints;