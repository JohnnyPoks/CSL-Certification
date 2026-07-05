// //  This file has import errors only because of the languages it has'nt detected
// // This code is commented for further uses

// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { useLanguage } from "../../../context/LanguageContext";
// import { FiX, FiSearch, FiCheck } from "react-icons/fi";
// import { useTranslation } from "react-i18next";
// // import { languages } from "../../../constants";

// interface LanguageModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const LanguageModal = ({ isOpen, onClose }: LanguageModalProps) => {
//   const { state, dispatch } = useLanguage();
//   const { t } = useTranslation();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredLanguages = languages.filter(
//     (lang) =>
//       lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       lang.region.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleLanguageSelect = (langCode: "en" | "fr") => {
//     dispatch({ type: "SET_LANGUAGE", payload: langCode });
//     onClose();
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
//                 <Dialog.Title className="text-xl font-semibold mb-4 flex justify-between items-center">
//                   {t("common.chooseLanguage")}
//                   <button
//                     onClick={onClose}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                   >
//                     <FiX className="w-5 h-5" />
//                   </button>
//                 </Dialog.Title>

//                 {/* Search Input */}
//                 <div className="relative mb-6">
//                   <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder={t("common.searchLanguage")}
//                     className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-pea focus:border-transparent"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto">
//                   {filteredLanguages.map((lang) => (
//                     <button
//                       key={lang.code}
//                       onClick={() =>
//                         handleLanguageSelect(lang.code as "en" | "fr")
//                       }
//                       className={`p-4 rounded-lg text-left flex items-center justify-between transition-colors ${
//                         state.currentLanguage === lang.code
//                           ? "bg-green-pea text-white"
//                           : "hover:bg-gray-50"
//                       }`}
//                     >
//                       <div>
//                         <div className="font-medium">{lang.name}</div>
//                         <div className="text-sm opacity-75">{lang.region}</div>
//                       </div>
//                       {state.currentLanguage === lang.code && (
//                         <FiCheck className="w-5 h-5" />
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default LanguageModal;
