import React from "react";
import CampaignCard from "./CampaignCard";

function ProjectInfoCampaign() {
  const mainPic = "https://picsum.photos/200/200";
  const mainVid = "https://www.youtube.com/embed/Alm-YjqwDGU";

  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <h1 className="text-2xl font-bold my-2">About this project</h1>
        <img
          className="my-2 mx-auto"
          src={mainPic}
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
          src={mainVid}
          frameborder="0"
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
      <div className="col-span-1">
        <div className="flex justify-evenly flex-col items-center mb-10">
          <h1 className="my-2 text-2xl font-bold">Campaign</h1>
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoCampaign;
