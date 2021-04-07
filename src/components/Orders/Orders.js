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
        <div>
            <div>
                <h1>Hi... {loggedInUser.name} Welcome!!!!</h1>
                <p>Email: {loggedInUser.email}</p>
            </div>
            {
                order.map(user=> <OrderDetails key={user.id} user={user}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;