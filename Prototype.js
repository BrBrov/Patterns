let {log, dir} = console;

//Создаём копируем точки, что бы объекты были разнные по ссылке

class Point {
	constructor(x, y) {
		return {
			x: x,
			y: y
		};
	}
}

class CreatePrototype {
	constructor(obj) {
		return Object.assign({}, obj);
	}
}

const point = new Point(1, 2);
let newPoint = point;
dir(point);
log(Object.is(point, newPoint));

newPoint = new CreatePrototype(point);

dir(newPoint);
log(Object.is(point, newPoint));