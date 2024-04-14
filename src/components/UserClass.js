import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com",

      }
    }
    console.log("child constructor")
  }

  async componentDidMount(){
    this.timer = setInterval(() => {
      console.log("Namste React OP")
    }, 1000);
    console.log("child component did mount")

    const data =await fetch("https://api.github.com/users/rajiev933");
    const json = await data.json();

    this.setState({
      userInfo: json
    })
    console.log(json);
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.userInfo !== prevState.userInfo || this.state.userInfo !== prevState.userInfo){
      // code
    }
    console.log("component did update");
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component will unmount");
  }

  render(){
    console.log("child render")
    const { name, location,avatar_url } = this.state.userInfo;
    return(
      <div className="container">
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rajeev@gmail.com</h4>
      </div>
    </div>
    )
  }
}

export default UserClass;



/**
 * 
 * constructor is called(dummy)
 * 
 * render (dummy)
 * <html dummy data>
 * 
 * component did mount 
 *    API CALL
 *    this.setState --> state variable updated
 * 
 * ---UPDATE
 *      render( API DATA)
 *      <html new api data>
 *      componentDidUpdate
 */