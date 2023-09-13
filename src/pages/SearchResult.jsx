import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { searchPlaces } from "../api";
import { SearchResultCard } from "../Components";
import { SearchResultLoader } from "../Components/loaders";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const SearchResult = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [location, setLocation] = useState(queryParams.get("location"));
  const [term, setTerm] = useState(location);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let source = axios.CancelToken.source();
    setIsLoading(true);

    searchPlaces(location, { limit: 30 }, source)
      .then(data => {
        if (!source.token.reason) {
          setSearchResults(data);
          setIsLoading(false);
        }
      })
      .catch(err => console.log(err));

    return () => {
      source.cancel();
    };
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(term);
    navigate(`/search?location=${term}`);
  };

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className={`bg-white sticky-top ${scrolled && 'shadow'} z-30`}>
          <form className="container mx-auto p-4 flex space-x-2" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border rounded-sm pl-10 pr-4 py-2 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
            <button className="bg-secondary py-2 px-3 md:px-6  rounded-sm hidden sm:inline cursor-pointer hover:bg-cyan-400 transition ease-in duration-200">
              <p className="font-semibold">Search</p>
            </button>
          </form>
        </div>

        {!searchResults || isLoading ? (
          <SearchResultLoader />
        ) : (
          <>
            <div className="container mx-auto p-4">
              <div className="border shadow">
                <div className="border-b p-4">
                  <h2 className="font-semibold text-xl">
                    Top result match "{location}"
                  </h2>
                </div>
                <div>
                  {searchResults?.filter(result => result?.is_top_result).map((result, i) => (
                    <SearchResultCard key={i} result={result} />
                  ))}
                </div>
              </div>
            </div>

            <div className="container mx-auto p-4">
              <div className="border shadow">
                <div className="border-b p-4">
                  <h2 className="font-semibold text-xl">
                    More results matching "{location}"
                  </h2>
                </div>
                <div>
                  {searchResults?.filter(result => !result?.is_top_result).map((result, i) => (
                    <SearchResultCard key={i} result={result} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
