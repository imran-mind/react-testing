import React from 'react';
import {render,screen} from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

describe('Testing App component',()=>{

  test('counter is increment on increment button click',()=>{
    render(<App/>);
    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByText('Increment');

    UserEvent.click(incrementBtn);
    UserEvent.click(incrementBtn);

    expect(counter.textContent).toEqual('2');
  });

  test('counter is decrement on decrement button click',()=>{
    render(<App/>);
    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByText('Decrement');

    UserEvent.click(decrementBtn);
    UserEvent.click(decrementBtn);

    expect(counter.textContent).toEqual('-2');
  })

})