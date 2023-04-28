let {log, dir} = console;

//Разделяем цвет и координаты точек

class Point {
	constructor( x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color.getColor();
	}
}

class Color {
	getColor() {
		return 'No color';
	}
}

class Red extends Color {
	constructor() {
		super();
		this.color = 'red';
	}

	getColor() {
		return this.color;
	}
}

const red = new Red();
const point = new Point(1, 2, red);

dir(point);

const color = new Color();
const nextPoint = new Point(1, 2, color);

dir(nextPoint);