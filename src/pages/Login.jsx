import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Nav, Container } from 'react-bootstrap';
import { useSelector, useDispatch} from "react-redux";
import fetchQuote from "../store/reducers/fetchQuote";
import './Login.scss';

function Login() {
    const history = useHistory();
    let page = useSelector(state => state.dataUser.page);
    let error = useSelector(state => state.dataUser.error);
    const dispatch = useDispatch();
    
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        dispatch(fetchQuote(email, password));
        history.push(page);
    }

    function handleClickClear(e) {
        const form = e.target.closest('Form');
        form.querySelector('[type=email]').value = '';
        form.querySelector('[type=password]').value = '';
    }

    return (
        <Container>
        <Row className="justify-content-center">
        <Col xl="5" lg="6" md="9" sm="11" xs="10">
            <h3 className="title-form">Enter your login details</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                    Email
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="email"  placeholder="email@example.com" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Password
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="password" required />
                    </Col>
                </Form.Group>
                
                <p className="error-login">{error}</p>
                
                <Nav className="justify-content-center">
                    <Button className="buttonForm" type="submit">login</Button>
                    <Button onClick={handleClickClear}className="buttonForm" type="button">clear</Button>
                </Nav>
            </Form>   
        </Col> 
        </Row> 
        </Container>
    );
}

export default Login;