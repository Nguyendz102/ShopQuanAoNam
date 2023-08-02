const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

   

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_CATEGORIES_START:'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS:'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED:'FETCH_CATEGORIES_FAILED',

    
    CREATE_NEW_PRODUCT_SUCCESS:'CREATE_NEW_PRODUCT_SUCCESS',
    CREATE_NEW_PRODUCT_FAIL:'CREATE_NEW_PRODUCT_FAIL',
    
    
    FETCH_PRODUCTS_SUCCESS:'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILED:'FETCH_PRODUCTS_FAILED',
    
    
    DELETE_PRODUCTS_SUCCESS:'DELETE_PRODUCTS_SUCCESS',
    DELETE_PRODUCTS_FAILED:'DELETE_PRODUCTS_FAILED',
    
    
    UPDATE_PRODUCTS_SUCCESS:'UPDATE_PRODUCTS_SUCCESS',
    UPDATE_PRODUCTS_FAILED:'UPDATE_PRODUCTS_FAILED',
    
    CREATE_NEW_IMAGE_SUCCESS:'CREATE_NEW_IMAGE_SUCCESS',
    CREATE_NEW_IMAGE_FAIL:'CREATE_NEW_IMAGE_FAIL',

    FETCH_MEMBERS_SUCCESS:'FETCH_MEMBERS_SUCCESS',
    FETCH_MEMBERS_FAILED:'FETCH_MEMBERS_FAILED',
    
    FETCH_MEMBERSPRICE_SUCCESS:'FETCH_MEMBERSPRICE_SUCCESS',
    FETCH_MEMBERSPRICE_FAILED:'FETCH_MEMBERSPRICE_FAILED',

    UPDATE_PRICES_SUCCESS:'UPDATE_PRICES_SUCCESS',
    UPDATE_PRICES_FAILED:'UPDATE_PRICES_FAILED',
    
    HUY_PRICES_SUCCESS:'HUY_PRICES_SUCCESS',
    HUY_PRICES_FAILED:'HUY_PRICES_FAILED',

    FETCH_ORDERS_SUCCESS:'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_FAILED:'FETCH_ORDERS_FAILED',
    
    HUY_ORDER_SUCCESS:'HUY_ORDER_SUCCESS',
    HUY_ORDERS_FAILED:'HUY_ORDERS_FAILED',
    
    CHECK_ORDER_SUCCESS:'CHECK_ORDER_SUCCESS',
    CHECK_ORDERS_FAILED:'CHECK_ORDERS_FAILED',

    GIAO_ORDER_SUCCESS:'GIAO_ORDER_SUCCESS',
    GIAO_ORDERS_FAILED:'GIAO_ORDERS_FAILED',
    
    DELETE_ORDER_SUCCESS:'DELETE_ORDER_SUCCESS',
    DELETE_ORDERS_FAILED:'DELETE_ORDERS_FAILED',
    
    FETCH_ALL_PRODUCTS_SUCCESS:"FETCH_ALL_PRODUCTS_SUCCESS",
    FETCH_ALL_PRODUCTS_FAILED:'FETCH_ALL_PRODUCTS_FAILED'

    
   
})

export default actionTypes;