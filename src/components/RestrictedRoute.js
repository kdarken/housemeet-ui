import React from "react";
import { Route, Redirect } from "react-router-dom";
//import auth from "./auth";

export const RestrictedRoute = ({
  redirectPath: redirectPath, 
  requiresLogin: requiresLogin,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if ((requiresLogin && localStorage.getItem('token')) || (!requiresLogin && !localStorage.getItem('token'))) {
          return <Component {...props} />;
        }
        return (
            <Redirect
                to={{
                pathname: redirectPath,
                state: {
                    from: props.location
                }
                }}
            />
        );  
      }}
    />
  );
};

export default RestrictedRoute;