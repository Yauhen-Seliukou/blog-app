import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Nav, Container, Card } from 'react-bootstrap';
import { useSelector, useDispatch} from "react-redux";
import fetchLogin from "../store/reducers/fetchLogin";
import { getDataAuthorization } from "../store/selectors/getDataAuthorization";
import './Login.scss';

function Login() {
    const history = useHistory();
    const { page, error } = useSelector(state => getDataAuthorization(state));
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({});
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    
    const handleChangeEmail = (e) => {
        setLoginForm({ ...loginForm, email: e.target.value });
    }

    const handleChangePassword = (e) => {
        setLoginForm({ ...loginForm, password: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchLogin(loginForm.email, loginForm.password));
        history.push(page);
    }

    const handleClickClear = (e) => {
        emailInput.current.value = '';
        passwordInput.current.value ='';
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl="6" lg="6" md="8" sm="11" xs="12">
                    <Card className="login">
                        <h3 className="title-form">Enter your login details</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email"  
                                    placeholder="email@example.com" 
                                    required
                                    onChange={handleChangeEmail}
                                    ref={emailInput}
                                />
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="password" 
                                    required 
                                    onChange={handleChangePassword}
                                    ref={passwordInput}    
                                />
                            </Form.Group>
                            
                            <div className="error-login">{error}</div>
                            
                            <Nav className="justify-content-center">
                                <Button className="button-form" type="submit">Login</Button>
                                <Button onClick={handleClickClear}className="button-form" type="button">Clear</Button>
                            </Nav>
                        </Form>
                    </Card>   
                </Col> 
            </Row> 
        </Container>
    );
}

export default Login;