import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Card from "../components/Card"
import './Home.scss';
import { useSelector } from "react-redux";
import WindowCreateOrChangeCard from "../components/WindowCreateOrChangeCard";

function Home() {
    const posts = useSelector(state => state.dataUser.posts);
    const [modalShow, setModalShow] = useState(false);
    const user = useSelector(state => state.dataUser.user);

    function onClick() {
        setModalShow(true);
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <div className="post-params">
                        <label>
                            <input type="checkbox" />
                            <span className="checkbox-label">Only my post</span>
                        </label>
                        
                        <Button variant="primary" onClick={onClick}>New post</Button>
                    </div>
                    <ul>
                        {posts ? posts.map(post => <li key={post.postID}><Card post={post}/></li>) : ''}
                    </ul>
                </Col>
            </Row>

            <WindowCreateOrChangeCard show={modalShow} onHide={() => setModalShow(false)}/>
        </Container>
    );
}

export default Home;