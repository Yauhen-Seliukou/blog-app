import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchPosts from "../store/reducers/fetchPosts";
import { getAllPosts } from "../store/selectors/getPostData";
import Post from "../components/post/Post";
import './Home.scss';

function FirstPage() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchPosts()), []);
    const posts = useSelector(state => getAllPosts(state));
    
    return (
        <div>           
            <ul>
                {posts ? posts.map(post => <li key={post.postID}><Post post={post}/></li>) : ''}
            </ul>
        </div>
    );
    
}

export default FirstPage;