<script setup lang="ts">
/** Constants */
import { MARKERS } from "../constants/game.constants";

/** Types */
import { Pointer } from "../types/game.types";

/** Stores */
import { useGameStore } from "../store/game.store";
import { usePlayerStore } from "../store/player.store";

const gameStore = useGameStore();
const playerStore = usePlayerStore();

const classNames = (pointer: Pointer) => {
  const colors = {
    [MARKERS.O]: "text-rose-400",
    [MARKERS.X]: "text-cyan-400",
    [MARKERS.DEFAULT]: "text-cyan-400",
  };

  const bgColors = {
    [MARKERS.O]: "active:bg-red-600 hover:bg-red-300",
    [MARKERS.X]: "active:bg-blue-600 hover:bg-blue-300",
    [MARKERS.DEFAULT]: "active:bg-blue-600 hover:bg-blue-300",
  };

  return [colors[pointer], bgColors[gameStore.phase.mark]] || [colors[MARKERS.DEFAULT], bgColors[MARKERS.DEFAULT]];
};
</script>
<template>
  <div id="table" class="grid grid-flow-col grid-rows-3 gap-0 w-full justify-center">
    <button
      v-for="cell in gameStore.cells"
      :id="`cell-${cell.id}`"
      @click="gameStore.markCell(cell.id)"
      class="border-4 border-white w-48 h-48 flex justify-center items-center text-7xl font-mono"
      :class="classNames(cell.pointer)"
      :key="`cell-${cell.id}`"
    >
      {{ cell.pointer }}
    </button>
  </div>
</template>
<style scoped></style>
