import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/reuse/Footer";
import Navbar from "./components/reuse/Navbar";
import Homepage from "./pages/Homepage";
import "./App.css";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
