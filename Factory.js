let {log, dir} = console;

//Делаем точки с разным набором координат
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

// Фабрика
class PointFactory {
    createPoint(type, ...args) {
        switch(type) {
            case '2D':
                return new Point2D(...args);
            case '3D':
                return new Point3D(...args);
            default:
                throw new Error('Unknown point type');
        }
    }
}

// Использование фабрики
let factory = new PointFactory();
let point2D = factory.createPoint('2D', 1, 2);
let point3D = factory.createPoint('3D', 1, 2, 3);
