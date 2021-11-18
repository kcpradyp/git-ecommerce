import { types } from '../../context/CartContext';
export const reducer = (state, action) => {
  switch (action.type) {
    case types.REMOVE_ITEM:
      return {
        ...state,
        item: state.item.filter((c) => {
          return c.id !== action.payload.id;
        }),
      };

    case types.CLEAR_CART:
      return { ...state, item: [] };

    case types.INCREMENT:
      if (state.item.find((x) => x.id === action.payload.id)) {
        const incrementCart = state.item.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, quantity: c.quantity + 1 };
          }
          return { ...c };
        });
        return { ...state, item: incrementCart };
      } else {
        return { ...state, item: [...state.item, { ...action.payload, quantity: 1 }] };
      }

    case types.DECREMENT:
      const decrementCart = state.item
        .map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, quantity: c.quantity - 1 };
          }
          return c;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, item: decrementCart };

    case types.GET_TOTAL:
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    default:
      return state;
  }
};
