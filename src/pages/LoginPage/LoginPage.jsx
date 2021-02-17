import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import fetchLogin from "../../store/actions/fetchLogin";
import { selectLoginError, selectUserId } from "../../store/selectors/UserSelectors";
import { Form, FormGroup, FormControl, FormLabel, Col, Row, Button, Nav, Container, Card } from 'react-bootstrap';

import './LoginPage.scss';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(selectLoginError);
    const userId = useSelector(selectUserId);
    const [loginForm, setLoginForm] = useState({});

    useEffect(() => {
        userId && history.push('/');
    }, [history, userId]);
    
    const handleChangeEmail = (e) => {
        setLoginForm({ ...loginForm, email: e.target.value });
    };

    const handleChangePassword = (e) => {
        setLoginForm({ ...loginForm, password: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchLogin(loginForm));
    };

    const handleClickClear = () => {
        setLoginForm({email: '', password: ''});
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl="5" lg="5" md="7" sm="10" xs="12">
                    <Card className="login">
                        <h3 className="title-form">Enter your login details</h3>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup as={Row} controlId="formPlaintextEmail">
                                <FormLabel>Email</FormLabel>
                                <FormControl 
                                    type="email"
                                    value={loginForm.email}  
                                    placeholder="email@example.com" 
                                    required
                                    onChange={handleChangeEmail}
                                />
                            </FormGroup>

                            <FormGroup as={Row} controlId="formPlaintextPassword">
                                <FormLabel>Password</FormLabel>
                                <FormControl 
                                    type="password" 
                                    value={loginForm.password}
                                    placeholder="password" 
                                    required 
                                    onChange={handleChangePassword}   
                                />
                            </FormGroup>
                            
                            <div className="error-login">{error}</div>
                            
                            <Nav className="justify-content-center">
                                <Button className="button-form" type="submit">Login</Button>
                                <Button onClick={handleClickClear} className="button-form" type="button">Clear</Button>
                            </Nav>
                        </Form>
                    </Card>   
                </Col> 
            </Row> 
        </Container>
    );
}

export default Login;