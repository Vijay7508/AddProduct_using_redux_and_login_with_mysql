import { Route, useNavigate} from "react-router-dom";
export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = true;
  const navigate= useNavigate()

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          navigate('/admin')
        ) : (
          navigate("/login")
        )
      }
    />
  );
}