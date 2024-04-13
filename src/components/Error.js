import {useRouteError} from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div class="error-container">
      <div class="error-code">{err.status}: {err.statusText}</div>
      <div class="error-message">Oops! Page not found.</div>
    </div>
  );
};

export default Error;
