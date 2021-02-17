export const getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}