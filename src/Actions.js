export const selectedBreed = (value, key) => {
  return {
      type: "SELECTED-BREED",
      key,
      value,
  };
};

export const addImage = (url) => ({
  type: "ADD-IMAGE",
  url: url,
});

export const removeImage = (url) => ({
  type: "REMOVE-IMAGE",
  url,
});