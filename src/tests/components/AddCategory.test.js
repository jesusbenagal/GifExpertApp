import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategory = () => {};

    let wrapper = shallow( <AddCategory setCategory = { setCategory } /> );

    beforeEach( () => {

        wrapper = shallow( <AddCategory setCategory = { setCategory } /> );

    })
    
    test('debe de mostrarse correctamente', () => {

        expect ( wrapper ).toMatchSnapshot();

    });
    
 })