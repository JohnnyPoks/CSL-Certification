// //  This file has import errors only because of the languages it has'nt detected
// //  This code is commented for further uses

// import { useLanguage } from "../../../context/LanguageContext";
// import { useTranslation } from "react-i18next";

// const LoadingIndicator = () => {
//   const { state } = useLanguage();
//   const { t } = useTranslation();
  
//   if (!state.isLoading) return null;
  
//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-green-pea text-white text-center py-1 text-sm">
//       {t("common.loading")}
//     </div>
//   );
// };

// export default LoadingIndicator; 