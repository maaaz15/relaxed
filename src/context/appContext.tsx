import { createContext } from "react";

export const context = createContext({
  isAudioPlaying: true,
  isResetSettings: false,
  togglePlaying: () => {},
  clearResetSettings: () => {},
  setResetSettings: () => {},
});

export default context;
