let {log, dir} = console;

//Класс с методом создания точки из кучи классов

class Point {
	setX(x) {
		this.x = x;
	}

	setY(y) {
		this.y = y;
	}
}

class Facade {
	constructor() {
		this.point = new Point();
	}

	addX(x) {
		this.point.setX(x);
	}

	addY(y) {
		this.point.setY(y);
	}

	createPoint(obj) {
		this.addX(obj.x);
		this.addY(obj.y);
		return this.point;
	}
}

const facade = new Facade();

const coords = {
	x: 10,
	y: 20
};

const point = facade.createPoint(coords);

dir(point);
