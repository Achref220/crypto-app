import React from 'react';
import '../News/NewsList.css'
const NewsList = ({title, url}) => {
    return (
        <div className='main-c'>
            <div className='each-news'>
                
                <h4>{title}</h4>
                <a href={url}>{url}</a>
            </div>
        </div>
  );
};

export default NewsList;
