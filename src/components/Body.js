import { useEffect, useState } from "react";
import RestaurantCard ,{withPromotedLabel} from "../RestaurantCard";
import resList from "../utlis/mockData";
import Shimmer from "./Shimmer";
import { Link, json } from "react-router-dom";

import useOnlinestatus from "../utlis/useOnlineStatus";

const Body = () => {

    const status=useOnlinestatus();


   const [listofrestaurants,setListofrestaurant] = useState([1]);
   const[searchText,setsearchText]=useState("");
   
   const [listofrestaurants1,setListofrestaurant1] = useState([1]);


   const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);


      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData =async () => {

        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6148698&lng=73.8729867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

     


      const json = await data.json();

    setListofrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListofrestaurant1(listofrestaurants);
    

        console.log(json)
   
    };


    
        if(status==false) return<h1>Network problem</h1>
    

    if (listofrestaurants.length==1)
    {
        return(
            <Shimmer/>
        )
    }



   
    return  (
        <div className="body">

               <div className="filter flex">
               <div className="search m-4 p-4  flex  ">

                <input type="text" 
                data-testid="Searchinput"
                className="search-box border-2 border-black rounded-xl  m-4 " value={searchText}
                 onChange={(e)=>{ 

                  setsearchText(e.target.value);
                 }}
                />


                <button  className="px-4 py-2 border-2 bg-orange-200 m-4  rounded-lg" onClick={()=>{
                    //filter the restaurant cards and update the ui
                    //search the text;
                 const filteredRestaurant   =  listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                 setListofrestaurant1(filteredRestaurant);


                }}>Search</button>

            </div>


             <div className="m-4 p-4 flex items-center">

            
             <button className="px-4 py-2   bg-orange-200  rounded-lg" 
                onClick={()=>
                    {
                        const filteredList=listofrestaurants.filter(
                            (res)=>res.info.avgRating>4
                        );

                        setListofrestaurant(filteredList);
                       

                    }}
                >  
                 
                  Top Rated Restaurant
                </button>
                </div>
             


            </div>
            {<div className=" grid grid-cols-4 gap-1 justify-around mx-10">
            {
                listofrestaurants.map((restaurant)=>(
                    <Link
                    key={restaurant.info.id}
                     to={"/restaurants/" + restaurant.info.id}>
                    {/* {restaurant.data.promoted?(
                   <RestaurantCardPromoted resData={restaurant}/>
                    ):( <RestaurantCard  resData={restaurant}></RestaurantCard>)
                   } */}

                  <RestaurantCard  resData={restaurant}></RestaurantCard>
                    </Link>
                ))
            }
             

            </div> }


        </div>
    )

}


export  default Body