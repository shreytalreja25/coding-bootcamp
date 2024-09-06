import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // ThemeProvider for light/dark mode
import { AuthProvider } from './context/AuthContext'; // AuthProvider for managing user authentication
import CodingBootcamp from './pages/CodingBootcamp';
import UserProfile from './components/UserProfile';
import UserDashboard from './components/UserDashboard'; // User dashboard
import Header from './components/Header'; // Header component for navigation
import Layout from './components/Layout'; // Common layout for public routes
import NotFound from './pages/NotFound'; // Simple 404 page
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider> {/* Wrapping with AuthProvider for authentication */}
        <Router>
          {/* Add Header globally so it's visible on all routes */}
          <Header />
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Layout><CodingBootcamp /></Layout>} />
            <Route path="/profile" element={<Layout><UserProfile /></Layout>} />

            {/* Direct Route for Dashboard */}
            <Route path="/dashboard" element={<UserDashboard />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext'; // ThemeProvider for light/dark mode
// import { AuthProvider } from './context/AuthContext'; // AuthProvider for managing user authentication
// import CodingBootcamp from './pages/CodingBootcamp';
// import UserProfile from './components/UserProfile';
// import UserDashboard from './components/UserDashboard'; // User dashboard, protected route
// import ProtectedRoute from './components/ProtectedRoute'; // Wrapper for protected routes
// import Layout from './components/Layout'; // Common layout for public routes
// import NotFound from './pages/NotFound'; // Simple 404 page
// import './App.css';

// function App() {
//   return (
//     <ThemeProvider>
//       <AuthProvider> {/* Wrapping with AuthProvider for authentication */}
//         <Router>
//           <Routes>

//             {/* Public Routes with Layout */}
//             <Route path="/" element={<Layout><CodingBootcamp /></Layout>} />
//             <Route path="/profile" element={<Layout><UserProfile /></Layout>} />

//             {/* Protected Route for Dashboard */}
//             <Route 
//               path="/dashboard" 
//               element={
//                 <ProtectedRoute>
//                   <UserDashboard />
//                 </ProtectedRoute>
//               } 
//             />

//             {/* 404 Page */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default App;
