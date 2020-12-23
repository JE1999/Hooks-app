import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures/demoTodos'


describe('Pruebas en el <TodoList />', () =>{

    const handleToggle = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos= { demoTodos }
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )

    test('Mostrar componente ', () => {
        
        expect( wrapper ).toMatchSnapshot()

    })

    test('Mostrar <TodoListItem /> 2 veces', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) )

    })
    

})