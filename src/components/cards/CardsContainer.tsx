"use client";

import Cards from "./Cards";
import { FaCloudRain, FaCity } from "react-icons/fa";
import { GiCampfire, GiNestBirds, GiWaves } from "react-icons/gi";
import { FaWind } from "react-icons/fa6";
import { IoThunderstorm } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
      {sounds.map((sounds, idx) => {
        const Icon = icons[idx];
        return (
          <Cards Icon={Icon} audioName={sounds.audioName} key={sounds.id} />
        );
      })}
    </div>
  );
};

const sounds = [
  {
    audioName: "rain",
    icon: "FaCloudRain",
    id: 1,
  },
  {
    audioName: "campFire",
    icon: "GiCampfire ",
    id: 2,
  },
  {
    audioName: "birds",
    icon: "GiNestBirds ",
    id: 3,
  },
  {
    audioName: "wind",
    icon: "FaWind ",
    id: 4,
  },
  {
    audioName: "waterWaves",
    icon: "GiWaves ",
    id: 5,
  },
  {
    audioName: "thunder",
    icon: "IoThunderstorm ",
    id: 6,
  },
  {
    audioName: "cityRoad",
    icon: "FaCity ",
    id: 7,
  },
  {
    audioName: "children",
    icon: "IoIosPeople ",
    id: 8,
  },
];

const icons = [
  FaCloudRain,
  GiCampfire,
  GiNestBirds,
  FaWind,
  GiWaves,
  IoThunderstorm,
  FaCity,
  IoIosPeople,
];

export default CardsContainer;
