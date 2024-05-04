import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

// Chunkimg
// Code Solitting
// Dynamic Bundling
// Lazy Loading
//on Demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      myName: "Rajeev",
    };
    setUserName(data.myName);
  });
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app font-serif text-lg">
      <UserContext.Provider value={{loggedInUser: "Elon musk"}}>
        <Header /></UserContext.Provider>
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
