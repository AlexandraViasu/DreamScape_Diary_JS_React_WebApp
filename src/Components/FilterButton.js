import React from "react";

// function FilterButton(props) {
//     return (
//       <button
//         type="button"
//         className="btn toggle-btn"
//         aria-pressed={props.isPressed}
//         onClick={() => props.setFilter(props.name)}>
//         <span className="visually-hidden">Show </span>
//         <span>{props.name}</span>
//         <span className="visually-hidden"> tags</span>
//       </button>
//     );
//   }
  
function FilterButton(props) {

    const { name, filter, setFilter } = props;

return (

    <button
    type="button"
    className="btn toggle-btn"
    // Use props.FILTER_MAP[props.name] as the value for the aria-pressed attribute
    aria-pressed={props.FILTER_MAP[props.name]}
    onClick={() => props.setFilter(props.name)}>
    <span className="visually-hidden">Show </span>
    <span>{props.FILTER_MAP[props.name]}</span>
    <span className="visually-hidden"> tags</span>    
    </button>

);

}


export default FilterButton;
