import CardReward from "../../reuse/Cardreward";

function RewardBar() {
    return (
        <div className="col-span-1">
            <div className="flex justify-evenly flex-col items-center mb-10">
                <h1 className="my-2 text-2xl font-bold">Reward</h1>
                <CardReward />
                <CardReward />
                <CardReward />
            </div>
        </div>
    );
}

export default RewardBar;
