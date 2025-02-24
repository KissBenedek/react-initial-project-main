import { Button, Card, CardText, ListGroup } from 'react-bootstrap';

const CardPage = () => {
    return (
        <Card style={{ width: '400px', height: '280px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Card.Header style={{ textAlign: 'center', fontSize: '22px' }}>Labrador</Card.Header>
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '35px' }}>
                    $15/mo
                </Card.Title>
                <Card.Text style={{ textAlign: 'center', marginBottom: '0' }}>
                    Unlimited Matches
                </Card.Text>
                <Card.Text style={{ textAlign: 'center', marginBottom: '0' }}>
                    Unlimited Messages
                </Card.Text>
                <Card.Text style={{ textAlign: 'center', marginBottom: '0' }}>
                    Unlimited App Usage
                </Card.Text>
                <Button
                    style={{
                        backgroundColor: 'black',
                        marginTop: '15px',
                        height: '50px',
                        width: '360px',
                        color: 'white',
                    }}
                >
                    Get Started
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardPage;
