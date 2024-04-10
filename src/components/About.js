import User from "./user";
import UserClass from "./UserClass";
import React from "react";




class  About  extends React.Component {

    constructor(props) {
        //why we write suprer(props) today homework;
       super(props);
    }

    componentDidMount(){

    }

  render(){

    return(

    <div>
        <h1>About</h1>
        <h2>This is namaste react Web series</h2>
        <UserClass name={"Akshay"} location={"jodhpur"} />
        {/* <UserClass name={"Elon musk"} location={"jodhpur"} /> */}
    </div>

    )
}
    }

    /*
-parent constructor
-parent render

 -Akshay Constructor
 -Akshay render

 -Elon constructor
 -Elon render

 -Akshay ComponentDidMount
 -Elon ComponentDidMount
 -parent ComponentDidMount
(because dom manipulation is very costly)

 
 react batching render the phase of all children 



*/


export default  About;