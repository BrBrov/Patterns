const { log } = console;

// Создаём точки со своими цветами

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getCoordinates() {
    return `Point(${this.x}, ${this.y})`;
  }
}

// Абстрактный медиатор
class AbstractMediator {
  notify(sender, event, data) {
    throw new Error("Method 'notify()' must be implemented.");
  }
}

// Класс, который взаимодействует через медиатор с точками
class Executor {
  constructor(mediator, point) {
    this.mediator = mediator;
    this.point = point;
  }

  updateX(x) {
    this.point.x = x;
    this.mediator.notify(this, "update X", { x });
  }

  updateY(y) {
    this.point.y = y;
    this.mediator.notify(this, "update Y", { y });
  }
}

// Конкретный медиатор для управления точками
class Mediator extends AbstractMediator {
  constructor() {
    super();
    this.executors = [];
  }

  addExecutor(executor) {
    this.executors.push(executor);
  }

  notify(sender, event, data) {
    if (event === "update X") {
      this.executors.forEach(executor => {
        if (sender == executor) {
          if (data.x <= 0) {            
            log(`Mediator: Notifying that X must be more then 0`);
            executor.updateX(1);
          } else {
            log(`Mediator: Notifying ${executor.point.getCoordinates()} about coordinate X change`);
          }
        }
      });
    } else if (event === "update Y") {
      this.executors.forEach(executor => {
        if (sender == executor) {
          if (data.y <= 0) {
            log(`Mediator: Notifying that Y must be more then 0`);
            executor.updateY(1);            
          } else {
            log(`Mediator: Notifying ${executor.point.getCoordinates()} about coordinate Y change`);
          }
        }
      });
    }
  }
}

// Пример использования
const mediator = new Mediator();

const point1 = new Point(1, 2);
const point2 = new Point(3, 4);

const pointExecutor1 = new Executor(mediator, point1);
const pointExecutor2 = new Executor(mediator, point2);

mediator.addExecutor(pointExecutor1);
mediator.addExecutor(pointExecutor2);

// Изменяем координаты первой точки
pointExecutor1.updateX(5);

// Изменяем координаты второй точки
pointExecutor2.updateY(1);

log(pointExecutor1.point.getCoordinates());
log(pointExecutor2.point.getCoordinates());

pointExecutor1.updateX(-2);
pointExecutor2.updateY(0);

log(pointExecutor1.point.getCoordinates());
log(pointExecutor2.point.getCoordinates());