import React from 'react';
import {render,screen} from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import InputApp from './InputApp';
import { Input } from './Input';

describe('Testing InputApp component',()=>{

  test('Input value is updared correctly ',()=>{
    render(<InputApp/>);
    // screen.debug()
    const input = screen.getByRole('textbox');
    UserEvent.type(input,'React');
    expect(input.value).toBe('React');
  });

  test('Input value click count ',()=>{
    const handleChange = jest.fn();

    render(<Input handleChange={handleChange} inputValue=""/>);
    const input = screen.getByRole('textbox');
    UserEvent.type(input,'React');

    expect(handleChange).toHaveBeenCalledTimes(5);
  })

  
  test('snapshot test',()=>{
    const tree = renderer.create(<InputApp/>).toJSON();
    expect(tree).toMatchSnapshot()

  })

})