import React, { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategory] = useState(['Madara']);

    // const handleAdd = () => {
    //     setCategory( [...categories, 'Naruto'] ); //Añadir al array
    // }

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory= { setCategory }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>

    );
}

export default GifExpertApp;