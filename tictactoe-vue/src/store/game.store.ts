import { DEFAULT_CELL_COUNT, DEFAULT_ROW_COUNT, MARKERS, winConditions } from "../constants/game.constants";
import { Cell, GameStoreState, Phase, Pointer } from "./../types/game.types";
import { defineStore } from "pinia";
import { usePlayerStore } from "./player.store";

let cellId = 0;
const defaultMoveState = { cellId: -1, turn: -1 };
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
      history: [],
    };
  },
  getters: {
    currentPhase: (state): Phase => state.phase,
    getLastMove: (state) => state.history.slice(-1)[0] || defaultMoveState,
  },
  actions: {
    changeToNextPhase(cellId: number) {
      this.history.push({ ...this.currentPhase, cellId });
      const nextMark = this.currentPhase.mark === MARKERS.X ? MARKERS.O : MARKERS.X;

      this.phase = { turn: this.currentPhase.turn + 1, mark: nextMark };
    },
    backToLastMove() {
      if (this.history.length) {
        this.phase = this.history.pop()!;
      }
    },
    changeCellMark(cellId: number, newMark: Pointer) {
      this.cells.find((cell) => cell.id === cellId)!.pointer = newMark;
    },
    checkWinCondition() {
      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (this.cells[a].pointer && this.cells[a].pointer === this.cells[b].pointer && this.cells[a].pointer === this.cells[c].pointer) {
          const playerStore = usePlayerStore();
          playerStore.win(playerStore.getPlayerWithMark(this.cells[a].pointer)!.id);
        }
      }
    },
    markCell(cellId: number) {
      if (this.getLastMove.cellId === cellId) {
        //remove
        this.backToLastMove();
        this.changeCellMark(cellId, "");
      } else if (!this.cells.find((cell) => cell.id === cellId)?.pointer) {
        //new
        this.changeCellMark(cellId, this.currentPhase.mark);
        this.changeToNextPhase(cellId);
        this.checkWinCondition();
      } else {
        alert("Kendine gel Hile yapma!");
      }
      // win
    },
  },
});
