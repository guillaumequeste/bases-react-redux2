import { WASH } from "../constants/action-types";
import { EAT } from "../constants/action-types";
import { ROT } from "../constants/action-types";
import { BG } from "../constants/action-types";
import { TG } from "../constants/action-types";
import { ESSAI } from "../constants/action-types";

export const washApple = () => {
  return {
      type: WASH
  };
}

export const eatApple = () => {
  return {
      type: EAT,
      bites: 2
  };
}

export const rotApple = () => {
  return {
      type: ROT
  };
}

export const bgApple = () => {
  return {
      type: BG
  };
}

export const toggle = () => {
  return {
      type: TG
  };
}

/* action pour laquelle le reducer est dans un autre fichier */
export const essayer = () => {
  return {
      type: ESSAI
  };
}

/* actions pour le counter */
export const incrementCount = count => {
  const num = count+1
  return {
  type: 'INCREMENT_COUNT',
  count: num
  }
}

export const decrementCount = count => {
  const num = count - 1
  return {
    type: 'DECREMENT_COUNT',
    count: num
  }
}