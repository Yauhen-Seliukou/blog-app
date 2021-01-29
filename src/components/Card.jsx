import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import WindowChangeCard from "../components/WindowChangeCard";
import './Card.scss';

function BlogCard(props) {
    const {
        title, 
        date, 
        author, 
        text, 
        theme} = props.post;
    
    const [modalShow, setModalShow] = React.useState(false);

    function onClickChange(e) {
        e.preventDefault();
        
    }

    return (
        <Card>
            <Card.Header>{theme}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <footer className="blockquote-footer">
                    <span className="date-card">{date}</span><br />
                    author: {author} 
                </footer>
                <div className="buttonPosition">
                    <Card.Link onClick={onClickChange} href="#">Change</Card.Link>
                    <Card.Link href="#">Remove</Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;