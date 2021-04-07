import React from 'react';
import { Button, Card } from 'react-bootstrap';


const OrderDetails = (props) => {
    const user = props.user;
    const { name, price, quality, imageURL, email,orderTime } = user;
    
    return (
        <div>
            
            <Card >
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {quality}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {orderTime}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderDetails;