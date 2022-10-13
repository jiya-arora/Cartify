const DefaultitemsList = [
    {
      id: 1,
      price: 50000,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      id: 2,
      price: 42000,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

export const defaultState = {
    itemsList: DefaultitemsList,
    showMessage: false,
    messageContent: "",
    totalAmount: 0,
  };