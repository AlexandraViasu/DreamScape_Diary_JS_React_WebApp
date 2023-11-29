import React, { useState } from 'react';
import FilterButton from './FilterButton';

// const TagFilter = ({ filter }) => {

//     const FILTER_MAP = {
//         LucidDream: (tag) => tag.isLucidDream,
//         Nightmare: (tag) => tag.isNightmare,
//         Recurring: (tag) => tag.isRecurring,
    
//       };
    
//     const FILTER_NAMES = Object.keys(FILTER_MAP);

//     const [setFilter, setSetFilter] = useState(filter);

//     const filterList = FILTER_NAMES.map((name) => (
//         <FilterButton
//           key={name}
//           name={name}
//           isPressed={name === filter}
//           setFilter={setFilter}
//           FILTER_MAP={FILTER_MAP}
//         />
//       ));

// }

const TagFilter = ({ filter, setFilter }) => {

    const FILTER_MAP = {
        LucidDream: (tag) => tag.isLucidDream,
        Nightmare: (tag) => tag.isNightmare,
        Recurring: (tag) => tag.isRecurring,
    
      };
    
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    
    // Use the setFilter function from the props to update the filter state
    const handleFilter = (name) => {
      setFilter(name);
    };
    
    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={handleFilter}
          FILTER_MAP={FILTER_MAP}
        />
      ));
    
    }

export default TagFilter;