import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from '../App';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<App />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
