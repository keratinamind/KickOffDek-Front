import React, { useEffect, useState } from "react";
import Cardproject from "../reuse/Cardproject";
import axios from "axios";

function Mainfeed() {
  const url = "http://localhost:8888";
  const [currentFeed, setCurrentFeed] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    try {
      const fetchProject = async () => {
        const res = await axios.get(`${url}/projects/get-all`);

        setCurrentFeed(res.data);
      };
      fetchProject();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClickCategory = (i) => {
    const arr = [...category];
    arr.push(i);
    setCategory(arr);
  };

  const createFilterFeed = () => {
    if (category.length === 0) {
      return currentFeed;
    } else {
      const filteredFeed = [];
      for (let x of category) {
        const newItem = currentFeed.filter((i) => i.Category.name === x);
        filteredFeed.push(newItem);
      }
      console.log(filteredFeed);
      return filteredFeed;
    }
  };

  const filteredFeed = createFilterFeed();

  console.log(filteredFeed);

  return (
    <>
      <div className="grid grid-cols-12 py-10 w-10/12 mx-auto">
        <div className="col-span-10">
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600"
            onClick={() => handleClickCategory("art")}
          >
            Art &amp; Craft
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("community")}
          >
            Community &amp; Social goods
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("design")}
          >
            Design &amp; Fashion
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("environment")}
          >
            Environmental
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("event")}
          >
            Events
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("film")}
          >
            Film &amp; Video
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("food")}
          >
            Food &amp; Drinks
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("music")}
          >
            Music
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("performance")}
          >
            Performance
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("photography")}
          >
            Photography
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("publishing")}
          >
            Publishing
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("research")}
          >
            Research
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("socialEnterprise")}
          >
            Social Enterprise
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("sport")}
          >
            Sport
          </button>
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white"
            onClick={() => handleClickCategory("tech")}
          >
            Tech &amp; Games
          </button>
        </div>
        <div className="col-span-2">
          <button
            className="m-2 p-1.5 rounded-md border border-black hover:text-white hover:bg-gray-900"
            onClick={() => setCategory([])}
          >
            Trending
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-center mb-10">
          <h1 className="font-extrabold text-lg">Trending Projects</h1>
        </div>
        <div className="grid grid-cols-3">
          {filteredFeed.map((item, idx) => (
            <div className="m-2 pb-4" key={idx}>
              <Cardproject {...item} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <button className="border border-black bg-purple-600 rounded-md p-3 text-white">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}

export default Mainfeed;
