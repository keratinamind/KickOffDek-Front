import React from "react";
import { BsCheck2Circle , BsChevronRight , BsFillPeopleFill ,BsFillPersonFill ,BsFillLightningChargeFill ,BsCurrencyDollar} from "react-icons/bs";
import { HiOutlineShare} from "react-icons/hi";
const naveditor = [
  {
    name: "Campaigns Details",
  },
  {
    name: "Profile Details",
  },
  {
    name: "Visuals",
  },
  {
    name: "Descriptions",
  },
  {
    name: "Rewards",
  },
  {
    name: "Payments",
  },
  {
    name: "Launch",
  },
];
const navupdateproject = [
  {
    icon: <BsFillPeopleFill/>,
    name: "Team"
  },
  {
    icon: <BsFillPersonFill/>,
    name: "Supporters",
  },
  {
    icon: <HiOutlineShare/>,
    name: "Updates",
  },
  {
    icon: <BsFillLightningChargeFill/>,
    name: "Descriptions",
  },
  {
    icon: <BsFillLightningChargeFill/>,
    name: "Stretch Goal",
  },
  {
    icon: <BsCurrencyDollar/>,
    name: "Payments",
  },
];
function ProjectEditorSideNav() {
  return (
    <div className="w-96 h-screen bg-gray-100 mb-5">
      <div className="py-5 px-5 flex flex-row justify-between items-center">
        <h1 className="">Project Editor</h1>{" "}
        <button className="bg-green-700 text-white rounded-md h-7 w-24">
          Continue
        </button>
      </div>
      <div className="px-5">
        <h1 className=" text-gray-800">Edit</h1>
        <ul className="py-5">
          {naveditor.map((elem) => (
            <li>
              <div className="flex items-center justify-between my-8 text-green-800 hover:bg-green-200">
                <div className="flex">
                  <BsCheck2Circle className="text-purple-800 text-xl" />
                  <h1 className="mx-3">{elem.name}</h1>
                </div>
                <BsChevronRight className="text-xl"/>
              </div>
            </li>
          ))}
        </ul>
        <h1 className="py-5 ">Manage</h1>
        <ul className="py-5">
          {navupdateproject.map((elem) => (
            <li>
              <div className="flex items-center justify-between my-6 text-green-800">
                <div className="flex">
                  <div className="text-purple-800 text-xl">{elem.icon}</div>
                  <h1 className="mx-3">{elem.name}</h1>
                </div>
                <BsChevronRight className="text-xl"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectEditorSideNav;