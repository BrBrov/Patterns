let {log, dir} = console;

//Разделяем цвет и координаты точек

class Red {
	color = 'Red';
}

class Green {
	color = 'Green';
}

class PointXY {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color.color;
	}
}

class PointX {
	constructor(x, color) {
		this.x = x;
		this.color = color.color;
	}
}

const red = new Red();
const green = new Green();

const pointX = new PointX(1, red);
const pointXY = new PointXY(1, 2, green);

log(pointX);
log(pointXY);