const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // Global state variables
      user: null,
      pets: [],
      adoptions: [],
      events: [],
      
      // Authentication state
      isAuthenticated: false,
      token: null,
      
      // Permissions and roles
      userRoles: [],
      userPermissions: []
    },
    actions: {
      // Action to log in user
      login: (userData) => {
        const store = getStore();
        setStore({
          ...store,
          user: userData,
          isAuthenticated: true,
          token: userData.token,
          userRoles: userData.roles || [],
          userPermissions: userData.permissions || []
        });
      },
      
      // Action to log out user
      logout: () => {
        const store = getStore();
        setStore({
          ...store,
          user: null,
          isAuthenticated: false,
          token: null,
          userRoles: [],
          userPermissions: []
        });
      },
      
      // Action to update user profile
      updateProfile: (updatedProfile) => {
        const store = getStore();
        setStore({
          ...store,
          user: {
            ...store.user,
            ...updatedProfile
          }
        });
      },
      

      addPet: (pet) => {
        const store = getStore();
        setStore({
          ...store,
          pets: [...store.pets, pet]
        });
      },
      
      // Action to check if user has a specific role
      hasRole: (roleName) => {
        const store = getStore();
        return store.userRoles.some(role => role.name === roleName); 
      },   
      
      // Action to check if user has a specific permission
      hasPermission: (permissionName) => {
        const store = getStore();
        return store.userPermissions.some(permission => permission.name === permissionName);
      }
    }
  };
};      

export default getState;        