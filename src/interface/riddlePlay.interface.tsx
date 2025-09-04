import type { RiddleInterface } from "./riddle.interface";

export interface RiddlePlayInterface {
  riddle: RiddleInterface
  setReddleNum: Function;
  riddleNum: number;
  sumRiddle: number;
}
