import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
     <Provider store={store}>
     <Nav />
     <Route path="/" exact component={Home} />
     <Route path="/login" component={Login} />
     <PrivateRoute path="/cart" exact component={Cart} />
     <Route path="/details/:id" exact component={Details} />
     </Provider>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// const AuthButton = withRouter(({ history }) => {
//   return fakeAuth.isAuthenticated ? (
//     <button
//       className="btn btn-sm btn-warning"
//       onClick={() => {
//         fakeAuth.signout(() => history.push("/home"));
//       }}
//     >
//       <p>Sign out</p>
//     </button>
//   ) : (
//     <p id="warning-log">You are not Log in!</p>
//   );
// });

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function Login() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
      });
    };

      return (
        <div>
        <h1>Hello, guest!</h1>
        <p>
          You must log in to view the page at {from.pathname}
        </p>
        <p>
          <Button variant="primary" onClick={login}>Log In</Button>
        </p>
        </div>

      );
}

export default App;
