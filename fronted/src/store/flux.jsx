import { useFetch } from "../hooks/useFetch.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     pets:[],
     users:[],
    },
    actions: {
      getpets: (src)=>{
        setStore({...pets,"pets":useFetch(src)})
      },
      getUser: (src)=>{
        setStore({...users,"users":useFetch(src)})
      }
    }
  };
};

export default getState;
