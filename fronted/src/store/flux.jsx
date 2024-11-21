import { useFetch } from "../hooks/useFetch.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     pets:[]
    },
    actions: {
      getpets: (src)=>{
        setStore({...pets,"pets":useFetch(src)})
      }
    }
  };
};

export default getState;
