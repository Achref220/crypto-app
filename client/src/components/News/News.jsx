import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsList from './NewsList';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
                'x-rapidapi-key': '1a65c52197msh21d5bf826cbb9a8p159147jsnccbb399bd9d0'
            }
        };

        axios.request(options).then(function (res) {
            console.log(res.data);
            setNews(res.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);
    return (
        <div className='main'>
            {news.map(item => {
                return (
                <NewsList
                        title={item.title}
                        url={item.url}
                    />
                )
            })}
        </div>
  );
};

export default News;
