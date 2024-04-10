import { useEffect, useState } from "react";


const useOnlinestatus= () =>{


   const[status,setstatus]=useState(true);
    //check if online

   useEffect(()=>{

    window.addEventListener("online",()=>{
       setstatus(true);
           })

    window.addEventListener("offline",()=>{
            setstatus(false);
                })

},[])


    //boolean value
    return status ;
}

export default useOnlinestatus;