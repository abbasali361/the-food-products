
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Cart from '../Cart/Cart';


const Home = () => {
  document.title = "Home";

  const [products, setProducts] = useState([]);
  console.log("get products", products);
  const url = `https://the-food-store.herokuapp.com/products`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("get mongo", data);
      });
  }, []);
  return (
    <div>
      <div>
        {
          products.length === 0 && <Spinner animation="border" />
        }
      </div>
      <div className="row">
        {products.map((product) => (<Cart key={product._id} product={product}></Cart>))}
      </div>
    </div>
  );
};

export default Home;
