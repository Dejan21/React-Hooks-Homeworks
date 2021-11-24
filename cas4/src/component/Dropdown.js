import React from 'react';
import PropTypes from "prop-types";

const Dropdown = ({elements,changeOption}) => {
    return (
        <div className="Dropdowwn">
            <label htmlFor="app-select">Choose an app</label>
            <select onChange={changeOption} name="app-select" id="app-select">
                {
                    elements.map((element,i) => {
                       return(<option key={i} value={element.value}>
                             {element.name}
                       </option>)
                    })
                }
            </select>
        </div>
    );
};
   
Dropdown.propTypes ={
    elements: PropTypes.arrayOf(PropTypes.object),
    changeOption: PropTypes.func
}

export default Dropdown;