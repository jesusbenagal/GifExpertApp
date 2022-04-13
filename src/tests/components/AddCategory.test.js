import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategory = jest.fn();

    let wrapper = shallow( <AddCategory setCategory = { setCategory } /> );

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory = { setCategory } /> );

    });
    
    test('debe de mostrarse correctamente', () => {

        expect ( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value: value } });

        expect ( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect ( setCategory ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategory y limpiar la caja de texto', () => {

        const value = 'Madara';

        // 1. simular el inputchange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el Submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategory se debe de haber llamado
        expect( setCategory ).toHaveBeenCalled();

        // 4. el valor de input debe de ser ''
        expect( wrapper.find('input').prop('value') ).toBe('');

    });
       
 })