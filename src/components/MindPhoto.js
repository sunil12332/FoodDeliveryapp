import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";


 const MindPhoto = () =>{

    const[extdata,setextdata]=useState([])


    
    
    useEffect(()=>{
        fetchData();
      },[]);


       const   fetchData = async()=>{
 
        const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.30783329337843&lng=73.08413218706846&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json= await data.json();
     
        setextdata(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
       // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      //  console.log("HII");
        
      }

      if(extdata.length==0) return <h1>Loading</h1>

   
      function result(food){
      return  <ImageCard key={food.id} imageId={food.imageId} link={food.action.link}></ImageCard>
      }
    

     return(
        <div className="flex w-600px border-2 border-black  overscroll-x-auto" >
     {  
         extdata.map(result)
       
     }

      </div>

     
     )
    
 }


 export  default MindPhoto;
 