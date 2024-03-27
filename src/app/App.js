import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from '../pages/productListPage';
import UserPage from "../pages/userPage";
import ProDetailsPage from "../pages/productDetailsPage";
import CategoryListPage from "../pages/categoryListPage";
import CategoryProducts from "../pages/categoryProPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to display product list page */}
        <Route path="/" element={<ProductPage />} />
        {/* Route to display product details page */}
        <Route path="/proDetails/:productId" element={<ProDetailsPage />} />
        {/* Route to display category list page */}
        <Route path="/category" element={<CategoryListPage />} />
        {/* Route to display category products page */}
        <Route path="/categories/:categoryId" element={<CategoryProducts />} />
        {/* Route to display user page */}
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
