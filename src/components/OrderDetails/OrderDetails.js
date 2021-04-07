import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';

const OrderDetails = (props) => {
    const user = props.user;
    const { name, price, quality, imageURL, email } = user;
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    return (
        <div>
            <div>
                <h1>Hi... {loggedInUser.name} Welcome!!!!</h1>
                <p>Email: {loggedInUser.email}</p>
            </div>
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
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderDetails;