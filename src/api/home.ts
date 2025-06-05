import axios from "axios";
import { url } from "./url";
import { PostContent } from "@/@types/home";

 const fetchDataList = async () => {
    try {
      const response = await axios.get(`${url.baseUrlHome}/posts`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; 
    }
};

 const postData = async (data: PostContent) => {
  try {
    const response = await axios.post(`${url.baseUrlHome}/posts`, data);
    console.log("Post success:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};

const editItem = async(id: number, data:PostContent) => {
  try{
    const response = await axios.put(`${url.baseUrlHome}/posts/${id}`, data);
    return response.data;
  } catch(error) {
    console.log("Error Editing item", error);
    return null;
  }
}

const deleteItem = async(id: string) => {
  try{
    const response = await axios.delete(`${url.baseUrlHome}/posts/${id}`);
    return response.data;
  } catch(error){
    console.log("Error deleting item", error);
    return null;
  }
}

export {fetchDataList, postData, deleteItem,editItem}