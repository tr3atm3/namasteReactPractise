import React from "react";
import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return <div>{err.status}</div>;
};

export default Error;
