// import React from "react";


// class UserClass extends React.Component{
     
//     constructor(props){
//         //why we write suprer(props) today homework;
//        super(props);

//        this.state={

//         userInfo:{
//             name:"Dummy",
//             location:"Default",
//             //avatar_url:"http://dummy-photo.com"
//         },
         
//        };



//     }

//     async componentDidMount(){

//         const data=await fetch("https://api.github.com/users/akshaymarch7")
//         const json= await data.json();


//         this.setState({
//             userInfo:json
//         })
//     }

  

//     render(){
     
//         const{name,location,avatar_url} =this.state.userInfo;
        
//         return(
      
  
// <div className="user-card">

//     {/* < button onClick={  ()=>{
//         //never update state directely
//         // this.setState({
//         //     count: this.state.count+1,
//         //     count2:this.state.count2+1
//         // });


//     }}></button> */}

//     <img src={avatar_url}></img>
//      <h2>Name:{name}</h2>
//      <h3>Location.{location}</h3>
//      <h4>Contact:@akshayhotel</h4>

//     </div> 
//         )
//     }
// }


// /***
//  * 
//  * 
//  * 
//  * constructor(dummy)
//  * Render(dummy)
//  * 
//  *   <HTML DUmmy>
//  * 
//  * Component Did Mount
//  *  <API call>
//  * <this.setState>
//  * 
//  * 
//  * ----update
// * 
// *   render(API data_)
// *<<HTML (new API data)
// *Component did update
//  */


// export default UserClass;