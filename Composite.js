let {log, dir} = console;

//Компонует все точки в одном классе

class Point {
	constructor(x, y, name) {
		this.x = x;
		this.y = y;
		this.name = name;
	}
}

class PointsComposite {
	constructor() {
		this.items = [];
	}

	add(x, y, name) {
		this.items.push(new Point(x, y, name));
	}

	remove(item) {
		this.items = this.items.filter(e =>{
			if (e.name !== item) {
				return e;
			}
		});
	}

	getItem(name) {
		for (const item of this.items) {
			if (name === item.name) {
				return item;
			}
		}
		return null;
	}
}

const points = new PointsComposite();
points.add(1, 2, 'start');
points.add(3, 4, 'middle');
points.add(5, 6, 'end');

dir(points.getItem('end'));
points.remove('end');
dir(points.getItem('end'));
