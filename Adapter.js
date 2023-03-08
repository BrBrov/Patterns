let {log, dir} = console;

//Делаем возможность добавлять к точке y значение

class PointX {
	constructor(x) {
		this.x = x;
	}
}

class PointXY {
	constructor(point, y) {
		this.x = point.x;
		this.y = y;
	}
}

const pointX = new PointX(1);

log(pointX);

const pointXY = new PointXY(pointX, 2);

log(pointXY);