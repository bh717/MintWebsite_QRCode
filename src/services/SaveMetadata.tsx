import axios from "axios";

const API_URL = "http://localhost:6969/";

export const saveMetadata = (id: number, title:string, img_url:string, description: string, external_link: string) => {
    // console.log(id, title, img_url, description, external_link);
    return axios
    .post(API_URL + "saveData", {
        id,
        img_url,
        title,
        description,
        external_link,
    })
    .then((response) => {
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) 
    return JSON.parse(userStr);
  return null;
};
