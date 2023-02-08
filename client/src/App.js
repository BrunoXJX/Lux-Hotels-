import {
BrowserRouter ,

Route,
Routes,

} from "react-router-dom";

import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel"
import Login from "./pages/login/Login";
import Signup from "./signup/Signup";


import Profile from "./components/profile/Profile";

import Forgot from "./components/forgot/Forgot";
import Forgotid from "./components/forgotid/Forgotid";
import EditUser from "./components/Edituser/EditUser";
import Listcity1 from "./pages/listcity/Listcity1";
import Listcity2 from "./pages/listcity/Listcity2 ";
import Listcity3 from "./pages/listcity/Listcity3";






function App() {
  return (


    <BrowserRouter>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/edituser" element={<EditUser/>} />

    
      <Route path="/hotels/:id" element={<Hotel/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />    
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgotid" element={<Forgotid/>}/>
      <Route path="hotels/viseu" element={<Listcity1/>}/>
      <Route path="hotels/porto" element={<Listcity2/>}/>
      <Route path="hotels/lisboa" element={<Listcity3/>}/>
  
      


     

    </Routes>


    </BrowserRouter>
    
  );
}

export default App;
