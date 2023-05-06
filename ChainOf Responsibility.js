let {log, dir} = console;

//строим точки с разными координатами (x, y, z)
//в зависимости от количества входящих параметров
//будем создавать объекты с разным набором координат

class ChainBuilder {

  nextBuilder(pointBuilder) {
    this.bilder = pointBuilder;
    return pointBuilder;
  }

  buildPoint(...arg) {
    if(this.bilder) return this.bilder.buildPoint(...arg);
    return null;
  }
}

class Point extends ChainBuilder{
  buildPoint(...arg) {
    if (arg.length === 1) {
      return {
        x: arg[0]
      }
    }

    return super.buildPoint(...arg);
  }
}

class PointXY extends ChainBuilder {
  buildPoint(...arg) {
    if (arg.length === 2) {
      return {
        x: arg[0],
        y: arg[1]
      }
    }

    return super.buildPoint(...arg);
  }
}

class PointXYZ extends ChainBuilder {
  buildPoint(...arg) {
    if (arg.length === 3) {
      return {
        x: arg[0],
        y: arg[1],
        z: arg[2]
      }
    }

    return super.buildPoint(...arg);
  }
}

const point = new Point();
const pointXY = new PointXY();
const pointXYZ = new PointXYZ();

point.nextBuilder(pointXY).nextBuilder(pointXYZ);

log(point.buildPoint(1));
log(point.buildPoint(2, 3));
log(point.buildPoint(4, 5, 6));