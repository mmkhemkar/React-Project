
import React from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends React.Component{
   constructor(props){
    super(props);
    // console.log("parent-constructor")
   }

   componentDidMount(){
    // console.log("parent-componentDidCatcgh")
   }
    render(){
        // console.log("parent-rende")
        return(
            <div>
                <h1>About us</h1>
                {/* <User name={"mayur function"}  location={"solapur funcion"} /> */}
                <UserClass name={"first "}  location={"solapur class"}/>
            </div>
        )
    }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About us</h1>
//             <User name={"mayur function"}  location={"solapur funcion"} />
//             <UserClass name={"mayur class"}  location={"solapur class"}/>
//         </div>
//     )
// }


export default About;