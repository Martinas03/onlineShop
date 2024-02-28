import React from 'react';

const MySelector = ({options, defaultOption, value, onChange}) => {
    return (
        <div>
            <select value={value} onChange={(e) => onChange(e.currentTarget.value)}>
                <option disabled={true} value="">{defaultOption}</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    );
};

export default MySelector;