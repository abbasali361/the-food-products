import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
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
            {
                order.map(user=> <OrderDetails key={user.id} user={user}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;