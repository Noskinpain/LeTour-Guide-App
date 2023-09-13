import React, { useRef, useState, useEffect } from 'react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 };

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyByQ_yBS39mHWCUooITp2we0pnwtgWNAXA",
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      error => {
        console.error(error);
      }
    );
  }, []);

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    <>
    <div className=' w-full bg-black fixed'>
   <p className='text-white font-serif text-4xl pl-10 pt-5 pb-5'>LeTour Guide</p>
    
    <div className="flex flex-col items-start relative h-screen w-full">
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Google Map Box */}
        <GoogleMap
          center={userLocation || center}
          zoom={8}
          mapContainerClassName="w-full h-full"
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          {userLocation && <Marker position={userLocation} />}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </div>
      <div className="p-4 bg-blue-100 shadow-xl rounded-lg m-4 min-w-[25rem] z-10">
        <div className="flex flex-col items-start gap-20 justify-between space-x-2">
          <div className="flex flex-col gap-4 w-full ">
            <Autocomplete>
              <input type="text"
               placeholder="Origin" 
               ref={originRef} 
               className="w-full font-serif h-16 text-lg pl-2 border border-white rounded-lg placeholder:text-black"/>
            </Autocomplete>
            <Autocomplete>
              <input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
                className="w-full font-serif h-16 text-lg pl-2 border border-white rounded-lg placeholder:text-black"/>
            </Autocomplete>
          </div>
          
          <div className="space-x-10 relative bottom-10">
            <button
              className="px-6 py-4 font-serif"
              id='go'
              onClick={calculateRoute}
            >
              Calculate Route
            </button>
            <button
              className="p-3 rounded-full bg-black hover:bg-blue-900 text-white"
              onClick={clearRoute}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-start gap-4 text-xl font-serif">
          <div>Distance: <span className='text-lg'>{distance}</span></div>
          <div>Duration: <span className='text-lg'>{duration}</span></div>
          <button
            className="p-2 rounded-full flex justify-center bg-black hover:bg-blue-900 text-white"
            onClick={() => {
              map.panTo(userLocation);
              map.setZoom(8);
            }}
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
