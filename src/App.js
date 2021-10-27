import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import route from "./config/routes";
import AppProvider from "./contexts/AppContext";

function App() {
    const role = "user";
    return (
        <div className="App">
            <BrowserRouter>
                <AppProvider>
                    <Switch>
                        {route[role].route.map((elem, idx) => (
                            <Route key={idx} path={elem.path} component={elem.component} />
                        ))}
                        <Redirect to={route[role].redirect} />
                    </Switch>
                </AppProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
