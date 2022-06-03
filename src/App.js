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

export const UserContext = createContext()
function App() {
  const [books, setBooks] = useState([]);
  const [logInUser, setLogInUser] = useState({});
  return (
    <div className="App">
   

<Header></Header>
  <Routes>
      <Route path = '/home' element={<Home ></Home>}>
        
      </Route>

      <Route exact path = '/' element={<Home ></Home>}>
        
      </Route>
{/* 
      <PrivateRoute path = '/admin'>
        <Admin></Admin>
      </PrivateRoute>

      <PrivateRoute path = '/customize'>
        <Customize></Customize>
      </PrivateRoute>
      
      <PrivateRoute path = '/order'>
        <Order></Order>
      </PrivateRoute>

      <PrivateRoute path = '/add'>
        <Add></Add>
      </PrivateRoute>

      <PrivateRoute path = '/manage'>
        <Manage books={books}></Manage>
      </PrivateRoute>

      <PrivateRoute path = '/checkout/:_id'>
        <CheckOut></CheckOut>
      </PrivateRoute> */}
      <Route path='/checkout/:id' element={<RequireAuth>
        <CheckOut/>
      </RequireAuth>}/>

      <Route path = '/login' element={<Login></Login>}>
        
      </Route>

      {/* <Route path = '/sidenav'>
        <SideNav></SideNav>
      </Route> */}

      {/* <Route path = '/books'>
        <Books books={books}></Books>
      </Route> */}

      {/* <Route path = '*'>
        <NotFound></NotFound>
      </Route> */}

  </Routes>


    </div>
  );
}

export default App;
