import React from "react";
import { useSelector, useDispatch } from "react-redux";
import changePost from "../store/actions/changePost";
import saveNewPost from "../store/actions/saveNewPost";
import { Modal, Button } from "react-bootstrap";
import "./WindowCreateOrChangeCard.scss";

function WindowCreateOrChangeCard(props) {
   const {
        title, 
        author,
        authorID,
        postID,
        text, 
        theme
    } =  props.post ? props.post : '';

    const author1 = useSelector(state => `${state.dataUser.user.name} ${state.dataUser.user.lastName}`);
    const authorID1 = useSelector(state => state.dataUser.user.id);
    const dispatch = useDispatch();
    const currentDate = new Date();

    function handleSave(e) {
        const form = e.target.parentNode.parentNode;
        
        if (props.post) {
            const post = {
                title: form.querySelector('.titlePost').value,
                date: currentDate,
                author: author,
                authorID: authorID,
                postID: postID,
                text: form.querySelector('.bodyPost').value,
                theme: form.querySelector('.themePost').value
            };
            dispatch(changePost(post));
        } else {   
            const post = {
                title: form.querySelector('.titlePost').value,
                date: currentDate,
                author: author1,
                authorID: authorID1,
                postID: currentDate,
                text: form.querySelector('.bodyPost').value,
                theme: form.querySelector('.themePost').value
            };
            dispatch(saveNewPost(post));
        }
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <form onSubmit={handleSave}>
                <Modal.Header closeButton>
                    <textarea className="themePost" placeholder="Theme" required>{theme}</textarea>
                </Modal.Header>
                <Modal.Body>
                    <textarea className="titlePost" placeholder="Title" required>{title}</textarea>  
                    <textarea className="bodyPost" placeholder="Text" required>{text}</textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="onSubmit">Save</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default WindowCreateOrChangeCard;