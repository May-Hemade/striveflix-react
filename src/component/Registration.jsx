import { Form, Col, Button } from "react-bootstrap"


const Registration  = () => {
    
    const [registerForm, setRegisterForm] = useState(registerForm: {    })
    
    
    
    return (
    <Form className='w-50'>
        <Form.Row>
            <Form.Group as={Col}  controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name..." />
            </Form.Group>

            <Form.Group as={Col}  controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control placeholder="surname..." />
            </Form.Group>
        </Form.Row>
        <Form.Group  controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
        </Form.Row>

        {/* <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group> */}

        {/* <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Form.Row> */}

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Agree terms and conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
 }
 
 export default Registration 