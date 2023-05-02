let { log, dir } = console;

//создаём точки с координатами x, y

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  constructor(x, y) {
    this.pointsCache = [];
  }

  createPoint(x, y) {
    const point = this.pointsCache.find((point) => x === point.x && y === point.y);

    if (!point) {
      this.pointsCache.push(new Point(x, y));
      return this.pointsCache[this.pointsCache.length - 1];
    }

    return point;
  }

  controlMethod() {
    return [...this.pointsCache];
  }
}

const pointFactory = new PointFactory;

const point1 = pointFactory.createPoint(1, 2);
const point2 = pointFactory.createPoint(2, 3);
const point3 = pointFactory.createPoint(1, 2);
const point4 = pointFactory.createPoint(2, 3);

console.dir(pointFactory.controlMethod(), pointFactory.controlMethod()[0], pointFactory.controlMethod()[1]);