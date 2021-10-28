import CardReward from "../../reuse/Cardreward";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../../config/axios";
function RewardBar() {
  const { id } = useParams();

  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    axios
      .get(`/rewards/get-by-project-id/${id}`)
      .then((res) => {
        setRewards(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  console.log(rewards);
  return (
    <div className="col-span-1">
      <div className="flex justify-evenly flex-col items-center mb-10">
        <h1 className="my-2 text-2xl font-bold">Reward</h1>
        {rewards.map((item) => {
          return <CardReward key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default RewardBar;
