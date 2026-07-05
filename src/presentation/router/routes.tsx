import { RouteObject, Navigate } from "react-router-dom";
import Layout from "../layout";
import SignIn from "../pages/onboarding/SignIn";
import SignUp from "../pages/onboarding/SignUp";
import Profile from "../pages/profile/Profile";
import SubscriptionPage from "../pages/subscription/SubscriptionPage";
import SubscriptionCheckout from "../pages/subscription/SubscriptionCheckout";
import HomePage from "../pages/home/Home";
import Course from "../pages/course/Course";
import WishList from "../pages/wishlist/WishList";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import BusinessRegistration from "../pages/business/BusinessRegistration";
import StudyRoomPage from "../pages/studyroom/StudyRoomPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/course/:id",
        element: <Course />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/studyroom",
        element: <StudyRoomPage />,
      },
      {
        path: "/business/registration",
        element: <BusinessRegistration />,
      },
      {
        path: "/home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/course",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/subscription",
        element: <SubscriptionPage />,
      },
      {
        path: "subscription/checkout",
        element: <SubscriptionCheckout />,
      },
      {
        path: "/profile",
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "upload-photo",
            element: <Profile />,
          },
          {
            path: "security",
            element: <Profile />,
          },
          {
            path: "subscriptions",
            element: <Profile />,
          },
          {
            path: "payment",
            element: <Profile />,
          },
          {
            path: "privacy",
            element: <Profile />,
          },
          {
            path: "notifications",
            element: <Profile />,
          },
          {
            path: "close-account",
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default routes;
