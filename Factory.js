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

class FactoryDefault {
	constructor(Point, arg) {
		this.point = new Point(...arg);
	}

	getPoint() {
		return this.point;
	}
}

class FactoryPointX extends FactoryDefault{
	constructor(x) {
		super(PointX, [x]);
	}
}

class FactoryPointXY extends FactoryDefault {
	constructor(x, y){
		super(PointXY, [x, y]);
	}
}

class FactoryPointXYZ extends FactoryDefault {
	constructor(x, y, z) {
		super(PointXYZ, [x, y, z]);
	}
}

dir(new FactoryPointX(1).getPoint());
dir(new FactoryPointXY(1, 2).getPoint());
dir(new FactoryPointXYZ(1, 2, 3).getPoint());

