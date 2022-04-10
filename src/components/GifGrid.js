import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const apiKey = process.env.REACT_APP_API_KEY_GIPHY

        const url = `https://api.giphy.com/v1/gifs/search?q=madara&limit=10&api_key=${ apiKey }`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })

        console.log(gifs);
        setImages( gifs );

    }
    return (
        <div>
            <h3>{ category }</h3>
                {
                    images.map( img =>(
                        <GifGridItem
                            key = { img.id } 
                            { ...img }
                        />
                    ))
                }
        </div>
    );

}

export default GifGrid;