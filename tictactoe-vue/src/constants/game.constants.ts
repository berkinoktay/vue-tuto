import { Pointer } from "./../types/game.types";
export const DEFAULT_ROW_COUNT = 3;
export const DEFAULT_CELL_COUNT = 9;

export enum MARKERS {
  X = "X",
  O = "O",
  DEFAULT = "",
}

export const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
