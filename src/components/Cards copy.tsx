"use client";

import { Card, CardContent } from "./ui/card";
import { HoverEffect } from "./ui/card-hover-effect";
import { Slider } from "./ui/slider";
import { FaCloudRain, FaCity } from "react-icons/fa";
import { GiCampfire, GiNestBirds, GiWaves } from "react-icons/gi";
import { FaWind } from "react-icons/fa6";
import { IoThunderstorm } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";

export const Cards = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:gap-x-20 md:gap-y-10 lg:gap-x-20 lg:gap-y-10 gap-x-20 gap-y-10">
      {sounds.map((sounds, idx) => {
        const Icon = icons[idx];
        return (
          <div
            className={`w-[300px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] cursor-pointer rounded-[30px] border-2 text-card-foreground shadow-sm flex items-center justify-center flex-col flex-wrap relative transition-all duration-300 md:transition-all md:duration-300 lg:transition-all lg:duration-300 ${
              active === true
                ? "dark:bg-offwhite-100 bg-betterblue-100 opacity-80 transition-all duration-300"
                : ""
            }`}
            key={sounds.id}
            onClick={(i) => handleClick()}
          >
            <Icon
              className={`flex-grow ${
                active === true ? "dark:text-black text-white" : ""
              }`}
              size={40}
            />
            <Slider
              className={`bottom-3 md:bottom-5 lg:bottom-5 absolute w-4/5 md:max-xl:w-4/5 hidden ${
                active === true ? "dark:bg-primary flex" : ""
              }`}
              defaultValue={[50]}
              max={100}
              step={1}
            />
          </div>
        );
      })}
    </div>
  );
};

const sounds = [
  {
    src: "/audio/rain.mp3",
    icon: "<FaCloudRain />",
    id: 1,
  },
  {
    src: "/audio/campfire.wav",
    icon: "<GiCampfire />",
    id: 2,
  },
  {
    src: "/audio/birds.wav",
    icon: "<GiNestBirds />",
    id: 3,
  },
  {
    src: "/audio/wind.wav",
    icon: "<FaWind />",
    id: 4,
  },
  {
    src: "/audio/waves.wav",
    icon: "<GiWaves />",
    id: 5,
  },
  {
    src: "/audio/thunder.wav",
    icon: "<IoThunderstorm />",
    id: 6,
  },
  {
    src: "/audio/traffic.wav",
    icon: "<FaCity />",
    id: 7,
  },
  {
    src: "/audio/crowd.wav",
    icon: "<IoIosPeople />",
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
