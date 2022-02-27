import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addpost, deletePost, getpost } from '../../redux/actions/postActions';
import './Post.css'
import Update from './Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        title: "",
        paragraph: "",
    });
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addpost(post))
        console.log(`post added`);
        toast.success("Your Post has been added")
    };

    const isPosted = useSelector(state => state.PostReducer.isPosted);
    const posts = useSelector(state => state.PostReducer.post);
    const isLoad = useSelector(state => state.PostReducer.isLoad);
    const isUpdated = useSelector(state => state.PostReducer.isUpdated);
    useEffect(() => {
      dispatch(getpost())
    }, [dispatch, isPosted])

    

    
    
    
    return (
        <div className='main-f'>
            <ToastContainer />
            <h1 className='title'>Community Post Section</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" required={true} value={post.title} onChange={handleChange} />
                <label>Post Content</label>
                <textarea type="text" name="paragraph" required={true} value={post.paragraph} onChange={handleChange}/>
                <button type='Submit'>Add Post</button>
            </form>
            <div className='main-item'>
                {(isLoad) ? (<h1>⌛Loading⌛</h1>) : (posts.map(item => {
                    return (
                        <div className='item' key={item._id}>   
                            <button className='btn11' onClick={() => { dispatch(deletePost(item._id)); dispatch(getpost()) }}>X</button>
                            <h1>{item.title}</h1>
                            <p>{item.paragraph}</p>
                            <Update key={item._id} posts={item}/>
                        </div>
                    )
                }))}
                
            </div>
        </div>
    )
}

export default Post;