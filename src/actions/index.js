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

export const essayer = () => {
  return {
      type: ESSAI
  };
}