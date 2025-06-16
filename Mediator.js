const { log } = console;

// Создаём точки со своими цветами

class Point {
  constructor(x, y, z = 0, color = "black", label = "") {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    this.label = label;
  }

  toString() {
    return `Point(${this.x}, ${this.y}, ${this.z}) [color=${this.color}, label='${this.label}']`;
  }
}

// Абстрактный медиатор
class Mediator {
  notify(sender, event, data) {
    throw new Error("Method 'notify()' must be implemented.");
  }
}

// Коллега (точка), которая взаимодействует через медиатор
class PointMediatorExecutor {
  constructor(mediator, point) {
    this.mediator = mediator;
    this.point = point;
  }

  updateCoordinates(x, y, z = 0) {
    this.point.x = x;
    this.point.y = y;
    this.point.z = z;
    this.mediator.notify(this, "coordinates_updated", { x, y, z });
  }

  changeColor(color) {
    this.point.color = color;
    this.mediator.notify(this, "color_changed", { color });
  }
}

// Конкретный медиатор для управления точками
class PointMediator extends Mediator {
  constructor() {
    super();
    this.executors = [];
  }

  addExecutor(executor) {
    this.executors.push(executor);
  }

  notify(sender, event, data) {

    if (event === "coordinates_updated") {
      this.executors.forEach(executor => {
        if (executor !== sender) {
          log(`Mediator: Notifying ${executor.point.toString()} about coordinate change`);
        }
      });
    } else if (event === "color_changed") {
      // Например, запрещаем красный цвет
      if (data.color === "red") {
        log("Mediator: Red color is not allowed! Changing to blue.");
        sender.changeColor("blue");
      }
    }
  }
}

// Пример использования
const mediator = new PointMediator();

const point1 = new Point(1, 2, 0, "green", "A");
const point2 = new Point(3, 4, 0, "yellow", "B");

const pointExecutor1 = new PointMediatorExecutor(mediator, point1);
const pointExecutor2 = new PointMediatorExecutor(mediator, point2);

mediator.addExecutor(pointExecutor1);
mediator.addExecutor(pointExecutor2);

// Изменяем координаты первой точки
pointExecutor1.updateCoordinates(5, 6);

// Меняем цвет второй точки на красный (медиатор исправит на синий)
pointExecutor2.changeColor("red");

log("\nFinal state:");
log(pointExecutor1.point.toString());
log(pointExecutor2.point.toString());