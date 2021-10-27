import { getToken } from "../helpers/localStorage";

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

function AppProvider({ children }) {
    const [isAuth, setIsAuth] = useState(getToken() ? true : false);
    return <AppContext.Provider value={{ isAuth, setIsAuth }}>{children}</AppContext.Provider>;
}

function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;
export { useAppContext };
