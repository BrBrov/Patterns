let {log, dir} = console;

//Делаем точки с разным набором координат

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

class PointXYZ {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

class PointBuilder {
	constructor (x, y, z) {
		if (z) {
			return new PointXYZ(x, y, z);
		}

		if (y) {
			return new PointXY(x, y);
		}

		if (x) {
			return new PointX(x);
		}
	}
}

dir(new PointBuilder(1));
dir(new PointBuilder(1, 2));
dir(new PointBuilder(1, 2, 3));
