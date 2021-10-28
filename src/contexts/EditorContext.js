import { getToken } from "../helpers/localStorage";

const { createContext, useContext, useState } = require("react");

const EditorContext = createContext();

function EditorProvider({ children }) {
    const [project, setProject] = useState({});
    return <EditorContext.Provider value={{ project, setProject }}>{children}</EditorContext.Provider>;
}

function useEditorContext() {
    return useContext(EditorContext);
}

export default EditorProvider;
export { useEditorContext };
