import { API_URL } from "../config";
const buildUrl = (endpoint = "") => {
  // endpoint debe empezar con /, p.ej. '/users/1/items'
  return `${window.location.origin}/api/${endpoint}`;
};
const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    console.log(url2);
    const url2 = buildUrl(url);
    const response = await fetch(url2, optionsObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
