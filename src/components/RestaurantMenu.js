import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utlis/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

  let size = 0;
   
   
   function  RestaurantMenu() {

    const[showitems,setshowitem]=useState(false);
    const[Showindex,setshowindex]=useState(null);
  


      const{ resId }=useParams();

      const  resInfo =useRestrauntMenu(resId);
        
    
     if(  resInfo==null)  return <Shimmer/>; 
      
     const { text }= resInfo?.cards[0]?.card?.card;
     
   
     if(resInfo?.cards.length==6) size=5;
     else  size=4;


    const categories=resInfo?.cards[size]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c.card?.["card"]?.["@type"]==
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
     );
  
  

    return(
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{text}</h1> 
      {/* <p className="font-bold text-2xl">{cuisines.join(", ")}-{costForTwoMessage}</p> */}
      
      {
    
        categories.map((category,index)=>{
        
         return <RestaurantCategory key={category?.card?.card?.title}
          data={category?.card?.card}
          showitems={index==Showindex?true:false}
          setshowIndex={() => setshowindex(index)}
          ></RestaurantCategory>
      
        })

      }

    </div>
    );

    };



    export default RestaurantMenu;