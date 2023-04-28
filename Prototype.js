let {log, dir} = console;

//Создаём копируем точки, что бы объекты были разнные по ссылке

class PointX {
	constructor(x) {
		this.x = x;
	}
}

class PointXY extends PointX{
	constructor(x,y) {
		super(x);
		this.y = y;
	}
}

class PointXYZ extends PointXY {
	constructor(x, y, z) {
		super(x, y);
		this.z = z;
	}
}


const pointXY = new PointXY(1, 2);
dir(pointXY);

const pointXYZ = new PointXYZ(1, 2, 3);

dir(pointXYZ);