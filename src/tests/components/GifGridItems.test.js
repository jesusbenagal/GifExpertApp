import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas para GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    let wrapper = shallow( <GifGridItem title={title} url={url}/>);

    beforeEach(() => {

        wrapper = shallow( <GifGridItem title={title} url={url}/>);

    })

    test('Debe mostrar correctamente <GifGridItem/>', () => { 
        
        expect ( wrapper ).toMatchSnapshot();

     })

     test('debe de tener un parrafo con el titulo', () => { 
         
        const p = wrapper.find('p');

        expect ( p.text().trim() ).toBe( title );

      })

      test('Debe de tener la imagen al url y alt de los props', () => {
          
        const img = wrapper.find('img');

        expect ( img.prop('src') ).toBe( url );
        expect ( img.prop('alt') ).toBe( title );

      });

      test('debe tener la clase de animated css', () => {
          
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect ( className.includes('animate__fadeIn') ).toBe( true );

      });

});
