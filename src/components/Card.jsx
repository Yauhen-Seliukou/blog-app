import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
        theme} = props.post;
    
    const [modalShow, setModalShow] = React.useState(false);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();

    function onClickChange(e) {
        e.preventDefault();
        setModalShow(true);
    }

    function onClickRemove() {
        dispatch(deletePost(postID));
    }

    return (
        <div>
            <Card>
                <Card.Header>{theme}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <footer className="blockquote-footer">
                        <span className="date-card">{new Intl.DateTimeFormat('en-US', options).format(new Date(date))}</span><br />
                        author: {author} 
                    </footer>
                    <div className="buttonPosition">
                        <Card.Link onClick={onClickChange} href="#">Change</Card.Link>
                        <Card.Link onClick={onClickRemove}  href="#">Remove</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <WindowCreateOrChangeCard post={props.post} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default BlogCard;