import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import route from "./config/routes";
import AppProvider from "./contexts/AppContext";
import EditorProvider from "./contexts/EditorContext";
import { getToken } from "./helpers/localStorage";

function App() {
    const role = getToken() ? "user" : "guest";
    return (
        <div className="App">
            <BrowserRouter>
                <AppProvider>
                    <EditorProvider>
                        <Switch>
                            {route[role].route.map((elem, idx) => (
                                <Route key={idx} path={elem.path} component={elem.component} />
                            ))}
                            <Redirect to={route[role].redirect} />
                        </Switch>
                    </EditorProvider>
                </AppProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
