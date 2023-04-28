let {log, dir} = console;

//Делаем возможность добавлять к точке y значение

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

class AdapterPoint extends PointX {
	constructor(x, y) {
		super(x);
		return new PointXY(this.x, y);
	}
}

const pointXY = new AdapterPoint(1, 2);

dir(pointXY);
