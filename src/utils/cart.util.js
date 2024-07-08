export const getItemInfo = (itemId) => {
  if (itemId === "item1") {
    return {
      name: "Item 1",
      price: 100,
    };
  } else {
    return {
      name: "Item 2",
      price: 150,
    };
  }
};
