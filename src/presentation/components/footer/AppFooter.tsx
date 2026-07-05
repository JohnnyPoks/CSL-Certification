// import { useTranslation } from "react-i18next";
// import { useLanguage } from "../../../context/LanguageContext";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { locations, footerLinks } from "../../../data/constants";

export default function AppFooter() {
  // const { t } = useTranslation();
  // const { state } = useLanguage();

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="bg-green-pea text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Locations */}
            {locations.map((location) => (
              <div key={location.name}>
                <h3 className="font-bold text-lg mb-4">{location.name}</h3>
                <div className="space-y-2">
                  <p className="flex items-start">
                    <HiOutlineLocationMarker className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    {location.address}
                  </p>
                  {location.phone.map((number) => (
                    <p key={number} className="flex items-center">
                      <HiOutlinePhone className="w-5 h-5 mr-2 flex-shrink-0" />
                      <a
                        href={`tel:${number.replace(/\s/g, "")}`}
                        className="hover:underline"
                      >
                        {number}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-amber-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} CSL. Tous droits réservés. Site créé
              par Okenly Solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-green-pea transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-pea transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-pea transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-pea transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-pea transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
