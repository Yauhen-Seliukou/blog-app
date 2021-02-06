import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, FormCheck } from "react-bootstrap";
import Post from "../components/post/Post"
import WindowCreateOrChangeCard from "../components/windowCreateCangeCard/WindowCreateOrChangeCard";
import { getAllPosts, getUserPosts } from "../store/selectors/getPostData";
import { getUserId } from "../store/selectors/getUserData";
import './Home.scss';

function Home() {
    const [isModalShow, setModalShow] = useState(false);
    const [isOnlyMyPosts, setOnlyMyPosts] = useState(false);

    const userId = useSelector(state => getUserId(state));
    const posts = useSelector(state => isOnlyMyPosts ? getUserPosts(state, userId) : getAllPosts(state));

    const handleClick = () => {
        setModalShow(true);
    }

    const handleChangeCheckbox = (e) => {
        setOnlyMyPosts(e.target.checked);
    }

    return (
        <div>
            <span className="checbox-my-post">
                <FormCheck  
                    type="checkbox" 
                    label="Only my posts" 
                    inline
                    onChange={handleChangeCheckbox}
                />
            </span>
            <span className="btn-new-post">
                <Button 
                    variant="primary" 
                    onClick={handleClick}
                >
                    New post
                </Button>
            </span> 
            <ul>
                {posts.length ? posts.map(post => <li key={post.postID}><Post post={post}/></li>) 
                                                : <div className="not-posts">Your posts were not found.</div>}
            </ul>
            <WindowCreateOrChangeCard show={isModalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default Home;