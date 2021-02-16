import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Badge } from 'react-bootstrap';
import WindowCreateOrChangeCard from "../WindowCreateCangeCard/WindowCreateOrChangeCard";
import WindowDeletePost from "../WindowDeletePost/WindowDeletePost";
import { deletePost } from "../../store/actions/postsActions";
import { selectUserId } from "../../store/selectors/UserSelectors";
import formatDate from "../../services/formatDade";
import getShortDescription from "../../services/getShortDescription";

import './Post.scss';

function Post(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        title, 
        date, 
        author,
        postID, 
        authorID,
        description,
        categories
    } = props.post;
    
    const [isModalShow, setModalShow] = useState(false);
    const [isModalDeleteShow, setModalDeleteShow] = useState(false);
    const userId = useSelector(selectUserId);
    
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
        history.push(`/post/${postID}`);
    }

    return (
        <Card className="wrapper-post">
            <Card.Body>
                <Card.Title className="title-post" onClick={onClickOpen}>{title}</Card.Title>
                <Card.Text>{getShortDescription(description)}</Card.Text>                
                               
                {categories.map(category => <Badge className="one-category" variant="info" key={category}>{category}</Badge>)}
                
                <small className="text-muted">
                    <div>Create: {formatDate(date, false)}</div>
                    <div>Author: {author}</div>
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
                onClose={() => setModalShow(false)} 
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