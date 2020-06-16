import SHOP_DATA from './shop.data';

const INISIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INISIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;