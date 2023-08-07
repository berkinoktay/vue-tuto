import { Pointer } from "./game.types";

export type Player = {
  id: number;
  win: number;
  lose: number;
  mark: Pointer;
};

export type PlayerStoreState = {
  players: Player[];
};
