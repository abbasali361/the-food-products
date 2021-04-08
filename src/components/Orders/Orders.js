import React, { useEffect, useState,  useContext } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [order, setOrder]= useState([])
    useEffect(()=>{
        fetch(`https://the-food-store.herokuapp.com/getOrder`)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])
    return (
        <div class="row justify-content-md-center">
            <div>
                <h1>Hi... {loggedInUser.name} Welcome!!!!</h1>
                <p>Email: {loggedInUser.email}</p>
            </div>
            <div class="col col-lg-8">
            {
                order.map(user=> <OrderDetails key={user._id} user={user}></OrderDetails>)
            }
            </div>
           
        </div>
    );
};

export default Orders;