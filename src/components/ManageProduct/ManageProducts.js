import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ManageDetails from '../ManageDetails/ManageDetails';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([])
    const url = `https://the-food-store.herokuapp.com/products`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManageProducts(data)
            })
    }, [])
    return (
        <div>
            <div>
                <Header></Header>
                <div>
                    {
                        manageProducts.map(pd => <ManageDetails key={pd._id} products={pd}></ManageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;