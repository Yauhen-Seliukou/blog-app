import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import WindowCreateOrChangeCard from "../components/WindowCreateOrChangeCard";
import './Card.scss';
import deletePost from "../store/actions/deletePost";

function BlogCard(props) {
    const {
        title, 
        date, 
        author,
        postID, 
        text, 
        theme
    } = props.post;
    
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.dataUser.isLogin);
    
    const postsUser = useSelector(state => state.dataUser.posts);
    localStorage.setItem('posts', JSON.stringify({ postsUser }));
    
    function onClickChange() {
        setModalShow(true);
    }

    function onClickRemove() {
        dispatch(deletePost(postID));
    }

    function onClickOpen() {
        history.push('/post');
        localStorage.setItem('postID', props.post.postID);
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title className="title-card" onClick={onClickOpen}>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <small className="text-muted">
                        <span>Date: {new Intl.DateTimeFormat('en-US', options).format(new Date(date))}</span><br />
                        <span>Author: {author}</span>
                    </small>
                   {isLogin ? 
                   <div className="button-position">
                        <button className="button-card" onClick={onClickChange}>Change</button>
                        <button className="button-card" onClick={onClickRemove}>Remove</button>
                    </div> 
                    : ''}
                </Card.Body>
            </Card>
            <WindowCreateOrChangeCard post={props.post} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default BlogCard;