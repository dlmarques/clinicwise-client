import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
