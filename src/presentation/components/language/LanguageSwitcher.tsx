// //  This file has import errors only because of the languages it has'nt detected
// //  This code is commented for further uses

// import { useState } from "react";
// import { TbWorld } from "react-icons/tb";
// import { useLanguage } from "../../../context/LanguageContext";
// import LanguageModal from "./LanguageModal";

// const LanguageSwitcher = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { state } = useLanguage();

//   return (
//     <>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="flex items-center space-x-2 py-2 px-4 border rounded-md border-green-pea hover:bg-green-pea/5"
//       >
//         <TbWorld className="text-green-pea" />
//         <span className="text-green-pea">
//           {state.currentLanguage === "fr" ? "Français" : "English"}
//         </span>
//       </button>

//       <LanguageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// };

// export default LanguageSwitcher;
