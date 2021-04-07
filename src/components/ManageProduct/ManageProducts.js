import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ManageDetails from '../ManageDetails/ManageDetails';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([])
    const url = `http://localhost:6600/products`;
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
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product quality</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        manageProducts.map(pd => <ManageDetails key={pd._id} products={pd}></ManageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;