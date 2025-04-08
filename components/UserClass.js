import React from "react";

class UserClass extends React.Component {
  constructor(probs) {
    super(probs);
    // console.log(this.props.name +"constructor");
    this.state = {
     userInfo :{
        name:"DefaultName",
        location:"DefaultLocation"
     }
    };
  }

  async componentDidMount() {
    // console.log( this.props.name + "componentDidCatch");

   const data = await fetch("https://api.github.com/users/akshaymarch7");
   const json = await data.json();
   console.log(json)
   this.setState({
    userInfo:json
   })

  }



  render() {
    const { name, location,avatar_url } = this.state.userInfo;

    // console.log(this.props.name +"-render");
    // const { count2, count } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name} </h2>
        <h2>Location : {location} </h2>
        <h2>job : Developer </h2>
      </div>
    );
  }
}

export default UserClass;
