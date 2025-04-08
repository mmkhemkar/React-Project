import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Hedaer from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Glocery from "./components/Grocery";

const Glocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Hedaer />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { 
    path : '/',
    element : <AppLayout/>,
    errorElement: <Error />,
    children : [
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element : <About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/glocery',
        element:<Suspense fallback={<h1>Loading ...</h1>}> <Glocery/></Suspense>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu />
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
