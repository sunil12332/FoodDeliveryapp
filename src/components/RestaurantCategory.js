
import { useState } from "react";
import ItemList from "./ItemList";





const  RestaurantCategory=({data,showitems,setshowIndex})=>{

  const handleClick=()=>{
    setshowIndex();
  };

  return(
    <div>
      
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between " onClick={handleClick}>
            <span className="font-bold  text-lg">{data.title}
            ({data.itemCards.length})</span>

            <span>⬇️</span>
            </div>
        

           {showitems&&<ItemList items={data.itemCards}></ItemList>}
        </div>

         


    </div>
  )

}

export default RestaurantCategory;