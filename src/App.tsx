import { RouterProvider } from "react-router-dom";
import router from "./presentation/router";
import AppProviders from "./providers";

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
