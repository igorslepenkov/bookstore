import { css } from "styled-components";
import { Media } from "./media";

export enum Indent {
  MT = "mt",
  MB = "mb",
  MR = "mr",
  ML = "ml",
  PT = "pt",
  PB = "pb",
  PR = "pr",
  PL = "pl",
}

class IndentConstructor {
  indentsMap: Map<string, string>;
  levelsMap: Map<number, number[]>;
  constructor() {
    this.indentsMap = new Map();
    this.indentsMap.set(Indent.MB, "margin-bottom");
    this.indentsMap.set(Indent.MT, "margin-top");
    this.indentsMap.set(Indent.MR, "margin-right");
    this.indentsMap.set(Indent.ML, "margin-left");
    this.indentsMap.set(Indent.PB, "padding-bottom");
    this.indentsMap.set(Indent.PT, "padding-top");
    this.indentsMap.set(Indent.PR, "padding-right");
    this.indentsMap.set(Indent.PL, "padding-left");

    const levels: [number, number[]][] = [
      [1, [72, 72, 56]],
      [2, [48, 48, 36]],
      [3, [40, 40, 32]],
      [4, [32, 32, 24]],
      [5, [24, 24, 24]],
      [6, [20, 20, 20]],
      [7, [16, 16, 16]],
      [8, [8, 8, 8]],
    ];
    this.levelsMap = new Map(levels);
  }

  create(type: Indent, level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) {
    const property = this.indentsMap.get(type);
    const value = this.levelsMap.get(level);
    if (property && value) {
      const desktop = `${property}: ${value[0]}px`;
      const tablet = `${property}: ${value[1]}px`;
      const mobile = `${property}: ${value[2]}px`;

      return css`
        ${mobile};

        ${Media.LG} {
          ${desktop};
        }

        ${Media.MD} {
          ${tablet};
        }
      `;
    }
  }
}

export const indentsConstructor = new IndentConstructor();
