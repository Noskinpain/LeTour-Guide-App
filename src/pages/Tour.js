import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer'

const Tour = () => {
    const tours = [
        {
            id: 1,
            title: "City Explorer",
            description: "Experience the vibrant city life with our guided city explorer tour.",
            duration: "4 hours",
            price: "$50",
            location: "City Center"
        },
        {
            id: 2,
            title: "Nature Retreat",
            description: "Escape into the tranquil beauty of nature with our nature retreat tour.",
            duration: "2 days",
            price: "$200",
            location: "Countryside"
        },
        {
            id: 3,
            title: "Historical Sites",
            description: "Explore the rich history of the region through its historical sites and landmarks.",
            duration: "1 day",
            price: "$75",
            location: "Historic District"
        },
        {
            id: 4,
            title: "Culinary Delights",
            description: "Indulge in the local cuisine and culinary delights on this flavorful tour.",
            duration: "3 hours",
            price: "$40",
            location: "Food District"
        },
        {
            id: 5,
            title: "Adventure Expedition",
            description: "Embark on an adventurous journey to discover hidden gems and thrilling experiences.",
            duration: "5 days",
            price: "$300",
            location: "Wilderness"
        },
        {
            id: 6,
            title: "Beach Getaway",
            description: "Relax and unwind on the stunning beaches of the coast.",
            duration: "3 days",
            price: "$180",
            location: "Coastal Area"
        },
        {
            id: 7,
            title: "Mountain Trek",
            description: "Challenge yourself with a trek through the breathtaking mountain landscapes.",
            duration: "2 days",
            price: "$160",
            location: "Mountain Range"
        },
        {
            id: 8,
            title: "Art and Culture Tour",
            description: "Immerse yourself in the local art and culture scene of the city.",
            duration: "6 hours",
            price: "$60",
            location: "Arts District"
        },
        {
            id: 9,
            title: "Wine Tasting Tour",
            description: "Savor the finest wines of the region with a guided wine tasting tour.",
            duration: "4 hours",
            price: "$70",
            location: "Vineyards"
        },
        {
            id: 10,
            title: "Hidden Waterfalls",
            description: "Discover the beauty of hidden waterfalls nestled in the wilderness.",
            duration: "1 day",
            price: "$50",
            location: "Remote Forest"
        },
        {
            id: 11,
            title: "Historic Architecture",
            description: "Explore the architectural wonders of the past in this historical tour.",
            duration: "3 hours",
            price: "$55",
            location: "Old Town"
        },
        {
            id: 12,
            title: "Desert Expedition",
            description: "Venture into the vast desert and experience its unique landscapes.",
            duration: "4 days",
            price: "$280",
            location: "Desert Region"
        },
        {
            id: 13,
            title: "Photography Tour",
            description: "Capture stunning shots of the region's scenic beauty with a photography tour.",
            duration: "5 hours",
            price: "$65",
            location: "Various Locations"
        },
        {
            id: 14,
            title: "Farm-to-Table Experience",
            description: "Learn about sustainable farming and enjoy fresh farm-to-table meals.",
            duration: "6 hours",
            price: "$75",
            location: "Organic Farms"
        },
        {
            id: 15,
            title: "Cultural Festival",
            description: "Participate in the vibrant local cultural festival and celebrations.",
            duration: "2 days",
            price: "$90",
            location: "Cultural Center"
        },
        {
            id: 16,
            title: "Mountain Hiking",
            description: "Embark on an adventurous hike to conquer the region's breathtaking mountains.",
            duration: "8 hours",
            price: "$50",
            location: "Mountain Range"
        },
        {
            id: 17,
            title: "Wildlife Safari",
            description: "Experience the rich wildlife and fauna in their natural habitat.",
            duration: "2 days",
            price: "$150",
            location: "National Park"
        },
        {
            id: 18,
            title: "Wine Tasting Tour",
            description: "Indulge in the finest local wines and learn about the winemaking process.",
            duration: "5 hours",
            price: "$60",
            location: "Vineyards"
        },
        {
            id: 19,
            title: "Beach Retreat",
            description: "Relax and unwind on the pristine beaches of the region.",
            duration: "3 days",
            price: "$120",
            location: "Coastal Area"
        },
        {
            id: 20,
            title: "Cultural Workshops",
            description: "Participate in cultural workshops and learn traditional arts and crafts.",
            duration: "6 hours",
            price: "$45",
            location: "Cultural Center"
        }
    ];

  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-10 mt-10">
            <h2 className="text-3xl font-semibold text-center text-black mb-8">Our Tours (Coming soon)</h2>
            <div className="flex flex-wrap justify-center">
                {tours.map(tour => (
                    <div key={tour.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                            <p className="text-gray-600 mb-2">{tour.description}</p>
                            <p className="text-sm text-gray-500 mb-2">Location: {tour.location}</p>
                            <p className="text-sm text-gray-500 mb-2">Duration: {tour.duration}</p>
                            <p className="text-sm text-gray-500">Price: {tour.price}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default Tour