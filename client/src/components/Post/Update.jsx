import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../redux/actions/postActions';

const Update = ({ posts }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(posts.title);
    const [paragraph, setParagraph] = useState(posts.paragraph);
    const [show, setShow] = useState(false);
    return (
        <div>
            <button className='update-btn' onClick={() => setShow(true)}>update</button>
            {show ?
            <div className='up-div'>
                <form className='up-form'>
                        <button className='up-btn' onClick={() => setShow(false)}>X</button>
                        <label>Title</label>
                        <input className='up-input' type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Post content</label>
                    <textarea type="text" name='paragraph' value={paragraph} onChange={(e) => setParagraph(e.target.value)} />
                    <button onClick={() => { dispatch(updatePost(posts._id, title, paragraph)); }}>UPDATE</button>
                </form>
                </div> : null}
        </div>
    )
};

export default Update