import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor")
  }
  componentDidMount() {
    //console.log("parent Component did mount")
  }
  render() {
    //console.log("parent render")
    return (
      <div className="flex flex-col items-center m-5">
        <h1 className="text-center font-bold text-xl">This is About Page...</h1>
        <div className="w-9/12 border flex flex-col items-center m-5">
          <div>
            
            <UserContext.Consumer>
            {(data)=><p>Logged In User: {data.loggedInUser}</p>}
            </UserContext.Consumer>
          </div>
          <User name="Rajeev (function)" />
          <UserClass name="Rajeev (class)" location="Delhi (class)" />
        </div>
      </div>
    );
  }
}

export default About;
