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
import Preference from "../components/features/user-directory/Preference";
import MyPledges from "../components/features/user-directory/MyPledges";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import VerifyUser from "../pages/createproject/VerifyUser";
import ChooseType from "../pages/createproject/ChooseType";
import CampaignDetails from "../pages/createproject/CampaignDetails";
import ProfileVisual from "../pages/createproject/ProfileVisual";
import ProfileDetails from "../pages/createproject/ProfileDetails";
import ProjectCreated from "../pages/createproject/ProjectCreated";
import Project from "../pages/Project";
import ProfileEdit from "../pages/profileeditor/ProfileEdit";
import ProfilePreview from "../pages/ProfilePreview";

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
      { path: "/project/setup/summary", component: SubmitStatus },
      { path: "/project/setup/rewards", component: SetupRewardHome },
      { path: "/project/update/new", component: ManageCreateUpdate },
      { path: "/project/update", component: ManageUpdate },
      { path: "/project/pledge/new", component: PledgeCheckout },
      { path: "/project", component: ProjectEditorHome },
      // I edit this path
      //I added these path
      { path: "/dashboard/preference", component: Preference },
      { path: "/dashboard/mypledge", component: MyPledges },
      { path: "/dashboard", component: Dashboard },
      { path: "/explore/project", component: Project },
      { path: "/explore", component: Category },

      { path: "/create/verify", component: VerifyUser },
      { path: "/create/type", component: ChooseType },
      { path: "/create/campaign", component: CampaignDetails },
      { path: "/create/visual", component: ProfileVisual },
      { path: "/create/profile", component: ProfileDetails },
      { path: "/create/finish", component: ProjectCreated },
      //added till here
      { path: "/user/profile/manage", component: ProfileEdit },
      { path: "/user/profile/preview", component: ProfilePreview },
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
