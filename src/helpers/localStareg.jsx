export const getInitialState = (key, data) => {
  return JSON.parse(localStorage.getItem(key)) || data;
};
export const setToLS = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
