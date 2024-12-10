import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: {
    roles: [],
    permissions: []
  }
};

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          roles: action.payload.roles || [],
          permissions: action.payload.permissions || []
        }
      };
    case 'LOGOUT':
      return { ...initialState };
    case 'UPDATE_ROLES':
      return {
        ...state,
        user: {
          ...state.user,
          roles: action.payload
        }
      };
    case 'UPDATE_PERMISSIONS':
      return {
        ...state,
        user: {
          ...state.user,
          permissions: action.payload
        }
      };
    default:
      return state;
  }
}

// Create context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Helper function to check if user has a specific role
export const hasRole = (state, roleToCheck) => {
  return state.user.roles.some(role => role.name === roleToCheck);
};

// Helper function to check if user has a specific permission
export const hasPermission = (state, permissionToCheck) => {
  return state.user.permissions.some(permission => permission.name === permissionToCheck);
};

// Example of how to use in a component:
/*
function ExampleComponent() {
  const { state, dispatch } = useUser();

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        id: '123',
        username: 'johndoe',
        email: 'john@example.com',
        roles: [{ id: '1', name: 'ADMIN' }],
        permissions: [{ id: '1', name: 'CREATE_POST' }]
      }
    });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Check roles and permissions
  const isAdmin = hasRole(state, 'ADMIN');
  const canCreatePost = hasPermission(state, 'CREATE_POST');

  return (
    <div>
      {state.isAuthenticated ? 'Logged In' : 'Logged Out'}
    </div>
  );
}
*/

// Wrap your app with UserProvider in the main App or _app.jsx
/*
function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
*/