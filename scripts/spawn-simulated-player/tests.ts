import {
  world,
  MinecraftItemTypes,
  ItemStack,
} from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { SpawnSimulatedPlayer } from "./index.js";

let host = [...world.getPlayers()][0];

SpawnSimulatedPlayer(host, function (simulatedPlayer) {
  simulatedPlayer.addEffect(MinecraftEffectTypes.Absorption, 1);
  simulatedPlayer.attack();
  simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5);
  simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
  simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
  simulatedPlayer.teleport({ x: 0, y: 0, z: 0 }, { dimension: simulatedPlayer.dimension, rotation: { x: 0, y: 0 }});
  simulatedPlayer.despawn();
});
