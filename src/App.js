import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"; 
import RestaurantMenu from "./components/RestaurantMenu";
import  MindPhoto from "./components/MindPhoto";
import UserContext from "./utlis/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";
import Card from "./components/Cart";

function AppLayout() {
 const[userName,setUserName]=useState();

//authentication
useEffect(()=>{
  //make an api call and send username and password

  const data={
    name:"Sunil Chaudhary",
  };

  setUserName(data.name);
  
},[]);


  return (
    <Provider store={appStore} >
      <UserContext.Provider value={{loggedInUser:userName}}>
        <div className="app">
      <Header />
      {/* <MindPhoto/> */}
      <Outlet />
    </div>
      </UserContext.Provider>
      </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path: "",

    element: <AppLayout/>,
    children:[
      
            
      {
        path:"/",
        element: <Body />,
      },
    

      {
        path:"/about",
        element: <About/>,
      },
    
      {
        path:"/contact",
        element:<Contact/>,
      },

      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },

      {
        path:"/card",
        element:<Card/>
      }
    ],
    errorElement:<Error/>,   
  },

 
])



const root=ReactDOM.createRoot(document.getElementById("root"));





root.render(<RouterProvider router ={appRouter} />)
