import React from "react";
  
function FilterButton(props) {

    const { name, isPressed, setFilter } = props;

    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={isPressed}
            onClick={() => setFilter(name)}
        >
            <span className="visually-hidden">Show </span>
            <span>{name}</span>
            <span className="visually-hidden"> tags</span>    
        </button>
    );
}

export default FilterButton;