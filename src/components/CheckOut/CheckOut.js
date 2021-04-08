import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
const CheckOut = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://the-food-store.herokuapp.com/checkOut/${id}`)
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


    fetch("https://the-food-store.herokuapp.com/addOrder", {
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
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
      <h1>{loggedInUser.name}</h1>
      <table class="table table-bordered table-success">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">quality</th>
            <th scope="col">Price</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{quality}</td>
            <td>$ {price}</td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Total</td>
            <td>$ {price}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-outline-success" onClick={handleCheckOut}>Check Out</button>
      </div>
    </div>
  );
};

export default CheckOut;
