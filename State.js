const { log } = console;

// Класс состояния точки
class StatePoint {
  handle(context) {
    throw new Error('Метод должен быть переопределен');
  }
}

// Конкретные состояния точек
class StatePoint2D extends StatePoint {
  constructor() {
    super();
  }

  handle(context) {
    log('StatePoint2D: Выполняется действие 2D');
    context.setState(new StatePoint3D());
  }

  getStateData(context) {
    return `x: ${context.x}, y: ${context.y}`;
  }
}

class StatePoint3D extends StatePoint {
  constructor() {
    super();
  }

  handle(context) {
    log('StatePoint3D: Выполняется действие 3D');
    context.setState(new StatePoint2D());
  }

  getStateData(context) {
    return `x: ${context.x}, y: ${context.y}, z: ${context.z}`;
  }
}

// Класс точки с разными состояниями (хранит данные и состояние)
class Point {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.state = new StatePoint2D(); // Начальное состояние
  }

  setState(state) {
    log(`Контекст: Переключение на ${state.constructor.name}`);
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }

  getCurrentCoordinates() {
    return this.state.getStateData(this);
  }
}

const point = new Point(1, 2);
log(point.getCurrentCoordinates());

point.request(); // Переключение на 3D
log(point.getCurrentCoordinates());

point.request(); // Переключение на 2D
log(point.getCurrentCoordinates());

