import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProducts from './components/AddProducts/AddProducts';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import ManageProduct from './components/ManageProduct/ManageProducts';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import TopHeader from './components/TopHeader/TopHeader'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <TopHeader></TopHeader>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRouter path="/order">
              <Orders></Orders>
            </PrivateRouter>
            <PrivateRouter path="/admin">
              <Admin></Admin>
            </PrivateRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRouter path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRouter>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
          </Switch>

        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
