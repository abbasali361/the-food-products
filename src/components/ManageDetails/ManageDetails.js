import React, { useState } from "react";
import { MdDelete, MdRemove } from "react-icons/md";

const ManageDetails = (props) => {
  const products = props.products;
  const { name, quality, price, imageURL, _id } = products;
  const [updateEvent, setUpdateEvent] = useState({});
  console.log("get delete ", updateEvent);
  const handleDeleteProduct = (id) => {
    fetch(`https://the-food-store.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setUpdateEvent(result);
        if (result) {
          alert("Successfully Done");
        }
      });
  };
  return (
    <div class="row justify-content-md-center">
      <div class="col col-lg-2">
        <thead class="bg-info">
          <tr>Product Name: {name} </tr>
          <tr>Product quality: {quality}</tr>
          <tr>Product Price : $ {price}</tr>
        </thead>
        <tr>
          <td><button class="btn btn-outline-success" onClick={() => handleDeleteProduct(_id)}><MdDelete /></button></td>
        </tr>
      </div>
    </div>

  );
};

export default ManageDetails;
