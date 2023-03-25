import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTackIdState",
  default: null,
});

export const isPlayState = atom({
  key: "isPlayState",
  default: false,
});
