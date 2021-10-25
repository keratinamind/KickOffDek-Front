import EditorHome from "../components/features/projecteditor/EditorHome";
import MyPledges from "../components/features/user-directory/MyPledges";
import Preference from "../components/features/user-directory/Preference";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Project from "../pages/Project";

const route = {
  user: {
    route: [
      // I edit this path
      { path: "/project", component: Project },
      //I added these path
      { path: "/dashboard/preference", component: Preference },
      { path: "/dashboard/mypledge", component: MyPledges },
      { path: "/dashboard", component: Dashboard },
      { path: "/explore", component: Category },
      //added till here
      { path: "/user", component: Homepage },
      { path: "/checkout", component: Homepage },
      { path: "/content", component: Homepage },
      { path: "/contact", component: Homepage },
      { path: "/forgotpassowrd", component: Homepage },
      { path: "/", component: Homepage },
    ],
    redirect: "/",
  },

  admin: {
    route: [{ path: "/home", component: Homepage }],
    redirect: "/",
  },

  guest: {
    route: [
      { path: "/login", component: Homepage },
      { path: "/register", component: Homepage },
      { path: "/about", component: Homepage },
      { path: "/", component: Homepage },
    ],
    redirect: "/",
  },
};

export default route;
