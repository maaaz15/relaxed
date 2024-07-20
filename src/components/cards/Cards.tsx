"use client";

import { createContext, FC, useContext, useEffect, useState } from "react";
import AppContext from "@/context/appContext";
import { IconType } from "react-icons";
import ReactSlider from "react-slider";

interface CardProps {
  Icon: IconType;
  audioName: string;
}

const Cards: FC<CardProps> = ({ Icon, audioName }) => {
  const [volume, setVolume] = useState(50);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [active, setActive] = useState(false);
  const appContext = useContext(AppContext);

  useEffect(() => {
    let audioUrl = "";
    if (audioName === "waterWaves") {
      audioUrl = "/audio/waves.wav";
    }
    if (audioName === "ambulance") {
      audioUrl = "/audio/ambulance.wav";
    }
    if (audioName === "birds") {
      audioUrl = "/audio/birds.wav";
    }
    if (audioName === "campFire") {
      audioUrl = "/audio/campfire.wav";
    }
    if (audioName === "children") {
      audioUrl = "/audio/crowd.wav";
    }
    if (audioName === "cityRoad") {
      audioUrl = "/audio/traffic.wav";
    }
    if (audioName === "wind") {
      audioUrl = "/audio/wind.wav";
    }
    if (audioName === "rain") {
      audioUrl = "/audio/rain.mp3";
    }
    if (audioName === "thunder") {
      audioUrl = "/audio/thunder.wav";
    }
    if (audioName === "clockTimer") {
      audioUrl = "/audio/timer.wav";
    }
    if (!audio) {
      setAudio(new Audio(audioUrl));
    }
  }, [audioName, audio]);

  useEffect(() => {
    if (!appContext.isAudioPlaying) {
      audio?.pause();
    } else if (appContext.isAudioPlaying && active) {
      audio?.play();
    }
    if (appContext.isResetSettings) {
      resetSettings();
    }
  }, [appContext, active, audio]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume, audio]);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
    }
  }, [audio]);

  useEffect(() => {
    if (audio) {
      if (active && appContext.isAudioPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [active, appContext.isAudioPlaying, audio]);

  const toggleActive = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const resetSettings = () => {
    setActive(false);
    audio?.pause();
    setVolume(50);
    appContext.clearResetSettings();
  };

  return (
    <div
      className={`${"flex flex-wrap flex-col items-center justify-center relative w-[300px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] cursor-pointer rounded-[30px] border-2 text-card-foreground shadow-sm"} ${
        active &&
        "dark:bg-white bg-betterblue-100 opacity-80 transform transition-transform duration-300 active:scale-95"
      } ${!appContext.isAudioPlaying && "opacity-60"}`}
    >
      <div
        className="flex-grow-1 flex items-center justify-center w-full h-full transition-transform duration-300"
        onClick={() => {
          toggleActive();
        }}
      >
        {Icon ? (
          <Icon
            fontSize={40}
            className={`${""} ${
              active && "dark:text-betterblue-100 text-white"
            }`}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        <div
          className={`absolute bottom-5 w-full left-0 flex items-center justify-center ${
            active
              ? "opacity-100 visible animate-sliderActive"
              : "opacity-0 invisible"
          }`}
        >
          <ReactSlider
            className="w-[180px] flex items-center justify-center"
            thumbClassName="w-5 h-5 rounded-[20px] dark:bg-betterblue-100 bg-white shadow-md"
            trackClassName="h-2 rounded-lg bg-gray-400"
            onChange={(e) => {
              setVolume(e);
            }}
            value={volume}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
