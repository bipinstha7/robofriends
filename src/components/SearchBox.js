import React from "react";

const SearchBox = ({ inputSearchChange }) => {
  return (
    <div className="pa2">
      <input 
        type = "text" 
        placeholder = "search robots" 
        className = "pa3 ba b--green bg-lightest-blue"
        onChange = {inputSearchChange}
      />      
    </div>
  )
}

export default SearchBox;