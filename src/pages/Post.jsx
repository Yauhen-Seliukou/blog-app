import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { Container } from "react-bootstrap";

function Post() {
    const postID = localStorage.getItem('postID');
    const post = useSelector(state => state.dataUser.posts.find(post => post.postID === postID));
    return (
        <Container>
            <Card post={post}></Card>
        </Container>
    );
}

export default Post;