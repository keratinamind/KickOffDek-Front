import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import Footer from './components/reuse/Footer';
import Navbar from './components/reuse/Navbar';
import './App.css';
import route from "./config/routes";



function App() {
  const user = "user";
  console.log(user);
  // ใส่ ? ดัก null , set role หลักจากดูค่า
  const role = user === "user" ? "user" : user === "admin" ? "admin" : "guest";
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          
        {route[role].route.map((elem, idx)=> (
            <Route key={idx} path={elem.path} component={elem.component} redirect={elem.redirect} />
          ))}
          <Redirect to={route[role].redirect} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
