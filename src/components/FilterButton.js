import React from 'react'

const FilterButton = ({ showAll, setShowAll }) => (
    <div>
        <button onClick={() => setShowAll(!showAll)}>
            Show {showAll ? 'important' : 'all'}
        </button>
    </div>
);

export default FilterButton;