import React, {useState} from 'react';

const Test = () => {
    const [inputValue, setInputValue] = useState('Pedro');

    let onChange = (event) => {
         const newValue = event.target.value;
         setInputValue(newValue);
    };

    return (
        <div className="Test">
            <input placeholder="enter something.." onChange={onChange} />
            {inputValue}
        </div>
    );
};

export default Test;