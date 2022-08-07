export const iteration = (iterator) => {
  let array = [];

  if (iterator <= 2) {
    array.push({ id: 1, value: "" });
  } else if (iterator <= 4) {
    array.push({ id: 1, value: "" }, { id: 2, value: "" });
  } else if (iterator <= 6) {
    array.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" }
    );
  } else if (iterator <= 8) {
    array.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" }
    );
  } else if (iterator <= 10) {
    array.push(
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" }
    );
  }

  return array;
};
