import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    return (
        <div>
            <h2 className='font-semibold'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm'>{news.length} News Found On This Category</p>
            <div>
                { 
                    news.map(singLeNews => <NewsCard key={singLeNews._id} news={singLeNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;