import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddInventory from './components/AddInventory/AddInventory';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MyItems from './components/HomeSections/MyItems/MyItems';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import ProceedMyItems from './components/ProceedMyItems/ProceedMyItems';
import Selected from './components/Selected/Selected';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        {/* <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route> */}
        {/* <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <Selected></Selected>
          </RequireAuth>
        }></Route>
        <Route path="/proceeditem/:inventoryId" element={
          <RequireAuth>
            <ProceedMyItems></ProceedMyItems>
          </RequireAuth>
        }></Route>
        <Route path="/addinventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/manageinventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/itemlist" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        {/* <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route> */}
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
