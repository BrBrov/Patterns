const { log } = console;

class Strategy {
  calculate() {
    throw new Error('Not implemented');
  }
}

class Point2DStrategy extends Strategy {
  calculate(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Point3DStrategy extends Strategy {
  calculate(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    const dz = pointA.z - pointB.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
}

class PointStrategyContext {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(pointA, pointB) {
    if(this.strategy === null) {
      return 'No strategy set';
    }

    return this.strategy.calculate(pointA, pointB);
  }
}

const pointDistanceCalculator = new PointStrategyContext();

const point2DStrategy = new Point2DStrategy();
const point3DStrategy = new Point3DStrategy();

pointDistanceCalculator.setStrategy(point2DStrategy);
log(pointDistanceCalculator.calculate({x: 1, y: 2}, {x: 3, y: 4}));

pointDistanceCalculator.setStrategy(point3DStrategy);
log(pointDistanceCalculator.calculate({x: 1, y: 2, z: 3}, {x: 4, y: 5, z: 6}));