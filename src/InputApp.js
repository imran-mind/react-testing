import React from 'react';
import { Input } from './Input';

function InputApp() {
    const [inputValue, setInputValue] = React.useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <h1>Add Name :</h1>
        <Input handleChange={handleChange} inputValue={inputValue} />
      </div>
    );
}

export default InputApp;