import React, { useState } from 'react';
import FilterButton from './FilterButton';

const TagFilter = ({ filter, setFilter }) => {

  const FILTER_MAP = {
    LucidDream: (dream) => dream.isLucidDream,
    Nightmare: (dream) => dream.isNightmare,
    Recurring: (dream) => dream.isRecurring,
    // Add other tags here
  };
    
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    
    // Use the setFilter function from the props to update the filter state
    const handleFilter = (tag) => {
      console.log("Selected tag:", tag);
      setFilter(tag);
    };
    
    const filterList = FILTER_NAMES.map((tag) => (
        <FilterButton
          key={tag}
          name={tag}
          isPressed={tag === filter}
          setFilter={handleFilter}
          FILTER_MAP={FILTER_MAP}
        />
      ));
    
      return (
        <div>
            {filterList}
        </div>
    );

    }

export default TagFilter;