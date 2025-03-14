import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import About from "./components/about";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/contactUs";
import Error from "./components/error";
import RestraurantMenu from "./components/restraurantMenu";
import Shimmer from "./components/shimmer";
// import Grocery from "./components/grocery";

const Grocery=lazy(()=> import("./components/grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurants/:resId", element: <RestraurantMenu /> },
      { path: "/grocery", element: <Suspense fallback={<Shimmer/>}><Grocery /> </Suspense>},
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
