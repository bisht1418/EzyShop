import React from 'react'
import { Route , Routes} from 'react-router-dom'
import AdminProducts from './AdminProducts'
import AdminAddProd from './AdminAddProd'
import AdminLogin from './AdminLogin'
import Cart from './Cart'
import Home from './Home'
import Login from "./Login";
import Payment from './Payment'
import PrivateRoute from "./PrivateRoute";
import Shoes from './Shoes'
import Signup from "./Signup";
import SingleProduct from './SingleProduct'
import MenShirt from "./MenShirt";
import WomenShoes from "./WomenShoes";
import PrivateRouteForAdmin from './PrivateRouteForAdmin'
import AdminUserData from './AdminUserData'
import AdminEditProd from './AdminEditProd'
import Thankyou from './ThankYou'






const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/adminLogin" element={<AdminLogin />}></Route>
            <Route path="/adminProducts" element={<PrivateRouteForAdmin><AdminProducts /></PrivateRouteForAdmin>}></Route>
            <Route path="/adminAddProd" element={<PrivateRouteForAdmin><AdminAddProd /></PrivateRouteForAdmin>}></Route>
            <Route path="/adminUserData" element={<PrivateRouteForAdmin><AdminUserData /></PrivateRouteForAdmin>}></Route>
            <Route path='/editProd/:id' element={<PrivateRouteForAdmin><AdminEditProd /></PrivateRouteForAdmin>}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
            <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>}></Route>
            <Route path="/shoes" element={<Shoes />}></Route>
            <Route path="/womenShoes" element={<WomenShoes />}></Route>
            <Route path="/menShirt" element={<MenShirt />}></Route>
            <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
            <Route path="/thankyou" element={<Thankyou/>} ></Route>
            <Route path="*" element={<h1 style={{"fontSize":"80px", "textAlign":"center"}}>Oops!!! 😕 Page Not Found</h1>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes