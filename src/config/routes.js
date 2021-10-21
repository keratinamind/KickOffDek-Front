
import EditorHome from "../components/features/projecteditor/EditorHome";
import Homepage from "../pages/Homepage";

const route = {
  user: {
    route: [
      { path: "/project", component: EditorHome },
      { path: "/user", component: Homepage },
      { path: "/checkout", component: Homepage},
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
