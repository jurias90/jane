import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuthorization = WrappedComponent => ({ history }) => {
  const userIsValid = useSelector(state => state.user.user.isValid);
  console.log(userIsValid);
  if (userIsValid) {
    return <WrappedComponent />;
  }

  history.push("/");
  return null;
};

export default WrappedComponent =>
  withRouter(withAuthorization(WrappedComponent));
