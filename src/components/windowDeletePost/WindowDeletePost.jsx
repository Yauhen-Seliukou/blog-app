import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./WindowDeletePost.scss";

function WindowDeletePost(props) {
    return (
        <Modal {...props}>
            <Modal.Body className="message-text">Are you sure you want to delete the post?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>No</Button>
                <Button variant="primary" onClick={props.onDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WindowDeletePost;