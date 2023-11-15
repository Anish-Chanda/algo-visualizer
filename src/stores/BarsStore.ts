import { atom } from "nanostores";

export type Bar = {
  value: number;
  color: string;
};

export const $bars = atom<Bar[]>([]);
