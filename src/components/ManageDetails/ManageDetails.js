import React, { useState } from "react";

const ManageDetails = (props) => {
  const products = props.products;
  const { name, quality,price,imageURL, _id } = products;
  const [updateEvent, setUpdateEvent] = useState({});
  console.log("get delete ", updateEvent);
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:6600/deleteProduct/${id}`, {
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
    <div>
      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{quality}</td>
            <td>{price}</td>
            <td>
              <button onClick={() => handleDeleteProduct(_id)}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageDetails;
