import { useSelector } from "react-redux";
import {
    Route,
    Redirect,

  } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    let auth = useSelector(state => state.auth.isLogged);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute