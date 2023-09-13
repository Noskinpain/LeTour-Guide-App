import ReactStarsRating from 'react-awesome-stars-rating';
import { Link } from "react-router-dom";

const PlaceCard = ({ place, type }) => {
    return ( 
        <>
            {/* Place card is rendered if place prop is received */}
            {place && <div className="group cursor-pointer">
                {/* Place location_id is passed as parameter to place_type (hotels || restaurants || attractions) route for full place details */}
                <Link to={`/search/${type}/${place?.location_id}`}>
                    {/* Place Photo is render if found or a default image is renderedas fallback */}
                    <div className='h-450 w-full flex justify-around'>
            <div className='h-450 w-11/12 rounded-xl  border bg-blue-100'>
                    <img src={place?.photo ? place?.photo?.images?.large?.url : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'} 
                        alt={place?.name}
                        className="w-full h-[250px] object-cover group-hover:brightness-125 rounded-t-xl"
                    />
                     <p className='relative top-4 text-white pl-3 h-10 flex items-center w-24 font-thin rounded-e-lg bg-red-600 hover:bg-red-400'>
                  Featured
                </p>
                    {/* --- */}

                    {/* Place name */}
                    <h2 className="font-semibold text-lg pt-8 pl-3 group-hover:underline">
                        { place?.name }
                    </h2>
                    {/* --- */}
                      {/* */}
                      <h2 className="font-semibold text-lg pt-0 text-blue-800 pl-3 group-hover:underline">
                        { place?.location_string }
                    </h2>
                    {/* --- */}
                    <h2 className="font-semibold text-sm pt-2 pl-3 ">
                        { place?.ranking }
                    </h2>

                    {/* Place Rating with place.rating value passed into component to render star rating */}
                    <span className="flex items-center pl-3 mb-2">
                        <ReactStarsRating 
                            value={Number(place?.rating)}
                            className="flex mr-2"
                            size={20}
                            isEdit={false}
                            primaryColor="#e1c211" 
                            secondaryColor="#e5e7eb" 
                        />
                        ~ { place?.num_reviews } Reviews
                    </span>
                    {/* --- */}
                    </div>
                    </div>
                </Link>
                {/* --- */}
            </div>}
        </>
     );
}
 
export default PlaceCard;