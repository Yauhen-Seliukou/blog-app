import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from "../components/Card";
import './Home.scss';
import posts from "../mocks/posts";

function FirstPage() {
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