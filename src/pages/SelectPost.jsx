import React from "react";
import { useSelector } from "react-redux";
import Post from "../components/post/Post";
import { getPostsId } from "../store/selectors/getPostData";
import "./SelectPost.scss";

function SelectPost() {
    const post = useSelector(state => getPostsId(state, +localStorage.getItem('postID')));

    return (
        <div className="select-post">
            {post ? <Post post={post} /> : ''}
        </div>
        
    );
}

export default SelectPost;