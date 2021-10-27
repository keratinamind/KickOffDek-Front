import React, { useEffect, useState } from "react";
import { HiDeviceMobile, HiOutlineShare } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Cardproject from "../../reuse/Cardproject";
import axios from "axios";

function HomePreview() {
  const [project, setProject] = useState({});

    useEffect(() => {
        try {
            async function fetchProject() {
              const res = await axios.get("http://localhost:8888/projects/get-by-id/6");
              setProject(res.data)
            }
            fetchProject();
        } catch (err) {
            console.dir(err);
        }
    }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end mx-3 my-5">
        <div className="flex flex-row mx-3 items-center">
          <HiDeviceMobile />
          <button className="mx-2">Mobile View</button>
        </div>
        <div className="flex flex-row mx-3 items-center">
            <FaExternalLinkAlt />
          <button className="mx-2">Fullscreen View</button>
        </div>
      </div>

      <div
        className="bg-scroll h-full flex flex-row rounded-lg"
        style={{
          backgroundImage:
            "url(" +
            `${project?.coverImage}` +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full justify-around items-center text-gray-100">
          <div>
            <h1 className="text-5xl font-semibold py-2">{project?.organization}</h1>
            <h1 className="text-3xl py-2">{project?.tagline}</h1>
            <span className="text-xl py-2">{project?.province} , {project?.country} </span>
            <span className="text-xl px-2">{project?.Category?.name}</span>
            <div className="flex flex-row py-2 my-5">
              <button className="inline-flex bg-purple-600 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                <HiOutlineShare />
                <span className="px-1">Share</span>
              </button>

              <button className="inline-flex bg-clear mx-3 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                <HiOutlineShare />
                <span className="px-1">About</span>
              </button>
            </div>
            <div className="flex flex-row  my-3">
              {/* map ได้ */}
              <FaFacebookSquare className="mx-2 text-2xl" /> <FaInstagram className="mx-2 text-2xl" />
              <FaTwitter className="mx-2 text-2xl" /> <FaExternalLinkAlt className="mx-2 text-2xl" />
            </div>
          </div>
          <div>
            <Cardproject campaignImage={project?.campaignImage} target={project?.target} projectId={project?.id} currency={project?.Currency?.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePreview;
