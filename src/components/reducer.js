export const reducer = (state, action) => {

  if (action.type == "ADD_ITEM") {
    const newList = [...state.itemsList, action.payload];
    let newTotalAmount = state.totalAmount;
    newTotalAmount += Number(action.payload.price);
    return {
      ...state,
      itemsList: newList,
      showMessage: true,
      messageContent: "Item added!",
      totalAmount: Number(newTotalAmount),
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showMessage: true,
      messageContent: "Please enter valid values.",
    };
  }

  if (action.type == "CLEAR_ALL") {
    return {
      ...state,
      itemsList: [],
      totalAmount: 0,
    };
  }

  if (action.type == "INC_QUANTITY") {
    let newTotalAmount = state.totalAmount;
    let newItemsList = state.itemsList.map((item) => {
      if (item.id === action.payload) {
        newTotalAmount += Number(item.price);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return {
      ...state,
      itemsList: newItemsList,
      totalAmount: Number(newTotalAmount),
    };
  }
  
  if (action.type == "DEC_QUANTITY") {
    let newTotalAmount = state.totalAmount;
    let newItemsList = state.itemsList.map((item) => {
      if (item.id === action.payload && item.quantity > 0) {
        newTotalAmount -= Number(item.price);
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return {
      ...state,
      itemsList: newItemsList,
      totalAmount: Number(newTotalAmount),
    };
  }

  if (action.type == "REMOVE_ITEM") {
    let newItemsList = state.itemsList.filter((item) => {
      return item.id !== action.payload;
    });
    return newItemsList !== []
      ? {
          ...state,
          itemsList: newItemsList,
          showMessage: true,
          messageContent: "Item removed",
        }
      : { ...state, itemsList: newItemsList };
  }

  if (action.type === "CLOSE_MESSAGE") {
    return {
      ...state,
      showMessage: false,
    };
  }

  if (action.type === "GET_TOTALS") {
    let items = state.itemsList;
    let newTotalAmount = 0;
    items.map((item) => {
      newTotalAmount += Number(item.price) * Number(item.quantity);
    });
    state.totalAmount = Number(newTotalAmount);
    return state;
  }
};
