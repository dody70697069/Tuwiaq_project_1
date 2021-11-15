import logo from "./logo.svg";
import Home from './component/Home';
import Wad from './component/Wad';
import Message from './component/Message';
import {Routes, Route } from 'react-router';
function App() {
  return (
    <div>
     <Routes>
          <Route path="/" element={ <Home />} exact />
          <Route exact path="/Message" element={<Message/>}>
          <Route path="/Wad/:id" element={<Wad/>} />
          </Route>
          {/* <Route path="/cart" element={<Cart />}/> */}
          {/* <Route path="/login" element={<Login/>}/> */}
    </Routes>


    </div>
  );
}

export default App;
