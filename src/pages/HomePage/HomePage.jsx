import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPost, selectUserPost, selectIsStatusLoading } from "../../store/selectors/PostSelectors";
import { selectUserId } from "../../store/selectors/UserSelectors";
import fetchPosts from "../../store/actions/fetchPosts";
import { Container, Col, Row } from 'react-bootstrap';
import Post from "../../components/Post/Post";
import UsersPanel from "../../components/UsersPanel/UsersPanel";
import WindowCreateOrChangeCard from "../../components/WindowCreateCangeCard/WindowCreateOrChangeCard";

import './HomePage.scss';


function Home() {
    const dispatch = useDispatch();
    const [isModalShow, setModalShow] = useState(false);
    const [isOnlyMyPosts, setOnlyMyPosts] = useState(false);
    const posts = useSelector(isOnlyMyPosts ? selectUserPost : selectAllPost);
    const userId = useSelector(selectUserId);
    const loading = useSelector(selectIsStatusLoading);

    const handleClickNewPost = () => {
        setModalShow(true);
    };

    const handleChangeCheckbox = (e) => {
        setOnlyMyPosts(e.target.checked);
    };

    useEffect(() => dispatch(fetchPosts()), [dispatch]);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={9} lg={10} md={11} sm={12} xs={12}>
                    {userId && (<UsersPanel 
                                    handleChangeCheckbox={handleChangeCheckbox}
                                    handleClickNewPost={handleClickNewPost} 
                                />)
                    }                    
                    {loading ? <div className="message">Loading...</div>
                            : (posts.length ? posts.map(post => <Post post={post} key={post.postID} />) 
                                            : <div className="message">Your posts were not found.</div>)
                    }
                    {isModalShow && <WindowCreateOrChangeCard show={isModalShow} onClose={() => setModalShow(false)}/>}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;