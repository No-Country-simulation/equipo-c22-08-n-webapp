
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '@/components/context/AuthContext';

export const ProtectedRoute = ({ 
  allowedRoles = ['admin', 'shelter', 'user'] 
}) => {
  const { state } = useAuth();

  // Check if user is authenticated
  if (!state.isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  // Check if user has allowed role
  if (state.user && !allowedRoles.includes(state.user.role)) {
    // Redirect to unauthorized page or home if role is not allowed
    return <Navigate to="/" replace />;
  }

  // Render child routes if authenticated and role is allowed
  return <Outlet />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string)
};

// Helper component for role-based access
export const RoleBasedAccess = ({ children, allowedRoles = ['admin', 'shelter', 'user'] }) => {
  const { state } = useAuth();

  // Check if user has allowed role
  if (state.user && !allowedRoles.includes(state.user.role)) {
    return null; // Or you could return a "No access" component
  }

  return <>{children}</>;
};

RoleBasedAccess.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string)
};