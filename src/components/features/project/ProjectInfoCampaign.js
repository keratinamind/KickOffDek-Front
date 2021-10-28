import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardReward from "../../reuse/Cardreward";
import CampaignCard from "./CampaignCard";
import RewardBar from "./RewardBar";
import axios from "../../../config/axios";

function ProjectInfoCampaign() {
  //   const mainPic = "https://picsum.photos/200/200";
  //   const mainVid = "https://www.youtube.com/embed/Alm-YjqwDGU";

  const { id } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    try {
      const fetchProjectById = async () => {
        const res = await axios.get(`/projects/get-by-id/${id}`);
        setProject(res.data);
      };
      fetchProjectById();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { campaignImage, pitchVideo } = project;

  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <h1 className="text-2xl font-bold my-2">About this project</h1>
        <img
          className="my-2 mx-auto"
          src={campaignImage}
          alt="KickOffDek"
          width="300"
          height="200"
        />
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid.
        </p>
        <iframe
          className="my-2 mx-auto"
          src={pitchVideo}
          width="700"
          height="500"
        ></iframe>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid. adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid.
        </p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid. adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid.
        </p>
      </div>

      <RewardBar />
    </div>
  );
}

export default ProjectInfoCampaign;
