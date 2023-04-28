let {log, dir} = console;

// Класс с методом создания точек из кучи классов
// Условно представим, что классы точек по логике очень сложные)))

class PointX {
	constructor(x) {
		this.x = x;
	}
}

class PointXY {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Facade {
	getPointX(x) {
		return new PointX(x);
	}

	getPointXY(x, y) {
		return new PointXY(x, y);
	}
}

const facade = new Facade();

const pointX = facade.getPointX(1);

const pointXY = facade.getPointXY(1, 2);

dir(pointX);
dir(pointXY);
