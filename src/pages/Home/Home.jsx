import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';
import Post from "../../components/Post/Post";
import UsersPanel from "../../components/UsersPanel/UsersPanel";
import WindowCreateOrChangeCard from "../../components/WindowCreateCangeCard/WindowCreateOrChangeCard";
import { selectAllPost, selectUserPost } from "../../store/selectors/PostSelectors";
import { selectUserId } from "../../store/selectors/UserSelectors";

import './Home.scss';

function Home() {
    const [isModalShow, setModalShow] = useState(false);
    const [isOnlyMyPosts, setOnlyMyPosts] = useState(false);

    const posts = useSelector(isOnlyMyPosts ? selectUserPost : selectAllPost);
    const userId = useSelector(selectUserId);

    const handleClickNewPost = () => {
        setModalShow(true);
    }

    const handleChangeCheckbox = (e) => {
        setOnlyMyPosts(e.target.checked);
    }

    const postsUser = useSelector(selectAllPost);
    localStorage.setItem('posts', JSON.stringify({ postsUser }));

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={9} lg={10} md={11} sm={12} xs={12}>
                    {userId ? 
                    <UsersPanel 
                        handleChangeCheckbox={handleChangeCheckbox}
                        handleClickNewPost={handleClickNewPost} 
                    />
                    : ''}
                    
                    {posts.length ? posts.map(post => <Post post={post} key={post.postID} />) 
                                  : <div className="not-posts">Your posts were not found.</div>}
                    <WindowCreateOrChangeCard show={isModalShow} onClose={() => setModalShow(false)}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;