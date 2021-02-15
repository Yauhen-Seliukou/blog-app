import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, FormControl, FormLabel, Form } from "react-bootstrap";
import { changePost, saveNewPost } from "../../store/actions/postsActions";
import { selectUserName, selectUserId } from "../../store/selectors/UserSelectors";

import "./WindowCreateOrChangeCard.scss";

function WindowCreateOrChangeCard(props) {
    const dispatch = useDispatch();
    const { show, post, onClose } =  props;
    const initState = {
        title: post?.title || '',
        description: post?.description || '',
        categories: post?.categories || ''
    };
    const [formState, setFormState] = useState(initState);
    const author = useSelector(selectUserName);
    const authorID = useSelector(selectUserId);

    const handleTitleChange = (e) => {
        setFormState({...formState, title: e.target.value});
    }

    const handleDescriptionChange = (e) => {
        setFormState({...formState, description: e.target.value});
    }

    const handleCategoryChange = (e) => {
        const selectedValue = [...e.target.options].filter(x => x.selected).map(y => y.value);
        setFormState({...formState, categories: selectedValue});
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (post) {
            const updatedPost = {
                ...post,
                title: formState.title,
                description: formState.description,
                categories: formState.categories,
                dateUpdate: new Date()
            };
            dispatch(changePost(updatedPost));
        } else {   
            const post = {
                title: formState.title,
                date: new Date(),
                author: author,
                authorID: authorID,
                postID: Date.now(),
                description: formState.description,
                categories: formState.categories,
            };            
            dispatch(saveNewPost(post));
        }
        onClose();
    }

    return (
        <Modal
            show={show}
            onHide={onClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-create-change-window"
        >
            <Form onSubmit={handleSave}>
                <Modal.Header closeButton>
                    <b>{props.post ? 'Change post' : 'Create post'}</b>
                </Modal.Header>
                <Modal.Body>
                    <FormLabel className="title-label">Title</FormLabel>
                    <FormControl 
                        className="title-post" 
                        type="text" 
                        placeholder="Title" 
                        value={formState.title} 
                        onChange={handleTitleChange}
                        required 
                    />
                    <FormLabel className="title-label">Description</FormLabel>
                    <FormControl 
                        className="body-post"
                        as="textarea" 
                        rows={5}
                        placeholder="Text" 
                        value={formState.description}
                        onChange={handleDescriptionChange}
                        required
                    />
                    <FormLabel className="title-label">Categories</FormLabel>
                    <FormControl 
                        as="select" 
                        value={formState.categories}
                        onChange={handleCategoryChange}
                        multiple
                        required
                    >
                        <option>Sport</option>
                        <option>Work</option>
                        <option>Music</option>
                        <option>Game</option>
                        <option>Movie</option>
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="onSubmit">Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default WindowCreateOrChangeCard;