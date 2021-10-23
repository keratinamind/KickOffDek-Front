import React from "react";
import UDHome from "../components/features/user-directory/UDHome";
import UDPreference from "../components/features/user-directory/UDPreference";
import UserDirectSideNav from "../components/reuse/UserDirectSideNav";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

function Dashboard() {
  const { path, url } = useRouteMatch();
  return (
    <div className="grid grid-cols-12 my-10">
      <div className="col-span-3">
        <UserDirectSideNav />
      </div>
      <div className="col-span-9">
        {/* how to do switch path here wa */}
        {/* <Switch>
          <Route path="/dashboard" component={UDHome} />
          <Route path="/dashboard/preference" component={UDPreference} />
        </Switch> */}
        {/* <UDHome /> */}
        <UDPreference />
      </div>
    </div>
  );
}

export default Dashboard;
