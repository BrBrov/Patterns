let {log, dir} = console;

//Создаём координаты на основе точек

class Line {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

class Disatance extends Line {
	constructor (x1, x2) {
		super(x1, x2);
	}

	getLine() {
		return [this.start, this.end];
	}
}

class Section extends Line{
	constructor (x1, x2, y1, y2) {
		super([x1, y1], [x2, y2]);
	}

	getLine() {
		return [this.start, this.end];
	}
}


class AbstractFactory {
	createDistance(x, y) {
		return new Disatance(x, y);
	}

	createSection(x1, x2, y1, y2) {
		return new Section(x1, x2, y1, y2);
	}
}

const factory = new AbstractFactory();

const dist = factory.createDistance(1,2);
const section = factory.createSection(1, 1, 2, 2);

dir(dist.getLine());
dir(section.getLine());