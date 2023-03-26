import { atom } from "recoil";

export const isPlayState = atom({
  key: "isPlayState",
  default: false,
});

export const songsQueue = atom({
  key: "songsQueue",
  default: [],
});
