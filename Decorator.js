let {log, dir} = console;

//Добавляем к точк свойства

class Point {
	setX(x) {
		this.x = x;
	}
}

class PointExtendes {
	constructor(point) {
		this.point = point;
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

const point = new Point();

point.setX(4);

const pointEx = new PointExtendes(point);


pointEx.setY(2);
pointEx.setZ(3);

log(pointEx.getCoordinates());

pointEx.point.setX(1);

log(pointEx.getCoordinates());