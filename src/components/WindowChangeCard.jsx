import React from "react";
import { useSelector, useDispatch } from "react-redux";
import changePost from "../store/actions/changePost";
import saveNewPost from "../store/actions/saveNewPost";
import { Modal, Button } from "react-bootstrap";
import "./WindowChangeCard.scss";

function WindowChangeCard(props) {
   const {
        title, 
        date, 
        author, 
        text, 
        theme} =  props.post ? props.post : '';

        const author1 = useSelector(state => `${state.dataUser.user.name} ${state.dataUser.user.lastName}`);
        const authorID = useSelector(state => state.dataUser.user.id);
        const dispatch = useDispatch();

    function handleSave(e) {
        /*const form = e.target.parentNode.previousSibling;
        const newTitle = form.querySelector('.titlePost').value;
        const newText = form.querySelector('.bodyPost').value;
        const dispatch = useDispatch();
        dispatch(changePost(newTitle, newText));*/

        const form = e.target.parentNode.parentNode;
        
        const post = {
            title: form.querySelector('.titlePost').value,
            date: '10.12.2020',
            author: author1,
            authorID: authorID,
            postID: '10',
            text: form.querySelector('.bodyPost').value,
            theme: form.querySelector('.themePost').value
        };
        dispatch(saveNewPost(post));
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <textarea className="themePost" placeholder="Theme">{theme}</textarea>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <textarea className="titlePost" placeholder="Title">{title}</textarea>  
                    <textarea className="bodyPost" placeholder="Text">{text}</textarea>
                </form>               
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WindowChangeCard;