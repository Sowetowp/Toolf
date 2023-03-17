import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Add from "./Pages/Add";
import Admindisplay from "./Pages/Admindisplay";
import Adminsignin from "./Pages/Adminsignin";
import Adminsignup from "./Pages/Adminsignup";
import Customersignin from "./Pages/Customersignin";
import Customersignup from "./Pages/Customersignup";
import Oproducts from "./Pages/Oproducts";
import Orders from "./Pages/Orders";
import Updatepage from "./Pages/Updatepage";
import Userss from "./Pages/Users";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/asi" element={<Adminsignin/>}/>
        <Route path="/asu" element={<Adminsignup/>}/>
        <Route path="/csi" element={<Customersignin/>}/>
        <Route path="/csu" element={<Customersignup/>}/>
        <Route path="/update" element={<Updatepage/>}/>
        <Route path="/users" element={<Userss/>}/>
        <Route path="/adis" element={<Admindisplay/>}/>
        <Route path="/udis" element={<Oproducts/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/order" element={<Orders/>}/>
      </Routes>
    </Router>
  );
}

export default App;
