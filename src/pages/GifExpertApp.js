import React, { useState } from 'react';
import AddCategory from '../components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategory] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

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
                    categories.map( (category, i) => {
                        return <li key={ category }>{ category }</li>;
                    })
                }
            </ol>
        </>

    );
}

export default GifExpertApp;