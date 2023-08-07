import { defineStore } from "pinia";
import { Player, PlayerStoreState } from "../types/player.types";
import { PLAYER_ONE_ID, PLAYER_TWO_ID } from "../constants/player.constants";
import { useGameStore } from "./game.store";
import { MARKERS } from "../constants/game.constants";
import { Pointer } from "../types/game.types";

const initialPlayerState = (id: number): Player => ({
  id,
  win: 0,
  lose: 0,
  mark: id === PLAYER_ONE_ID ? MARKERS.X : MARKERS.O,
});

export const usePlayerStore = defineStore("player", {
  state: (): PlayerStoreState => ({
    players: [{ ...initialPlayerState(PLAYER_ONE_ID) }, { ...initialPlayerState(PLAYER_TWO_ID) }],
  }),
  getters: {
    getPlayer: (state) => (id: number) => state.players.find((player) => player.id === id),
    getOtherPlayerId: (state) => (id: number) => state.players.find((player) => player.id !== id)!.id,
    getGameStore: (state) => {
      return useGameStore();
    },
    getPlayerWithMark: (state) => (mark: Pointer) => state.players.find((player) => player.mark === mark),
  },
  actions: {
    lose(id: number) {
      const loseCount = this.getPlayer(id)!.lose + 1;
      this.players.find((player: Player) => player.id === id)!.lose = loseCount;
    },
    win(id: number) {
      const winCount = this.getPlayer(id)!.win + 1;
      this.players.find((player: Player) => player.id === id)!.win = winCount;
      this.lose(this.getOtherPlayerId(id));
    },
  },
});
