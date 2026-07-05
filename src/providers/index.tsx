import { ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import ThemeProvider from "./theme-provider";
import { Provider } from "react-redux";
import { store } from "@/store";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </Provider>
  );
}
