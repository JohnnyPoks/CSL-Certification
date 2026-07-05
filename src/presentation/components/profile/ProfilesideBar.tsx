import { useNavigate, useLocation } from "react-router-dom";

// Icons
import {
  FiUser,
  FiCamera,
  FiLock,
  FiCreditCard,
  FiBell,
  FiXCircle,
} from "react-icons/fi";

// Lib
import { getInitials } from "../../../lib/utils";

// Constants
// import { menuItems } from "../../../constants";

// Interfaces
import { IUserProfile } from "../../../domain/interfaces";

interface ProfileSidebarProps {
  profile: IUserProfile;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "profile", label: "Profil", path: "/profile", icon: <FiUser /> },
  {
    id: "photo",
    label: "Photo",
    path: "/profile/upload-photo",
    icon: <FiCamera />,
  },
  {
    id: "security",
    label: "Sécurité du compte",
    path: "/profile/security",
    icon: <FiLock />,
  },
  {
    id: "subscriptions",
    label: "Abonnements",
    path: "/profile/subscriptions",
    icon: <FiCreditCard />,
  },
  {
    id: "payment",
    label: "Moyens de paiement",
    path: "/profile/payment",
    icon: <FiCreditCard />,
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "/profile/notifications",
    icon: <FiBell />,
  },
  {
    id: "close",
    label: "Fermer le compte",
    path: "/profile/close-account",
    icon: <FiXCircle />,
  },
];

const ProfileSidebar = ({ profile, onSectionChange }: ProfileSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: (typeof menuItems)[0]) => {
    onSectionChange(item.id);
    navigate(item.path);
  };

  return (
    <div className="bg-green-pea/5 rounded-lg shadow-sm border border-green-pea/10">
      {/* Profile Header */}
      <div className="text-center p-8 border-b border-green-pea/10">
        <div className="w-24 h-24 mx-auto rounded-full bg-green-pea flex items-center justify-center text-white font-semibold text-3xl shadow-lg transform transition-transform hover:scale-105">
          {getInitials(profile.fullName)}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {profile.fullName}
        </h2>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`w-full text-left px-4 py-3 rounded-md mb-2 transition-all duration-200 flex items-center ${
              location.pathname === item.path
                ? "bg-green-pea text-white font-semibold shadow-md"
                : "text-gray-700 hover:bg-green-pea/10 hover:text-green-pea hover:translate-x-1"
            }`}
          >
            {item.icon && <span className="mr-3">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSidebar;
