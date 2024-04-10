import { CDN_URL } from "./utlis/contants";


const styleCard={
    backgroundColor:"#f0f0f0"
}

const  RestaurantCard=(props)=>{

    const{resData}=props;
      
    console.log(resData);
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,

    }=resData?.info;

    return (
        <div  
          data-testid="rescard"
         className="m-4 p-4 w-[250px] rounded-lg bg-orange-200 hover:shadow-2xl hover:shadow-orange-500   ">
            <img 
            className="rounded-lg" alt={cloudinaryImageId} 
            src={
                CDN_URL +
                cloudinaryImageId
              }/>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(', ')}  </h4>
            <h4>{avgRating}stars</h4>
            <h4>{deliveryTime}minutes</h4>

        </div>
    )
}



 export const withPromotedLabel=(RestaurantCard)=>{

   return(props)=>{

    return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
    )
   }
    
    
}



export default RestaurantCard;