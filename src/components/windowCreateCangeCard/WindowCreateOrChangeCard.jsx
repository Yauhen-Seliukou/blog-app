import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import changePost from "../../store/actions/changePost";
import saveNewPost from "../../store/actions/saveNewPost";
import { Modal, Button, FormControl, FormLabel, Form } from "react-bootstrap";
import { getUserName, getUserId } from "../../store/selectors/getUserData";
import "./WindowCreateOrChangeCard.scss";

function WindowCreateOrChangeCard(props) {
    const { post, onHide } =  props;
    const initState = {
        title: post?.title || '',
        description: post?.description || '',
        category: post?.category || ''
    };
    const [formState, setFormState] = useState(initState);
    const author = useSelector(state => getUserName(state));
    const authorID = useSelector(state => getUserId(state));
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
        setFormState({...formState, title: e.target.value});
    }

    const handleDescriptionChange = (e) => {
        setFormState({...formState, description: e.target.value});
    }

    const handleCategoryChange = (e) => {
        setFormState({...formState, category: e.target.value});
    }

    const handleSave = (e) => {
        e.preventDefault();
        onHide();
        if (post) {
            const updatedPost = {
                ...post,
                title: formState.title,
                description: formState.description,
                category: formState.category,
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
                category: formState.category
            };
            dispatch(saveNewPost(post));
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
                    <FormLabel className="title-label">Categoty</FormLabel>
                    <FormControl 
                        as="select" 
                        value={formState.category}
                        onChange={handleCategoryChange}
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