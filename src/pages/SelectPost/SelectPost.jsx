import React from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';
import DetailedPost from "../../components/DetailedPost/DetailedPost";
import { selectPostById, selectAllPost } from "../../store/selectors/PostSelectors";

import "./SelectPost.scss";

const SelectPost = (props) => {
    const post = useSelector(state => selectPostById(state, +props.match.params.postID));

    const postsUser = useSelector(selectAllPost);
    localStorage.setItem('posts', JSON.stringify({ postsUser }));

    return (
        <Container className="wrapper-container">
            <Row className="justify-content-center wrapper-container">
                <Col xl={9} lg={10} md={11} sm={12} xs={12} className="wrapper-container">
                    {post ? <DetailedPost post={post} /> : <div className="not-posts">The requested post was not found.</div>}
                </Col>
            </Row>
        </Container>
    );
}

export default SelectPost;