import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Las Vegas', label: 'Las Vegas' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Venice', label: 'Venice' },
  { value: 'Milan', label: 'Milan' },
  { value: 'Naples', label: 'Naples' },
  { value: 'Budapest', label: 'Budapest' },
  { value: 'Edinburg', label: 'Edinburg' },
  { value: 'Florence', label: 'Florence' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150,
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    fontSize: '14px',
    color: "blue"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const Searchbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="hidden lg:flex lg:justify-center justify-start items-start lg:items-center gap-2 ">
      {/* <Select
        styles={customStyles}
        placeholder="Select City"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      /> */}
      <input
        type="text"
        className="ml-0 md:ml-4 px-2 py-1 w-full md:w-96 mt-3 rounded border  focus:outline-none focus:ring-2 focus:ring-gray-200"
        placeholder="Search for experiences"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
