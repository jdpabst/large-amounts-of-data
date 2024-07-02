import {
 Route,
 Routes
} from "react-router-dom";

import App from './App';
import ProductPage from './Components/ProductPage';

function NavRouter() {
 return (
  <Routes>
   <Route
    path="/"
    element={<App />}
   />
   <Route
    path='/product-page'
    element={<ProductPage />}

   />

  </Routes>
 )
}

export default NavRouter;