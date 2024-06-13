import { Coordinate } from "../types/type";

export const checkGameOver = (
  snakeHead: Coordinate,
  snakeBody: Coordinate[],
  boundaries: any
): boolean => {
  const isOutOfBoundaries =
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax;

  const hasCollidedWithBody = snakeBody.some(
    (segment) => segment.x === snakeHead.x && segment.y === snakeHead.y
  );

  return isOutOfBoundaries || hasCollidedWithBody;
};
