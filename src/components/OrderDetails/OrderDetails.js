import React from 'react';
import { Button, Card } from 'react-bootstrap';


const OrderDetails = (props) => {
    const user = props.user;
    const { name, price, quality, imageURL, orderTime } = user;

    return (
        <div>
            <Card >
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>quality: {quality}</Card.Text>
                    <Card.Text>price: {price}</Card.Text>
                    <Button variant="primary">{orderTime}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderDetails;