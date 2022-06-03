import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Header from './Shared/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/Login/RequireAuth';
import Orders from './Components/Orders/Orders';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Customize from './Components/Admin/Customize/Customize';
import Manage from './Components/Admin/Manage/Manage';

export const UserContext = createContext()
function App() {
  const [books, setBooks] = useState([]);
  const [logInUser, setLogInUser] = useState({});
  return (
    <div className="App">



      <Routes>
        <Route path='/home' element={<Home ></Home>}>

        </Route>

        <Route exact path='/' element={<Home ></Home>}>

        </Route>
        <Route path='/checkout/:id' element={<RequireAuth>
          <CheckOut />
        </RequireAuth>} />
        <Route path='/Order' element={<RequireAuth>
          <Orders />
        </RequireAuth>} />
        <Route path='/add' element={<RequireAuth>
          <AddProduct />
        </RequireAuth>} />
        <Route path='/customize' element={<RequireAuth>
          <Customize />
        </RequireAuth>} />
        <Route path='/manage' element={<RequireAuth>
          <Manage />
        </RequireAuth>} />

        <Route path='/login' element={<Login></Login>}>

        </Route>

      </Routes>


    </div>
  );
}

export default App;
