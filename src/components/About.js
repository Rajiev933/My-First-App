import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props){
    super(props);
    //console.log("Parent Constructor")
  }
  componentDidMount(){
    //console.log("parent Component did mount")
  }
  render() {
    //console.log("parent render")
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>This is About Page...</h1>
        <User name="Rajeev (function)" />
        <UserClass name="Rajeev (class)" location="Delhi (class)" />
      </div>
    );
  }
}

export default About;
