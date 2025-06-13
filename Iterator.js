const { log } = console;

// Создаём класс с массивом точек и его итератором
// Используем иетратор для обход массива точек
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PointIterator {
  constructor(points) {
    this.points = points;
    this.index = 0;
  }

  next() {
    if (this.index < this.points.length) {
      return {
        value: this.points[this.index++],
        done: false
      };
    } else {
      this.rewind();
      return {
        done: true
      };
    }
  }

  rewind() {
    this.index = 0;
  }
}

class PointCollection {
  constructor() {
    this.points = [];
  }

  addPoint(point) {
    this.points.push(point);
  }

  getIterator() {
    return new PointIterator(this.points);
  }
}

// Использование итератора
const collection = new PointCollection();
collection.addPoint(new Point(1, 2));
collection.addPoint(new Point(3, 4));
collection.addPoint(new Point(5, 6));

const iteratorCollection = collection.getIterator();

let pointOfIterator = iteratorCollection.next();

while(pointOfIterator.done === false) {
  log(pointOfIterator.value);
  pointOfIterator = iteratorCollection.next();
}