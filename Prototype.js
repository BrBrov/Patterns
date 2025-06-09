let {log, dir} = console;

//Создаём - точки, что бы объекты могли возвращать свои копии

class PointX {
    constructor(x) {
        this.x = x;
    }

    clone() {
        return new PointX(this.x);
    }
}

class PointXY extends PointX{
    constructor(x,y) {
        super(x);
        this.y = y;
    }

    clone() {
        return new PointXY(this.x, this.y);
    }
}

class PointXYZ extends PointXY {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    clone() {
        return new PointXYZ(this.x, this.y, this.z);
    }
}

const pointXY = new PointXY(1, 2);
dir(pointXY);

const pointXYZ = new PointXYZ(1, 2, 3);
dir(pointXYZ);

// Теперь можем создавать копии объектов
const pointXYClone = pointXY.clone();
dir(pointXYClone);

const pointXYZClone = pointXYZ.clone();
dir(pointXYZClone);
