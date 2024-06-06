import { Coordinate } from "../types/type";

export const checkGsmeOver = (
  snakeHead: Coordinate,
  boundaries: any
): boolean => {
  return (
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax
  );
};
