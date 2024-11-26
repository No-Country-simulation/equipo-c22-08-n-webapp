import { useFetch } from "../hooks/useFetch.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     pets:[],
     users:[],
     selectedPet:[id]
    },
    actions: {
      getpets: (src)=>{
        setStore({...pets,"pets":useFetch(src)})
      },
      getUser: (src)=>{
        setStore({...users,"users":useFetch(src)})
      },
      setPet: (id)=>{
        setStore({"selectedPet":id})
      }
    }
  };
};

export default getState;
