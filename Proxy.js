let {log, dir} = console;

// через прокси класс из класса Point получаем координаты x и y,
// попутно выводя данные в консоль(наподобие логирования);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ProxyPoint {
  constructor (point) {
    this.point = point;
  }

  getX() {
    console.log('x coordinate ', this.point.x);
    return this.point.x;
  }

  getY() {
    console.log('y coordinate ', this.point.y);
    return this.point.y;
  }
}

const point = new Point(1, 2);

const proxy = new ProxyPoint(point);

log(proxy.getX());

log(proxy.getY());
