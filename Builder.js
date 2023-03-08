let {log, dir} = console;

//Делаем точки с разным набором координат

class Point {
	constructor (x) {
		this.x = x;
	}
}

class PointBuilder {
	constructor(x) {
		this.point = new Point(x);
	}

	addY (y) {
		this.point.y = y;
		return this;
	}

	addZ (z) {
		this.point.z = z;
		return this;
	}

	build() {
		return this.point;
	}
}

const point = new PointBuilder(1);

const point1 = point.addY(2).addZ(3).build();

log(point1);