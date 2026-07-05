import { useState, useEffect, useRef } from "react";

// Icons
import { CiSearch } from "react-icons/ci";
import { FiX } from "react-icons/fi";

// Components
import SearchResult from "../components/searchbar/SearchResults";
import NoResults from "../components/searchbar/NoResults";

// Interfaces
import { ISearchResult } from "@/domain/interfaces";

// Constants
import { searchData, mockSearchResults } from "../../data/constants";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ISearchResult[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      const filtered = mockSearchResults.filter((item) =>
        item.title?.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(true);
    }
  };

  const handleMobileOpen = () => {
    setIsFullScreen(true);
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleClose = () => {
    setIsFullScreen(false);
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  // Mobile Search Bar
  if (isMobile && isFullScreen) {
    return (
      <div
        ref={searchContainerRef}
        className="fixed inset-0 bg-white z-50 flex flex-col"
      >
        {/* Search Bar */}
        <div className="flex items-center p-4 border-b">
          <CiSearch className="h-5 w-5 text-green-pea mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Rechercher un cours, une formation..."
            className="flex-1 outline-none text-base"
            autoFocus
          />
          <button onClick={handleClose} className="ml-3">
            <FiX className="h-6 w-6 text-green-pea" />
          </button>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto">
          {query.trim() === "" ? (
            <>
              {/* Recent Searches */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-green-pea mb-4">
                  Recherches récentes
                </h3>
                {searchData.recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="w-full text-left py-3 px-2 flex items-center text-black border-b"
                    onClick={() => handleSearch(search)}
                  >
                    <CiSearch className="h-4 w-4 mr-3" />
                    {search}
                  </button>
                ))}
              </div>
              {/* Course Categories */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-green-pea mb-4">
                  Catégories de cours
                </h3>
                {searchData.courseCategories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left py-3 px-2 flex items-center justify-between text-black border-b"
                    onClick={() => handleSearch(category.name)}
                  >
                    <div className="flex items-center">
                      <CiSearch className="h-4 w-4 mr-3" />
                      {category.name}
                    </div>
                    <span className="text-sm text-green-pea">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="p-4">
              {results.map((result, index) => (
                <SearchResult key={index} result={result} />
              ))}
              {results.length === 0 && <NoResults query={query} />}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop Search Bar
  return (
    <div ref={searchContainerRef} className="relative w-full">
      {isMobile ? (
        <button
          onClick={handleMobileOpen}
          className="w-6 h-6 flex items-center justify-center"
        >
          <CiSearch className="w-6 h-6 text-gray-600" />
        </button>
      ) : (
        <>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder="Rechercher un cours, une formation..."
              className="w-full min-h-[50px] pl-10 pr-4 py-2 rounded-full border border-green-pea focus:outline-none focus:border-green-pea"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="h-5 w-5 text-green-pea" />
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[80vh] overflow-y-auto z-50">
              {query.trim() === "" ? (
                // Search Bar Content when no query is entered but the search bar is open and focused
                <>
                  {/* Recent Searches */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-4">
                      Recherches récentes
                    </h3>
                    {searchData.recentSearches.map((search, index) => (
                      <button
                        key={index}
                        className="w-full text-left py-2 px-4 flex items-center text-black hover:bg-green-pea/10 rounded-md"
                        onClick={() => handleSearch(search)}
                      >
                        <CiSearch className="h-4 w-4 mr-3 text-black" />
                        {search}
                      </button>
                    ))}
                  </div>
                  {/* Course Categories */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-green-pea mb-4">
                      Course Categories
                    </h3>
                    {searchData.courseCategories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left py-2 px-4 flex items-center justify-between text-black hover:bg-green-pea/10 rounded-md"
                        onClick={() => handleSearch(category.name)}
                      >
                        <div className="flex items-center">
                          <CiSearch className="h-4 w-4 mr-3 text-black" />
                          {category.name}
                        </div>
                        <span className="text-sm text-green-pea">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                // Search Results
                <div className="p-4">
                  {/* Search Results */}
                  {results.map((result, index) => (
                    <SearchResult key={index} result={result} />
                  ))}
                  {/* No Results */}
                  {results.length === 0 && <NoResults query={query} />}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchBar;
