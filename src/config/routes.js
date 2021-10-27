import ProjectEditorHome from "../pages/projecteditor/ProjectEditorHome";
import Homepage from "../pages/Homepage";
import SetupProject from "../pages/projecteditor/SetupProject";
import SetupProfile from "../pages/projecteditor/SetupProfile";
import SetupVisual from "../pages/projecteditor/SetupVisual";
import SetupDescription from "../pages/projecteditor/SetupDescription";
import SetupRewardHome from "../pages/projecteditor/SetupRewardHome";
import ConfigRewardFirst from "../pages/projecteditor/ConfigRewardFirst";
import ConfigRewardSecond from "../pages/projecteditor/ConfigRewardSecond";
import ConfigRewardThird from "../pages/projecteditor/ConfigRewardThird";
import PledgeCheckout from "../pages/checkout/PledgeCheckout";
import SetupPayments from "../pages/projecteditor/SetupPayments";
import SubmitStatus from "../pages/projecteditor/SubmitStatus";
import ManageUpdate from "../pages/projecteditor/ManageUpdate";
import ManageCreateUpdate from "../pages/projecteditor/ManageCreateUpdate";


const route = {
  user: {
    route: [
      { path: "/project/setup/project", component: SetupProject },
      { path: "/project/setup/profile", component: SetupProfile },
      { path: "/project/setup/visual", component: SetupVisual },
      { path: "/project/setup/payment", component: SetupPayments },
      { path: "/project/setup/description", component: SetupDescription },
      { path: "/project/setup/rewards/new1", component: ConfigRewardFirst },
      { path: "/project/setup/rewards/new2", component: ConfigRewardSecond },
      { path: "/project/setup/rewards/new3", component: ConfigRewardThird },
      { path: "/project/setup/summary", component:  SubmitStatus},
      { path: "/project/setup/rewards", component: SetupRewardHome },
      { path: "/project/update/new", component: ManageCreateUpdate },
      { path: "/project/update", component: ManageUpdate },
      { path: "/project/pledge/new", component: PledgeCheckout },
      { path: "/project", component: ProjectEditorHome },
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
