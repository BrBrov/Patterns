const { log } = console;

// Класс точки с паттерном 
class Point {
  constructor(x, y, subscriber) {
    this.x = x;
    this.y = y;
    this.subscriber = subscriber;
  }

  updatePoint(newX, newY) {
    this.x = newX;
    this.y = newY;
    this.subscriber.notifyObservers(this);
  }
}

// Класс подписчика
class Subscriber {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(point) {
    this.observers.forEach(observer => observer.update(point));
  }
}

//Класс наблюдателя
class Observer {
  update(point) {
    log(`Point updated!!! (${point.x}, ${point.y})`);
  }
}

// Использование паттерна Observer
const observer = new Observer();
const subscriber = new Subscriber();
subscriber.addObserver(observer);

const point1 = new Point(1, 2, subscriber);
const point2 = new Point(3, 4, subscriber);

point1.updatePoint(5, 6); //Point updated!!! (5, 6)
point2.updatePoint(7, 8); //Point updated!!! (7, 8)
