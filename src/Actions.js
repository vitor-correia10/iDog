export const selectedBreed = (value, key) => {
  return {
      type: "SELECTED-BREED",
      key,
      value,
  };
};