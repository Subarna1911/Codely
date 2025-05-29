import axios from "axios";
const API_KEY  = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const headers = {
  Authorization: "bearer " + API_KEY ,
};

export const fetchMoviesFromApi = async (url,params) => {
  
    try{
        
        const {data} = await axios.get(BASE_URL + url, {
            headers,params
        });
    
        return data;
       

    }

    catch(error){
        console.error("error fetching movies from an api", error);
    }
};


