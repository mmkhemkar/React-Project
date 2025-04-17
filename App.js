import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Hedaer from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Glocery from "./components/Grocery";

const Glocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

 // suppose authentication code writein here

 const [userName,setUserName] = useState();

 useEffect(()=>{
// suppose got data from API
  const data = {
    name : "Virat Kohli"
  }
  setUserName(data.name)
 },[])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
    <div className="app">
      <Hedaer />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      },
     {
       path:"/cart",
       element:<Cart/>
     }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
