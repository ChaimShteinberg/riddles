import type { RiddlePlayInterface } from "../interface/riddlePlay.interface.tsx";

export function handleAnswer(
  props: RiddlePlayInterface,
  answer: string,
  setFinish: Function
) {
  if (answer === props.riddle.correctAnswer) {
    if (props.riddleNum === props.sumRiddle - 1) {
      setFinish(true);
    } else {
      props.setReddleNum(props.riddleNum + 1);
    }
  } else {
    alert("Wrong, Try again");
  }
}
