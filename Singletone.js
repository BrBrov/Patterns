let {log, dir} = console;

//Создаём класс, который всегда возвращает один и тот же результат

class Point {
	constructor(x, y) {
		if (Point.point) {
			return Point.point;
		}		
		this.x = x;
		this.y = y;
		Point.point = this;
	}
}

const point1 = new Point(1, 2);


dir(point1);

const point2 = new Point(3, 4);

dir(point2);