// This code is commented out for future uses

// import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
// import i18next from "i18next";

// type Language = "en" | "fr";

// interface LanguageState {
//   currentLanguage: Language;
//   isLoading: boolean;
// }

// type LanguageAction = {
//   type: "SET_LANGUAGE";
//   payload: Language;
// };

// const initialState: LanguageState = {
//   currentLanguage: localStorage.getItem("userLanguage") as Language || "fr",
//   isLoading: false
// };

// const LanguageContext = createContext<{
//   state: LanguageState;
//   dispatch: React.Dispatch<LanguageAction>;
// } | null>(null);

// const languageReducer = (state: LanguageState, action: LanguageAction): LanguageState => {
//   switch (action.type) {
//     case "SET_LANGUAGE":
//       return {
//         ...state,
//         isLoading: true,
//         currentLanguage: action.payload
//       };
//     case "LANGUAGE_LOADED":
//       return { ...state, isLoading: false };
//     default:
//       return state;
//   }
// };

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(languageReducer, initialState);

//   useEffect(() => {
//     if (state.isLoading) {
//       i18next.changeLanguage(state.currentLanguage).then(() => {
//         dispatch({ type: "LANGUAGE_LOADED" });
//       });
//     }
//   }, [state.currentLanguage]);

//   return (
//     <LanguageContext.Provider value={{ state, dispatch }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within LanguageProvider");
//   }
//   return context;
// };
