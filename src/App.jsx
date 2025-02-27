import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes.jsx"; // Import Routes File

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
