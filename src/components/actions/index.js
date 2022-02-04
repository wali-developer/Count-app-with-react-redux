export const IncCounter = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const DecCounter = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
