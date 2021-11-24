import React from "react";
import PropTypes from "prop-types";


export const Input = ({ type, placeholder, toggle, name, value, onChange,renderTextArea, changeInput }) => {
    console.log(name)
  return (
    <p>
      { renderTextArea ?
      <textarea 
      rows={8}
      cols={20}
      />
      :
         <input
         type={type}
         placeholder={placeholder}
         name={name}
         value={value}
         onChange={onChange}
       />
      }
    
      {
      name === "password" && 
        <button type="button" className="eye-button" onClick={toggle}>
          
          <i className={type === "password" ? 'fa fa-eye-slash' : "fa fa-eye"}
          ></i>
        </button>
      }
      {
        name === "comment" &&
        <button type="button" className="caret-button" onClick={changeInput}>
          <i className={renderTextArea === true ? 'fa fa-comment-o' : "fa fa-comment-o"}></i>

        </button>
        }
    </p>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  toggle: PropTypes.func,
  renderTextArea: PropTypes.bool,
  changeInput: PropTypes.func
};

export default Input;
