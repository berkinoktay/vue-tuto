import { DEFAULT_CELL_COUNT, DEFAULT_ROW_COUNT, MARKERS } from "../constants/game.constants";
import { Cell, GameStoreState, Phase, Pointer } from "./../types/game.types";
import { defineStore } from "pinia";

let cellId = 0;
export const useGameStore = defineStore("game", {
  state: (): GameStoreState => {
    const cellConverter = (length: number): Cell[] =>
      Array.from({ length }, () => ({
        id: cellId++,
        pointer: MARKERS.DEFAULT,
      }));
    return {
      cellCount: DEFAULT_CELL_COUNT,
      cells: cellConverter(DEFAULT_CELL_COUNT),
      phase: { turn: 1, mark: MARKERS.X },
      rowCount: DEFAULT_ROW_COUNT,
      lastMove: { cellId: -1, mark: MARKERS.DEFAULT, lastPhase: {} },
    };
  },
  getters: {
    currentPhase: (state): Phase => state.phase,
  },
  actions: {
    changePhase(isChangeLastMove?: boolean) {
      if (isChangeLastMove) {
        this.phase = this.lastMove.lastPhase;
        return;
      }
      const nextMark = this.currentPhase.mark === MARKERS.X ? MARKERS.O : MARKERS.X;
      this.phase = { turn: this.currentPhase.turn + 1, mark: nextMark };
    },
    changeLastMove(cellId: number, mark: Pointer, oldMarker: Pointer) {
      this.lastMove = { cellId, mark, lastPhase: { turn: this.phase.turn - 1, mark: oldMarker } };
    },
    markCell(cellId: number) {
      if (this.lastMove.cellId === cellId && this.phase.mark) {
        this.cells.find((cell) => cell.id === cellId)!.pointer = MARKERS.DEFAULT;
        this.changeLastMove(cellId, this.currentPhase.mark === MARKERS.X ? MARKERS.O : MARKERS.X);
        this.changePhase(true);
      } else {
        this.changeLastMove(cellId, this.currentPhase.mark);
        this.cells.find((cell) => cell.id === cellId)!.pointer = this.currentPhase.mark;

        this.changePhase();
      }
    },
  },
});
