import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <div>
       <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;