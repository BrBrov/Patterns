const { log } = console;

// Класс Point представляет точку на плоскости
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  saveState() {
    return new Memento(this.x, this.y);
  }

  restoreState(memento) {
    this.x = memento.x;
    this.y = memento.y;
  }
}

// Класс Memento представляет сохраненное состояние точки

class Memento {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Использование паттерна Memento
const point = new Point(1, 2);

log(point);

const memento = point.saveState();

point.x = 3;
point.y = 4;

log(point);

point.restoreState(memento);

log(point);
