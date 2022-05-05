import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';

import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';

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
        
        {/* <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route> */}
        {/* <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/manageservice" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route> */}
        <Route path="/itemList" element={
          <RequireAuth>
            <ItemList></ItemList>
          </RequireAuth>
        }></Route>
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
