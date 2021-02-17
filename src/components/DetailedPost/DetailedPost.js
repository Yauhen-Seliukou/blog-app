import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/postsActions";
import { selectUserId } from "../../store/selectors/UserSelectors";
import formatDate from "../../services/formatDade";
import { Badge } from 'react-bootstrap';
import WindowCreateOrChangeCard from "../WindowCreateCangeCard/WindowCreateOrChangeCard";
import WindowDeletePost from "../WindowDeletePost/WindowDeletePost";

import './DetailedPost.scss';

const DetailedPost = ({post}) => {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const [isModalShow, setModalShow] = useState(false);
    const [isModalDeleteShow, setModalDeleteShow] = useState(false);
    const {
        title, 
        date,
        dateUpdate,
        author,
        postID, 
        authorID,
        description,
        categories
    } = post;
    
    const onClickChange = () => {
        setModalShow(true);
    };

    const onClickRemove = () => {
        setModalDeleteShow(true);
    };

    const removePost = () => {
        dispatch(deletePost(postID));
    };

    return (
        <div className="detailed-post">
            <div className="body-post">
                <h2 className="title-post">{title}</h2>
                <div className="category-post">
                    {categories.map(category => <Badge className="one-category" variant="info" key={category}>{category}</Badge>)}
                </div>
                <div className="description-post">{description}</div>                
            </div>
            <div className="bottom-post">
                <small className="text-muted">
                    <div>Created: {formatDate(date, true)}</div>
                    {dateUpdate ? <div>Update: {formatDate(dateUpdate, true)}</div> : ''}
                    <div>Author: {author}</div>
                </small>          

                {authorID === userId ? 
                <div className="button-post-wrapper">
                    <button className="button-post" onClick={onClickChange}>Change</button>
                    <button className="button-post" onClick={onClickRemove}>Remove</button>
                </div> 
                : null}
            </div>
            
            {isModalShow && <WindowCreateOrChangeCard 
                post={post} 
                show={isModalShow} 
                onClose={() => setModalShow(false)} 
            />}
            {isModalDeleteShow && <WindowDeletePost 
                show={isModalDeleteShow} 
                onDelete={() => removePost()} 
                onClose={() => setModalDeleteShow(false)} 
            />}
        </div>
    );
}

export default DetailedPost;