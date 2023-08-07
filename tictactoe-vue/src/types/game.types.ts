export type Pointer = "X" | "O" | "";
export type Phase = {
  turn: number;
  mark: Pointer;
};
export type Cell = {
  id: number;
  pointer: Pointer;
};

export type HistoryStep = Phase & {
  cellId: number;
};

export type GameStoreState = {
  rowCount: number;
  cellCount: number;
  phase: Phase;
  cells: Cell[];
  history: HistoryStep[];
};
