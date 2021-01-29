import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from "../components/Card"
import './Home.scss';
import { useSelector } from "react-redux";

function Home() {
    const posts = useSelector(state => state.dataUser.posts);
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <ul>
                        {posts ? posts.map(post => <li key={post.postID}><Card post={post}/></li>) : ''}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;