import { Outlet, ScrollRestoration } from "react-router-dom";
import AppFooter from "../components/footer/AppFooter";
import Header from "../components/header";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex flex-col max-w-screen-2xl mx-auto pb-12 w-full">
        <ScrollRestoration />
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
