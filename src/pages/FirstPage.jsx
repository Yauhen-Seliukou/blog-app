import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from "../components/Card";
import './Home.scss';
import posts from "../mocks/posts";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchQuote from "../store/reducers/fetchQuote";

function FirstPage() {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        const dispatch = useDispatch();
        dispatch(fetchQuote(user.email, user.password));
        const history = useHistory();
        history.push('/home');
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <ul>
                            {posts ? posts.map(post => <li key={post.postID}><Card post={post}/></li>) : ''}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default FirstPage;