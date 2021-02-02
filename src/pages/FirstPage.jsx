import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from "../components/Card";
import './Home.scss';
import posts from "../mocks/posts";
import { useDispatch } from "react-redux";
import addUserAndPostsInStore from "../store/actions/addUserAndPostsInStore";

function FirstPage() {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        const postsUser = JSON.parse(localStorage.getItem('posts'));
        const dispatch = useDispatch();
        dispatch(addUserAndPostsInStore(user, postsUser.postsUser));
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