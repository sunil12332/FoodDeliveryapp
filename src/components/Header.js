
import { useState,useContext } from "react";
import { LOGO_URL } from "../utlis/contants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/Usercontext";
import { useSelector } from "react-redux";
import cart from "./Cart";


const Header=()=>{

  
    const[btnNameReact,setBtnNameReact]=useState("login");

   // header render
   const status =useOnlinestatus()

   //subscribing to the  state using a selector

   const cartitems=useSelector((store)=>store.cart.items)

    const{loggedInUser}=useContext(UserContext);

    return(
        <div className="flex justify-between   bg-orange-400 shadow-lg m-2"> 
            <div className="logo-container">
                <img  className="w-56"  src= {LOGO_URL}/>
            </div>
            <div className="flex items-center ">
            <ul className="flex  p-4 m-4">
                <li className="px-4  font-bold text-2xl">Online status:{status? " ☑️":"❌"}</li>
                <li  className="px-4 font-bold text-2xl">  <Link to="/">  Home</Link></li>
                <li  className="px-4 font-bold text-2xl">
                <Link to="/about">  About</Link>
                </li>
                <li  className="px-4 font-bold text-2xl">
                    <Link to="/contact">  Contact us</Link>
                  </li>


                <li  className="px-4 font-bold text-2xl">
                    <Link to="/card">
                    cart {cartitems.length}</Link>
                    </li>
                
                <div className="  h-[50px] w-[100px] border-2 border-white rounded-lg hover:bg-orange-200">   
                
                   <button className=" p-1 px-4   font-bold text-2xl    " onClick={
                    ()=>{
                        btnNameReact =="login"
                        ? setBtnNameReact("Logout")
                        :setBtnNameReact("Login")
                    }
                }>
                    {btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    
                    </div>
          


            </ul>

            </div>
        </div>
    )
}

export default Header;


