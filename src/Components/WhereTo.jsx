import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
// import "../../style/Style.css"
import { useNavigate } from 'react-router-dom';


const WhereTo = () => {
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleChangeAddress = (address) => {
    setAddress(address);
  };

  const handleChangeOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  // const handleClick = () => {
  //   navigate("/index");
  // };

  const [term, setTerm] = useState('');
  

  // Form submit handler function - fires on submit
  const handleSubmit = (e) => {
      // Prevent form from reloading page
      e.preventDefault();

      // Route to the search Result page
      // ...passing the form search 'term' state value as url parameter to be received on search result component
      const searchUrl = `/search?location=${term}`;

    // Use navigate to change the route
    navigate(searchUrl);
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChangeAddress}
  
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <div className=" px-6 md:px-0">
            <div className="relative flex-col gap-2 md:gap:0 md:flex-row items-center flex justify-start mt-10">
              
              <div className="select-experience-large w-full lg:w-96 h-12 lg:h-14">
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input ',
                  })}
                  value={term}
                        // Update form state value onChange of input
                        onChange={e => setTerm(e.target.value)}
                />
              </div>
              <div className="" />
              <button
                id="go"
                className='w-full h-12 lg:h-14 lg:w-36'
                onClick={handleSubmit}
              >
                Let's Go
              </button>
            </div>
          </div>
          <div className="mb-10 w-5/5 pl-36">
            {loading && <div className='pl-2 mx-4 md:mx-56 md:pl-36 text-blue-800 flex justify-start'>Loading...</div>}
            {suggestions.map((suggestion, index) => {
  const className = suggestion.active
    ? 'suggestion-item--active'
    : 'suggestion-item';
  // inline style for demonstration purpose
  const style = suggestion.active
    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
    : { backgroundColor: '#fffff', cursor: 'pointer' };
  return (
    <div
      key={index} // Add a unique key prop here
      className="flex justify-start md:w-2/5 w-full  border-b-2 md:right-0 relative right-16 text-blue-800 mb-2 md:mx-96 md:border-b-4"
      {...getSuggestionItemProps(suggestion, {
        style,
      })}
    >
      <span>{suggestion.description}</span>
    </div>
              );
            })}
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default WhereTo;
