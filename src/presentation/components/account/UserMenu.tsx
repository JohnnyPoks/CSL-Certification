import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

// Lib
import { getInitials } from "../../../lib/utils";

// INTERFACES
import { IUserProfile, IUserMenuItem } from "../../../domain/interfaces";

// CONSTANTS
import { userMenuItems } from "../../../data/constants";

interface UserMenuProps {
  user: IUserProfile;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const renderMenuSection = (items: IUserMenuItem[]) => (
    <div className="py-2">
      {items.map((item) => (
        <Menu.Item key={item.label}>
          {({ active }) => (
            <Link
              to={item.link}
              className={`${
                active ? "bg-gray-100 hover:bg-green-pea/10" : ""
              } flex items-center justify-between px-4 py-2 text-sm text-black`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </Menu.Item>
      ))}
    </div>
  );

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-green-pea flex items-center justify-center text-white">
          {getInitials(user.fullName)}
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 z-50 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          {/* User Info */}
          <div className="flex items-center p-4">
            <div className="w-14 h-14 rounded-full bg-green-pea flex items-center justify-center text-white">
              {getInitials(user.fullName)}
            </div>
            <div className="px-4 py-3">
              <p className="text-lg font-medium text-black">{user.fullName}</p>
              <p className="text-sm text-black">{user.email}</p>
            </div>
          </div>

          {/* Menu Sections */}
          {Object.values(userMenuItems).map((section, index) => (
            <Fragment key={index}>{renderMenuSection(section)}</Fragment>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
