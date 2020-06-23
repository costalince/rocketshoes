export default function cart(state = [], action) {
  /* switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  } */

  const types = {
    ADD_TO_CART: () => [...state, action.product],
    default: () => state,
  };

  return (types[action.type] || types.default)();
}
