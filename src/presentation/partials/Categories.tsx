import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { categories, moreFromCSL } from "../../data/constants";

interface CategoriesProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Categories = ({ isOpen: externalIsOpen, onClose }: CategoriesProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  // Use external isOpen state if provided
  useEffect(() => {
    if (typeof externalIsOpen !== 'undefined') {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px breakpoint for lg
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile handlers
  const toggleSidenav = () => {
    setIsOpen(!isOpen);
    onClose?.();
  };
  const resetNavigation = () => {
    setActiveCategory(null);
    setActiveSubCategory(null);
  };

  return (
    <>
      {/* Mobile Trigger */}
      {isMobile && (
        <button
          className="lg:hidden text-2xl text-black"
          onClick={toggleSidenav}
          aria-label="Menu"
        >
          <FiMenu />
        </button>
      )}

      {/* Desktop Categories */}
      {!isMobile && (
        <div className="hidden lg:block relative group">
          <p className="flex items-center ml-4 text-black hover:text-green-pea font-semibold">
            Catégories
          </p>

          {/* Desktop Dropdown */}
          <div className="invisible group-hover:visible absolute left-0 mt-2 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            {categories.map((category) => (
              <div
                key={category.categoryType}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.categoryType)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to="#"
                  className={`block px-4 py-2 text-sm ${
                    activeCategory === category.categoryType
                      ? "bg-green-pea text-white"
                      : "text-black hover:bg-green-pea hover:text-white"
                  }`}
                >
                  {category.categoryType}
                  <IoIosArrowForward className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </Link>

                {/* Desktop Subcategories */}
                {activeCategory === category.categoryType && (
                  <div className="absolute left-full top-0 w-56 ml-1 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    {category.subCategories.map((subCategory) => (
                      <div
                        key={subCategory.name}
                        className="relative"
                        onMouseEnter={() =>
                          setActiveSubCategory(subCategory.name)
                        }
                        onMouseLeave={() => setActiveSubCategory(null)}
                      >
                        <Link
                          to="#"
                          className={`block px-4 py-2 text-sm ${
                            activeSubCategory === subCategory.name
                              ? "bg-green-pea text-white"
                              : "text-black hover:bg-green-pea hover:text-white"
                          }`}
                        >
                          {subCategory.name}
                          <IoIosArrowForward className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                        </Link>

                        {/* Desktop Popular Topics */}
                        {activeSubCategory === subCategory.name && (
                          <div className="absolute left-full top-0 w-56 ml-1 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            {subCategory.popularTopics.map((topic) => (
                              <Link
                                to="#"
                                key={topic}
                                className="block px-4 py-2 text-sm text-black hover:bg-green-pea hover:text-white"
                              >
                                {topic}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Updated Mobile Sidenav */}
      {isMobile && (
        <>
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidenav}
            />
          )}

          {/* Updated Sidenav Content */}
          <div
            className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-md transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Header with back button or title */}
            <div className="p-4 flex items-center justify-between border-b">
              {activeCategory || activeSubCategory ? (
                <button
                  onClick={() =>
                    activeSubCategory
                      ? setActiveSubCategory(null)
                      : resetNavigation()
                  }
                  className="text-xl text-black"
                >
                  <FiArrowLeft />
                </button>
              ) : (
                <span className="text-lg font-bold text-green-pea">Menu</span>
              )}
              <button onClick={toggleSidenav} className="text-xl text-black">
                <FiX />
              </button>
            </div>

            <div className="overflow-y-auto h-[calc(100%-64px)]">
              {/* Login/Signup Section */}
              {!activeCategory && !activeSubCategory && (
                <div className="p-4 border-b">
                  <Link
                    to="/login"
                    onClick={() => toggleSidenav()}
                    className="block w-full py-2 px-4 text-green-pea font-semibold"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => toggleSidenav()}
                    className="block w-full py-2 px-4 text-green-pea font-semibold"
                  >
                    S'inscrire
                  </Link>
                </div>
              )}

              {/* Categories Section */}
              {!activeCategory && !activeSubCategory && (
                <div className="p-4 border-b">
                  <h2 className="font-bold mb-2 text-green-pea">
                    Most popular
                  </h2>
                  {categories.map((category) => (
                    <button
                      key={category.categoryType}
                      onClick={() => setActiveCategory(category.categoryType)}
                      className="w-full text-left py-2 px-4 rounded text-black flex items-center justify-between"
                    >
                      {category.categoryType}
                      <IoIosArrowForward className="text-black" />
                    </button>
                  ))}
                </div>
              )}

              {/* More from CSL Section */}
              {!activeCategory && !activeSubCategory && (
                <div className="p-4 border-b">
                  <h2 className="font-bold mb-2 text-green-pea">
                    More from CSL
                  </h2>
                  {moreFromCSL.map((item) => (
                    <Link
                      key={item.title}
                      to={item.link}
                      className="block w-full text-left py-2 px-4 rounded text-black"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Language Selection */}
              {!activeCategory && !activeSubCategory && (
                <div className="p-4">
                  <button className="flex items-center space-x-2 py-2 px-4 border rounded-md border-green-pea">
                    <TbWorld className="text-green-pea" />
                    <span className="text-green-pea">Français</span>
                  </button>
                </div>
              )}

              {/* Subcategories View */}
              {activeCategory && !activeSubCategory && (
                <div className="p-4">
                  <h2 className="font-bold mb-4 text-green-pea">
                    {activeCategory}
                  </h2>
                  {categories
                    .find((cat) => cat.categoryType === activeCategory)
                    ?.subCategories.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => setActiveSubCategory(sub.name)}
                        className="w-full text-left py-2 px-4 rounded text-black flex items-center justify-between"
                      >
                        {sub.name}
                        <IoIosArrowForward className="text-black" />
                      </button>
                    ))}
                </div>
              )}

              {/* Topics View */}
              {activeSubCategory && (
                <div className="p-4">
                  <h2 className="font-bold mb-4 text-green-pea">
                    {activeSubCategory}
                  </h2>
                  {categories
                    .find((cat) => cat.categoryType === activeCategory)
                    ?.subCategories.find(
                      (sub) => sub.name === activeSubCategory
                    )
                    ?.popularTopics.map((topic) => (
                      <Link
                        to="#"
                        key={topic}
                        className="block w-full text-left py-2 px-4 rounded text-black"
                      >
                        {topic}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
