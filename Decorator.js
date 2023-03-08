let {log, dir} = console;

//Добавляем к точк свойства

class Point {
	constructor(x) {
		this.x = x;
	}
}

class PointExtendes {
	constructor(point) {
		this.point = point;
	}

	setX(x) {
		this.point.x = x;
	}

	setY(y) {
		this.point.y = y;
	}

	setZ(z) {
		this.point.z = z;
	}

	getCoordinates() {
		const result = [];
		for (const coord in this.point) {
			result.push(this.point[coord]);
		}

		return result;
	}
}

const point = new Point(1);

const pointEx = new PointExtendes(point);

pointEx.setX(4);
pointEx.setY(2);
pointEx.setZ(3);

log(pointEx.getCoordinates());