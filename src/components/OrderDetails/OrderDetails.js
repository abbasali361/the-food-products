import React from 'react';
import { Button, Card } from 'react-bootstrap';

const OrderDetails = (props) => {
    const user = props.user;
    const { name, price, quality, imageURL, email } = user;
    return (
        <div>

            <Card >
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderDetails;