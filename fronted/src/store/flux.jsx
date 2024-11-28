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
      },

      login: async (credentials) => {
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
          });
          
          const data = await response.json();
          
          if (response.ok) {
            // Guardar token y datos de usuario
            localStorage.setItem('token', data.token);
            
            setStore({
              user: {
                id: data.user.id,
                email: data.user.email,
                role: data.user.role,
                name: data.user.name
              },
              token: data.token,
              isAuthenticated: true,
              userRole: data.user.role,
            });
            
            return {
              ...data.user,
              token: data.token
            };
          } else {
            throw new Error(data.message || 'Error de inicio de sesión');
          }
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
     },
    }
  }
  
};

export default getState;
