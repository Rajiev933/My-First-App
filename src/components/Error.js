import {useRouteError} from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <div className="error-code">{err.status}: {err.statusText}</div>
      <div className="error-message">Oops! Page not found.</div>
    </div>
  );
};

export default Error;
