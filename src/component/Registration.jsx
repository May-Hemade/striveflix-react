import { Form, Col, Button, Alert } from "react-bootstrap"
import { useState } from "react";
import useForm from "react-hook-form";
import React, { useRef } from "react";

const Registration  = () => {
    
    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");

    const [registerForm, setRegisterForm] = useState({
        registerForm: {
            Name: '',
            Surname: '',
            Email: '',
            Password: '',
            },
    })
    
    // const [validated, setValidated] = useState(false);
     
    const [submited, setSubmited] = useState(false)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    
    const handleSubmit = (e) => {
        setRegisterForm({
            Name: name, 
            Surname: surname,
            Email: email,
            Password: password1
        })
        
        setSubmited(true)
        
    };

    
    
    return (
        <>
    <Form className='w-50' onsubmit={handleSubmit(e)}>
        <Form.Row>
            <Form.Group as={Col}  controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e => setName(e.currentTarget.value))} placeholder="name..." minlength="2"/>
            </Form.Group>

            <Form.Group as={Col}  controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control placeholder="surname..." minlength="3"  value={surname} onChange={(e => setSurname(e.currentTarget.value))}/>
            </Form.Group>
        </Form.Row>
        <Form.Group  controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e => setEmail(e.currentTarget.value))}/>
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" pattern={(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}} /* ref={register({
                required: "You must specify a password",
                pattern= (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
                
                })} */ value={password1} onChange={(e => setPassword1(e.currentTarget.value))} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password_repeat" type="password" placeholder="Confirm Password"/*  ref={register({
                validate: value =>
                    value === password.current || "The passwords do not match"
             })} */ value={password2} onChange={(e => setPassword2(e.currentTarget.value))}/>
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

        <Button disabled={password1 === password2 ? (false):(true)} variant="primary" type="submit">
            Submit
        </Button>
        
    </Form>
    {
        Submited && (
            <Alert variant="success">{registerForm}</Alert>
        )
    }
    </>
    )
 }
 
 export default Registration 