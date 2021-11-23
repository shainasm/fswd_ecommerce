import AdminPage from "./components/AdminPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Order from "./components/Order";
import MyOrders from "./components/MyOrders";
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer";
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return ( 
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<Products />} />
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
    <Footer />

  </div>
  );
}
 
export default App;