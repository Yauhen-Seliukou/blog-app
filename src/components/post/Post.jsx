import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import WindowCreateOrChangeCard from "../windowCreateCangeCard/WindowCreateOrChangeCard";
import WindowDeletePost from "../windowDeletePost/WindowDeletePost";
import './Post.scss';
import deletePost from "../../store/actions/deletePost";
import { getUserId } from "../../store/selectors/getUserData";
import { getAllPosts } from "../../store/selectors/getPostData";
import formatDate from "../../services/formatDade";
import checkDescriptionLength from "../../services/checkDescriptionLength";

function Post(props) {
    const {
        title, 
        date, 
        author,
        postID, 
        authorID,
        description
    } = props.post;

    const isSelectPost = props?.isSelectPost || '';
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [isModalShow, setModalShow] = useState(false);
    const [isModalDeleteShow, setModalDeleteShow] = useState(false);
    const userId = useSelector(state => getUserId(state));
    const postsUser = useSelector(state => getAllPosts(state));
    localStorage.setItem('posts', JSON.stringify({ postsUser }));
    
    const onClickChange = () => {
        setModalShow(true);
    }

    const onClickRemove = () => {
        setModalDeleteShow(true);
    }

    const removePost = () => {
        dispatch(deletePost(postID));
    }

    const onClickOpen = () => {
        history.push('/post');
        localStorage.setItem('postID', postID); 
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="title-card" onClick={onClickOpen}>{title}</Card.Title>
                <Card.Text>{isSelectPost ? description : checkDescriptionLength(description)}</Card.Text>                
                <small className="text-muted">
                    <span>Date: {formatDate(date)}</span><br />
                    <span>Author: {author}</span>
                </small>            
                {authorID === userId ? 
                <div className="button-position">
                    <button className="button-card" onClick={onClickChange}>Change</button>
                    <button className="button-card" onClick={onClickRemove}>Remove</button>
                </div> 
                : ''}
            </Card.Body>
            <WindowCreateOrChangeCard 
                post={props.post} 
                show={isModalShow} 
                onHide={() => setModalShow(false)} 
            />
            <WindowDeletePost 
                show={isModalDeleteShow} 
                onDelete={() => removePost()} 
                onClose={() => setModalDeleteShow(false)} 
            />
        </Card>
    );
}

export default Post;