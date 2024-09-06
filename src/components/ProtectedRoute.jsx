// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming you're using a context for authentication

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Use your authentication logic to check if the user is logged in

  return currentUser ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
