import { Card, CardText, ListGroup } from 'react-bootstrap';

const CardPage = () => {
    return (
        <Card style={{ width: '200px', height: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Card.Header style={{ textAlign: 'center' }}>Labrador</Card.Header>
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>$15/mo</Card.Title>
                <Card.Text>Unlimited Matches</Card.Text>
                <Card.Text>Unlimited Messages</Card.Text>
                <Card.Text>Unlimited App Usage</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardPage;
