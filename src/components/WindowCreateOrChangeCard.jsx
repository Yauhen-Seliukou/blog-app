import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import changePost from "../store/actions/changePost";
import saveNewPost from "../store/actions/saveNewPost";
import { Modal, Button, FormControl } from "react-bootstrap";
import "./WindowCreateOrChangeCard.scss";

function WindowCreateOrChangeCard(props) {
    const {
        post,
        onHide,
        show
    } =  props;
    const initState = {
        title: post?.title || '',
        text: post?.text || ''
    };
    const [formState, setFormState] = useState(initState);

    const author1 = useSelector(state => `${state.dataUser.user.name} ${state.dataUser.user.lastName}`);
    const authorID1 = useSelector(state => state.dataUser.user.id);
    const dispatch = useDispatch();

    const onTitleChange = (e) => {
        setFormState({...formState, title: e.target.value});
    }

    const onTextChange = (e) => {
        setFormState({...formState, text: e.target.value});
    }

    function handleSave(e) {
        e.preventDefault();
        const form = e.target.parentNode.parentNode;
        
        if (post) {
            const updatedPost = {
                ...post,
                title: form.querySelector('.title-post').value,
                text: form.querySelector('.body-post').value,
                //theme: form.querySelector('.theme-post').value
            };
            dispatch(changePost(updatedPost));
        } else {   
            const post = {
                title: form.querySelector('.title-post').value,
                date: new Date(),
                author: author1,
                authorID: authorID1,
                postID: Date.now(),
                text: form.querySelector('.body-post').value,
                //theme: form.querySelector('.theme-post').value
            };
            dispatch(saveNewPost(post));
        }
        onHide();
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
                    <b>{props.post ? 'Change post' : 'Create post'}</b>
                </Modal.Header>
                <Modal.Body>
                    <label className="title-label">Title</label>
                    <FormControl type="text" placeholder="Enter email" value={formState.title} onChange={onTitleChange} />
                    <input type="text" className="title-post" placeholder="Title" required />
                    <label className="title-label">Text</label>
                    <textarea className="body-post" placeholder="Text" required>{formState.text}</textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="onSubmit">Save</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default WindowCreateOrChangeCard;