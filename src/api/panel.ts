import axios from "axios";
import { url } from "./url";

const fetchDataManager = async () => {
    try {
      const response = await axios.get(`${url.baseUrlPanel}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; 
    }
};

export {fetchDataManager}