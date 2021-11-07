import Home from "./components/home-page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { renderRoutes } from "react-router-config"
import routes from "./router";


function App() {
  return (
    <div className="App">
            {/* <switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Vip} />
            </switch> */}
            {renderRoutes(routes)}
    </div>
  );
}

export default App;
