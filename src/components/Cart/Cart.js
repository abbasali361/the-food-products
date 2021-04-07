import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const Cart = (props) => {
  const product = props.product;
  const { name, price, imageURL, _id } = product;
  const history = useHistory();
  const handleBuyProduct = (id) => {
    history.push(`/checkOut/${id}`);
  };
  return (
    <div className="col-md-3">
      <Card>
        <Card.Img variant="top w-90" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Link to={`/checkOut/${_id}`}>
            <Button variant="primary" onClick={() => handleBuyProduct(_id)}>
            <MdShoppingCart/>  Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
