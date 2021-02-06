import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import WindowCreateOrChangeCard from "../windowCreateCangeCard/WindowCreateOrChangeCard";
import './Post.scss';
import deletePost from "../../store/actions/deletePost";
import { getUserId } from "../../store/selectors/getUserData";
import { getAllPosts } from "../../store/selectors/getPostData";
import { getDataAuthorization } from "../../store/selectors/getDataAuthorization";
import formatDate from "../../services/formatDade";

function Post(props) {
    const {
        title, 
        date, 
        author,
        postID, 
        authorID,
        description
    } = props.post;
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [isModalShow, setModalShow] = useState(false);
    const userId = useSelector(state => getUserId(state));
    const { page } = useSelector(state => getDataAuthorization(state));
    const postsUser = useSelector(state => getAllPosts(state));
    localStorage.setItem('posts', JSON.stringify({ postsUser }));
    
    const onClickChange = () => {
        setModalShow(true);
    }

    const onClickRemove = () => {
        if (page === '/post') {
            history.push('/home');
        }
        dispatch(deletePost(postID));
    }

    const onClickOpen = () => {
        if (page !== '/post') {
            history.push('/post');
            localStorage.setItem('postID', postID);
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="title-card" onClick={onClickOpen}>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>                
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
            <WindowCreateOrChangeCard post={props.post} show={isModalShow} onHide={() => setModalShow(false)}/>
        </Card>
    );
}

export default Post;