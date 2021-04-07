import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
const CheckOut = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:6600/checkOut/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, [id]);

  const { name, quality, price, _id } = product;
  const handleCheckOut = () => {
    const orderDetails = {
      ...loggedInUser,
      name: name,
      price: price,
      quality: quality,
      orderTime: new Date(),
    };


    fetch("http://localhost:6600/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Successfully Done");
        }
      });
  };

  return (
    <div>
      <h1>{loggedInUser.name}</h1>
      <table>
        <thead>
          <tr className="row">
            <th className="col-md-3">name</th>
            <th className="col-md-3">quality</th>
            <th className="col-md-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{quality}</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleCheckOut}>Check Out</button>
    </div>
  );
};

export default CheckOut;
