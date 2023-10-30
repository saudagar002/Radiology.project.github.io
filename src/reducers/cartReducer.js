import { ADD_TO_CART, REMOVE_FROM_CART } from '../components/cartActionTypes';

const initialState = {
  selectedItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: 
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
