import MyPledges from "../components/features/user-directory/MyPledges";
import Preference from "../components/features/user-directory/Preference";
import Category from "../pages/Category";
import CampaignDetails from "../pages/createproject/CampaignDetails";
import ChooseType from "../pages/createproject/ChooseType";
import ProfileDetails from "../pages/createproject/ProfileDetails";
import ProfileVisual from "../pages/createproject/ProfileVisual";
import ProjectCreated from "../pages/createproject/ProjectCreated";
import VerifyUser from "../pages/createproject/VerifyUser";
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

      { path: "/create/verify", component: VerifyUser },
      { path: "/create/type", component: ChooseType },
      { path: "/create/campaign", component: CampaignDetails },
      { path: "/create/visual", component: ProfileVisual },
      { path: "/create/profile", component: ProfileDetails },
      { path: "/create/profile", component: ProfileDetails },
      { path: "/create/finish", component: ProjectCreated },
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
