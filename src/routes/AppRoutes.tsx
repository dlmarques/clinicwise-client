import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from '../App';
import Login from '../modules/login/Login';
import ErrorPage from '../modules/error-page/ErrorPage';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/ops" element={<ErrorPage />} />
        <Route path="/dashboard/*" element={<App />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
