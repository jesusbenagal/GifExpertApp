import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas para GifGridItem', () => {
    
    let wrapper = shallow( <GifGridItem />);

    beforeEach(() => {

        wrapper = shallow( <GifGridItem />);

    })

    test('Debe mostrar correctamente <GifGridItem/>', () => { 
        
        expect ( wrapper ).toMatchSnapshot();

     })

});
