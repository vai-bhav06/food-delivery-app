import React from 'react';

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`filter-btn ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;