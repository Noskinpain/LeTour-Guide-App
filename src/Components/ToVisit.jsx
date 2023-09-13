import { useContext } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";

// OwlCarousel Responsive Options   
const responsive = {
    0: {
        items: 1,
        margin: 15,
    },
    600: {
        items: 2,
        margin: 10,
    },
    768: {
        items: 3,
        margin: 10,
    },
    1000: {
        items: 3,
        margin: 10,
    }
}

const ToVisit = () => {
    // Bringing the Attraction state from the Main context and saved into variable name 'places'
    const { attractions: places } = useContext(MainContext);

    return (
        <>
            {!places || places?.length < 1 ? (
                // if places list is empty, render a Loader
                <PlaceCardLoader />
            ) : (
                // Places are ready, hence the element below is render
                <div className='px-4 sm:px-24 mt-10 sm:mt-24 mb-5 font-serif'>
                <p
                  className="tracking-widest md:text-3xl text-2xl text-blue-800 md:pb-2"
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                >
                  Attractions Around You
                </p>
                <h1
                  className='text-lg font-medium md:text-27 '
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                >
                  on LeTour
                  <hr
                    style={{
                      backgroundColor: '#ffbb58',
                      width: '75px',
                      height: '2px',
                      border: 'none',
                      marginTop: '0px',
                      marginLeft: '0px',
                      marginBottom: '20px'
                    }}
                  />
                </h1>
      
                    {/* OwlCarousel to Render Places in Carousel */}
                    <div className="relative -left-[20px]">
                        <OwlCarousel nav stagePadding={20}
                            navClass={["navStyle", "navStyle"]}
                            navContainerClass="navContainerStyle"
                            responsive={responsive}
                           
                        >
                            {/* Mapping through the Places Object, a place card is rendered for each data */}
                            {places?.map((place, index) => (
                                // Place card receives each place as prop
                                <PlaceCard key={index} place={place} type="attractions" />
                            ))}
                            {/* --- */}
                        </OwlCarousel>
                    </div>
                    {/* --- */}
                </div>
            )}
        </>
    );
}

export default ToVisit;