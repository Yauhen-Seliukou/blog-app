import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, selectIsStatusLoading } from "../../store/selectors/PostSelectors";
import fetchPosts from "../../store/actions/fetchPosts";
import { Container, Col, Row } from 'react-bootstrap';
import DetailedPost from "../../components/DetailedPost/DetailedPost";

import "./PostPage.scss";

const PostPage = (props) => {
    const post = useSelector(state => selectPostById(state, +props.match.params.postID));
    const loading = useSelector(selectIsStatusLoading);
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchPosts()), [dispatch]);

    return (
        <Container className="wrapper-container">
            <Row className="justify-content-center wrapper-container">
                <Col xl={9} lg={10} md={11} sm={12} xs={12} className="wrapper-container">
                    {loading ? <div className="message">Loading...</div> 
                            : (post ? <DetailedPost post={post} /> 
                                    : <div className="message">The requested post was not found.</div>)
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default PostPage;