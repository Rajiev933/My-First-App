const User = (props) => {
  return (
    <div className="container">
      <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: rajeev@gmail.com</h4>
      </div>
    </div>
  );
};

export default User;
