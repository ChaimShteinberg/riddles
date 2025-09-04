import type { riddleInterface } from "../interface/riddle.interface.tsx";

export function handleAnswer(
  props: riddleInterface,
  answer: string,
  setFinish: Function
) {
  if (answer === props.correctAnswer) {
    if (props.riddleNum === props.sumRiddle - 1) {
      setFinish(true);
    } else {
      props.setReddleNum(props.riddleNum + 1);
    }
  } else {
    alert("Wrong, Try again");
  }
}
