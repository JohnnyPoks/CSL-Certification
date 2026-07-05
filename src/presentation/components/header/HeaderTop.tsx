import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Categories from "../partials/Categories";
import DropdownMenu from "../partials/DropDown";
import SearchBar from "../searchbar/SearchBar";
import UserMenu from "../account/UserMenu";

// Icons
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart3, BsHeart } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

// Assets
import logo from "/logo.png";

// Constants
import { headerDropdownItems, mockUser } from "../../../data/constants";

const HeaderTop = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full border-b border-gray-200">
      <div className="h-16 mx-auto px-4 py-10 w-full flex items-center justify-between">
        {/* Left side - Hamburger menu on mobile */}
        <div className="flex items-center justify-between gap-4 mr-4">
          {/* Mobile Categories */}
          <div className="lg:hidden">
            <Categories
              isOpen={isSidenavOpen}
              onClose={() => setIsSidenavOpen(false)}
            />
          </div>
          {/* Logo - centered on mobile */}
          <Link to="/" className="max-lg:hidden">
            <img src={logo} alt="logo" className="h-14 lg:ml-4" />
          </Link>
          {/* Desktop Categories */}
          <div className="max-lg:hidden">
            <Categories />
          </div>
        </div>

        {/* Logo - centered on mobile */}
        <Link to="/" className="lg:hidden absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>

        {/* Search bar - hidden on mobile */}
        <div className="hidden lg:flex relative h-full flex-1 mx-4 items-center">
          <SearchBar />
        </div>

        {/* Right side icons */}
        <div className="flex items-center justify-between">
          {/* Mobile search icon */}
          <div className="lg:hidden flex items-center gap-4">
            <SearchBar />
            <DropdownMenu
              trigger={<BsCart3 className="w-6 h-6" />}
              content={{
                description: "Votre panier est vide",
                linkText: "Faire un achat",
              }}
              link="/cart"
            />
          </div>

          {isLoggedIn ? (
            <div className="hidden lg:flex items-center space-x-4">
              {headerDropdownItems.map((item) => (
                <DropdownMenu
                  key={item.trigger}
                  trigger={item.trigger}
                  link={item.link}
                  content={item.content}
                />
              ))}
              <DropdownMenu
                trigger="Mes apprentissages"
                link="/my-learning"
                content={{
                  description: "Voir tous vos apprentissages",
                  linkText: "Voir tous vos apprentissages",
                }}
              />
              <DropdownMenu
                trigger={<BsHeart className="w-6 h-6" />}
                content={{
                  description: "Vos favoris sont vides",
                  linkText: "Explorer les formations",
                }}
                link="/favorites"
              />
              <DropdownMenu
                trigger={<BsCart3 className="w-6 h-6" />}
                content={{
                  description: "Votre panier est vide",
                  linkText: "Faire un achat",
                }}
                link="/cart"
              />
              <button className="relative">
                <IoMdNotificationsOutline className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-green-pea text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
              <UserMenu user={mockUser} />
            </div>
          ) : (
            <div className="hidden lg:flex items-center">
              {headerDropdownItems.map((item) => (
                <DropdownMenu
                  key={item.trigger}
                  trigger={item.trigger}
                  link={item.link}
                  content={item.content}
                />
              ))}

              <a
                href="/login"
                className="ml-4 px-4 py-2 border border-green-pea rounded-md text-gray-600 hover:text-green-pea hover:bg-green-pea/10 text-nowrap"
              >
                Se connecter
              </a>
              <a
                href="/register"
                className="ml-4 px-4 py-2 bg-gray-800 rounded-md text-white text-nowrap"
              >
                S'inscrire
              </a>
              <a
                onClick={() => setIsLoggedIn(true)}
                href="#"
                className="ml-4 px-2 py-2 border border-green-pea rounded-md text-gray-600 hover:text-green-pea hover:bg-green-pea/10 text-nowrap"
              >
                <TbWorld className="w-7 h-7 text-green-pea" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
