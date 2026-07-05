import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import ProfileSidebar from "../../components/profile/ProfilesideBar";
import ProfileForm from "../../components/profile/ProfileForm";
import PhotoUpload from "../../components/profile/PhotoUpload";
import AccountSecurity from "../../components/profile/AccountSecurity";
import CloseAccount from "../../components/profile/CloseAccount";
import SubscriptionView from "../../components/subscription/SubscriptionView";

// Interfaces
import { IUserProfile } from "../../../domain/interfaces";

// Constants
import { mockUser } from "../../../data/constants";

const Profile = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(
    getSectionFromPath(location.pathname)
  );
  const [profile, setProfile] = useState<IUserProfile>(mockUser);

  // Get active section from current path
  function getSectionFromPath(path: string): string {
    const pathMap: { [key: string]: string } = {
      "/profile": "profile",
      "/profile/upload-photo": "photo", 
      "/profile/security": "security",
      "/profile/subscriptions": "subscriptions",
      "/profile/payment": "payment",
      "/profile/privacy": "privacy", 
      "/profile/notifications": "notifications",
      "/profile/close-account": "close",
    };
    return pathMap[path] || "profile";
  }

  // Update active section when URL changes
  useEffect(() => {
    setActiveSection(getSectionFromPath(location.pathname));
  }, [location.pathname]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileForm profile={profile} onProfileUpdate={setProfile} />;
      case "photo":
        return <PhotoUpload profile={profile} onProfileUpdate={setProfile} />;
      case "security":
        return (
          <AccountSecurity profile={profile} onProfileUpdate={setProfile} />
        );
      case "subscriptions":
        return <SubscriptionView profile={profile} />;
      case "close":
        return <CloseAccount profile={profile} onProfileUpdate={setProfile} />;
      default:
        return <ProfileForm profile={profile} onProfileUpdate={setProfile} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="lg:w-1/4">
          <ProfileSidebar
            profile={profile}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">{renderActiveSection()}</div>
      </div>
    </div>
  );
};

export default Profile;
