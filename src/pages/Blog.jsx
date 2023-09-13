import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Blog = () => {

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }
  
    const blogPosts = [
        {
          title: "Exploring Hidden Gems: Off the Beaten Path in Paris",
          date: "August 15, 2023",
          author: "John Doe",
          content: "Paris is a city known for its iconic landmarks, but there's more to discover beyond the Eiffel Tower and Louvre Museum. In this blog post, we'll take you on a journey to explore the charming neighborhoods, local cafes, and lesser-known attractions that make Paris truly magical."
        },
        {
          title: "A Culinary Adventure: Food Tasting in Tokyo",
          date: "September 3, 2023",
          author: "Jane Smith",
          content: "Tokyo is a paradise for food lovers, offering a wide range of culinary delights that cater to every palate. Join us as we embark on a culinary adventure through Tokyo's bustling street markets, traditional izakayas, and high-end sushi restaurants. Get ready to tantalize your taste buds and learn about the rich flavors of Japanese cuisine."
        },
        {
          title: "Hiking the Inca Trail: Unraveling the Mysteries of Machu Picchu",
          date: "October 12, 2023",
          author: "Michael Johnson",
          content: "Machu Picchu, the ancient Inca citadel nestled in the Andes Mountains, has long captivated the hearts of travelers. Join us as we recount our exhilarating journey along the Inca Trail, uncovering the breathtaking landscapes, Inca ruins, and spiritual significance of this UNESCO World Heritage Site."
        },
        {
          title: "Safari Adventure: Exploring the Wilds of Serengeti National Park",
          date: "November 8, 2023",
          author: "Emily Davis",
          content: "Witness the raw beauty of Africa as we embark on an unforgettable safari adventure through Serengeti National Park. Get up close with majestic lions, elegant giraffes, and herds of wildebeest during the Great Migration. Experience the thrill of the savannah and learn about the delicate balance of nature."
        },
        {
          title: "Unveiling the Wonders of Petra: The Rose City of Jordan",
          date: "December 20, 2023",
          author: "Alex Turner",
          content: "Step into a realm of ancient wonder as we explore the archaeological marvel of Petra in Jordan. Journey through the narrow Siq, marvel at the intricate carvings of the Treasury, and immerse yourself in the rich history and culture of this hidden gem. Discover why Petra is a must-visit destination for history enthusiasts and adventurers alike."
        },
        {
          title: "Chasing the Northern Lights: A Journey to Arctic Beauty",
          date: "January 18, 2024",
          author: "Sophia Lee",
          content: "Embark on a quest to witness one of nature's most breathtaking phenomena – the Northern Lights. Join us as we venture into the Arctic wilderness, chasing the dancing lights across the night sky. Learn about the science behind this mesmerizing spectacle and capture moments of awe-inspiring beauty."
        },
        {
          title: "Sailing the Mediterranean: A Voyage of Sun, Sea, and Culture",
          date: "February 9, 2024",
          author: "David Mitchell",
          content: "Set sail on a Mediterranean odyssey as we explore the stunning coastlines, vibrant cities, and ancient ruins that dot this historic region. Discover the allure of charming coastal villages, indulge in delectable Mediterranean cuisine, and immerse yourself in the rich tapestry of cultures that have shaped this picturesque landscape."
        },
        {
          title: "City of Dreams: Exploring the Architectural Marvels of Dubai",
          date: "March 27, 2024",
          author: "Olivia Williams",
          content: "Dubai is a city of superlatives, where futuristic skyscrapers meet traditional Arabian charm. Join us on a journey through this modern marvel, as we marvel at the iconic Burj Khalifa, stroll through bustling souks, and experience the blend of tradition and innovation that defines this global city."
        },
        {
          title: "Trekking the Andes: A Peruvian Adventure to Remember",
          date: "April 15, 2024",
          author: "Daniel Carter",
          content: "Embark on an epic trek through the breathtaking landscapes of the Andes Mountains in Peru. Follow ancient Inca trails, pass by picturesque alpine lakes, and reach the mesmerizing heights of Rainbow Mountain. Learn about the indigenous culture, sample traditional Peruvian cuisine, and immerse yourself in the natural wonders of the Andes."
        },
        {
          title: "Enchanted Europe: Exploring the Fairytale Villages of Alsace",
          date: "May 7, 2024",
          author: "Isabella Martin",
          content: "Transport yourself to a world of storybook charm as we journey through the fairytale villages of Alsace, France. Experience the romance of half-timbered houses, cobblestone streets, and colorful flower boxes. Join us as we meander through picturesque vineyards, savor local wines, and discover the enchanting allure of this idyllic region."
        },
        {
            title: "Exploring Hidden Gems: Off the Beaten Path in Paris",
            date: "August 15, 2023",
            author: "John Doe",
            content: "Paris is a city known for its iconic landmarks, but there's more to discover beyond the Eiffel Tower and Louvre Museum. In this blog post, we'll take you on a journey to explore the charming neighborhoods, local cafes, and lesser-known attractions that make Paris truly magical."
          },
          {
            title: "A Culinary Adventure: Food Tasting in Tokyo",
            date: "September 3, 2023",
            author: "Jane Smith",
            content: "Tokyo is a paradise for food lovers, offering a wide range of culinary delights that cater to every palate. Join us as we embark on a culinary adventure through Tokyo's bustling street markets, traditional izakayas, and high-end sushi restaurants. Get ready to tantalize your taste buds and learn about the rich flavors of Japanese cuisine."
          },
          {
            title: "Hiking the Inca Trail: Unraveling the Mysteries of Machu Picchu",
            date: "October 12, 2023",
            author: "Michael Johnson",
            content: "Machu Picchu, the ancient Inca citadel nestled in the Andes Mountains, has long captivated the hearts of travelers. Join us as we recount our exhilarating journey along the Inca Trail, uncovering the breathtaking landscapes, Inca ruins, and spiritual significance of this UNESCO World Heritage Site."
          },
          {
            title: "Safari Adventure: Exploring the Wilds of Serengeti National Park",
            date: "November 8, 2023",
            author: "Emily Davis",
            content: "Witness the raw beauty of Africa as we embark on an unforgettable safari adventure through Serengeti National Park. Get up close with majestic lions, elegant giraffes, and herds of wildebeest during the Great Migration. Experience the thrill of the savannah and learn about the delicate balance of nature."
          },
          {
            title: "Unveiling the Wonders of Petra: The Rose City of Jordan",
            date: "December 20, 2023",
            author: "Alex Turner",
            content: "Step into a realm of ancient wonder as we explore the archaeological marvel of Petra in Jordan. Journey through the narrow Siq, marvel at the intricate carvings of the Treasury, and immerse yourself in the rich history and culture of this hidden gem. Discover why Petra is a must-visit destination for history enthusiasts and adventurers alike."
          },
          {
            title: "Chasing the Northern Lights: A Journey to Arctic Beauty",
            date: "January 18, 2024",
            author: "Sophia Lee",
            content: "Embark on a quest to witness one of nature's most breathtaking phenomena – the Northern Lights. Join us as we venture into the Arctic wilderness, chasing the dancing lights across the night sky. Learn about the science behind this mesmerizing spectacle and capture moments of awe-inspiring beauty."
          },
          {
            title: "Sailing the Mediterranean: A Voyage of Sun, Sea, and Culture",
            date: "February 9, 2024",
            author: "David Mitchell",
            content: "Set sail on a Mediterranean odyssey as we explore the stunning coastlines, vibrant cities, and ancient ruins that dot this historic region. Discover the allure of charming coastal villages, indulge in delectable Mediterranean cuisine, and immerse yourself in the rich tapestry of cultures that have shaped this picturesque landscape."
          },
          {
            title: "City of Dreams: Exploring the Architectural Marvels of Dubai",
            date: "March 27, 2024",
            author: "Olivia Williams",
            content: "Dubai is a city of superlatives, where futuristic skyscrapers meet traditional Arabian charm. Join us on a journey through this modern marvel, as we marvel at the iconic Burj Khalifa, stroll through bustling souks, and experience the blend of tradition and innovation that defines this global city."
          },
          {
            title: "Trekking the Andes: A Peruvian Adventure to Remember",
            date: "April 15, 2024",
            author: "Daniel Carter",
            content: "Embark on an epic trek through the breathtaking landscapes of the Andes Mountains in Peru. Follow ancient Inca trails, pass by picturesque alpine lakes, and reach the mesmerizing heights of Rainbow Mountain. Learn about the indigenous culture, sample traditional Peruvian cuisine, and immerse yourself in the natural wonders of the Andes."
          },
          {
            title: "Enchanted Europe: Exploring the Fairytale Villages of Alsace",
            date: "May 7, 2024",
            author: "Isabella Martin",
            content: "Transport yourself to a world of storybook charm as we journey through the fairytale villages of Alsace, France. Experience the romance of half-timbered houses, cobblestone streets, and colorful flower boxes. Join us as we meander through picturesque vineyards, savor local wines, and discover the enchanting allure of this idyllic region."
          },
          {
            title: "Cruising the Caribbean: Island-Hopping Adventure",
            date: "June 22, 2024",
            author: "William Johnson",
            content: "Set sail for paradise as we embark on a Caribbean cruising adventure. Explore a tropical wonderland of turquoise waters, white sandy beaches, and vibrant coral reefs. Join us as we hop from one captivating island to another, experiencing the unique cultures, flavors, and natural beauty of the Caribbean."
          },
          {
            title: "The Magic of Marrakech: A Moroccan Dream",
            date: "July 10, 2024",
            author: "Sophie Brown",
            content: "Immerse yourself in the vibrant tapestry of Marrakech, where ancient traditions blend seamlessly with modern allure. Wander through bustling souks, discover hidden riads, and indulge in aromatic Moroccan cuisine. Join us as we navigate the bustling streets, vibrant markets, and enchanting architecture of this captivating city."
          },
        // Continue adding more blog posts...
      ];
  return (

  <div className='absolute '>
    <Navbar/>
    <div className='px-4 md:px-20 pt-16'>
    <h1 className="text-4xl font-bold mb-8 text-center text-black">Travel Blog</h1>
      <div className="grid gap-8 mb-20">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-blue-800 font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2 text-lg">{post.date} by {post.author}</p>
            <p className="text-gray-600 text-xl">{post.content}</p>
          </div>
        ))}
      </div>
      </div>
    <Footer/>
   </div>
  )
}

export default Blog