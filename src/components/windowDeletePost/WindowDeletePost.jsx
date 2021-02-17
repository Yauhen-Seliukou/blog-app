import React from "react";
import { Modal, Button } from "react-bootstrap";

import "./WindowDeletePost.scss";

function WindowDeletePost({show, onDelete, onClose}) {
    return (
        <Modal 
            show={show}
            onClose={onClose}
            onDelete={onDelete}
        >
            <Modal.Header>
                <Modal.Title>Delete post</Modal.Title>
            </Modal.Header>
            <Modal.Body className="message-text">Are you sure you want to delete the post?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No</Button>
                <Button variant="primary" onClick={onDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WindowDeletePost;