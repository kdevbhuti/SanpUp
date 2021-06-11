import './App.css';
import SignUp from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <Navigation/>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
