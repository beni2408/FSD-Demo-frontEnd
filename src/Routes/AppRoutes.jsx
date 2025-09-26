import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="text-4xl font-bold">Home Page</div>}
      />
    </Routes>
  );
};

export default AppRoutes;
